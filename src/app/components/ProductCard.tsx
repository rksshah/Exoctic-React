import React from 'react';
import { ShoppingBag, Eye, Heart, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { Product } from '../data/mockData';
import { useWishlist } from '../contexts/WishlistContext';
import { useCart } from '../contexts/CartContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
  className?: string;
  aspectRatio?: 'square' | '4/5'; // New prop to control aspect ratio
}

export function ProductCard({ product, onQuickView, className, aspectRatio = '4/5' }: ProductCardProps) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Default variant logic
    addToCart(product, 1, product.color || 'Default', product.details?.weight || 'Standard');
    
    toast.success(`Added ${product.name} to cart`, {
      description: "Continue shopping or proceed to checkout.",
      action: {
        label: "View Cart",
        onClick: () => console.log("Navigate to cart"),
      },
    });
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
      toast.success("Added to Wishlist");
    }
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onQuickView) onQuickView(product);
  };

  // Safe image handling
  const mainImage = product.images?.[0] || '';

  const aspectClass = aspectRatio === 'square' ? 'aspect-square' : 'aspect-[4/5]';

  return (
    <div className={clsx("group w-full relative", className)}>
      {/* Image Container */}
      <Link to={`/product/${product.slug}`} className={clsx("block relative overflow-hidden bg-[#f9f8f6] mb-4 rounded-sm", aspectClass)}>
        <ImageWithFallback 
          src={mainImage} 
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-30 pointer-events-none">
          {product.isNew && (
            <span className="bg-white/90 backdrop-blur text-black text-[10px] font-bold uppercase tracking-widest px-2 py-1 shadow-sm">New</span>
          )}
          {product.isBestSeller && (
            <span className="bg-[#555348] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 shadow-sm">Best Seller</span>
          )}
          {typeof product.stock === 'number' && product.stock < 5 && (
             <span className="bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-widest px-2 py-1 shadow-sm border border-red-100">Low Stock</span>
          )}
        </div>

        {/* Wishlist Button (Top Right) */}
        <button 
          onClick={handleWishlist}
          className={clsx(
            "absolute top-3 right-3 z-30 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm",
            inWishlist ? "bg-red-50 text-red-500 opacity-100" : "bg-white/80 text-black opacity-0 group-hover:opacity-100 hover:bg-black hover:text-white"
          )}
          aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={clsx("w-4 h-4", inWishlist && "fill-current")} />
        </button>
        
        {/* Hover CTA Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 z-20">
          <button
            onClick={handleAddToCart}
            className="bg-white text-[#555348] px-4 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-[#555348] hover:text-white transition-colors"
            title="Add to Cart"
          >
            Add to Cart
          </button>
          {onQuickView && (
            <button
              onClick={handleQuickView}
              className="bg-white text-[#555348] p-2.5 hover:bg-[#555348] hover:text-white transition-colors"
              title="Quick View"
            >
              <Eye className="w-4 h-4" />
            </button>
          )}
        </div>
      </Link>
      
      {/* Info */}
      <div className="flex flex-col items-start px-1">
        <h3 className="font-serif text-lg text-black mb-1 group-hover:text-[#8c8a7b] transition-colors leading-tight line-clamp-1">
          <Link to={`/product/${product.slug}`}>{product.name}</Link>
        </h3>
        <div className="flex justify-between w-full items-center">
           <p className="text-sm font-medium text-[#555348] tracking-wide">
             ${product.price.toFixed(2)}
           </p>
           {/* Color count or variant info */}
           {product.colorVariants && product.colorVariants > 1 ? (
             <span className="text-[10px] text-gray-400 uppercase tracking-wider">{product.colorVariants} Colors</span>
           ) : product.details?.fiberType ? (
             <span className="text-[10px] text-gray-400 uppercase tracking-wider">{product.details.fiberType}</span>
           ) : null}
        </div>
      </div>
    </div>
  );
}