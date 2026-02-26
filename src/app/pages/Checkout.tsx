import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { ChevronRight, CreditCard, Truck, CheckCircle, Lock, Info } from 'lucide-react';
import { clsx } from 'clsx';
import { ShippingAddress, PaymentMethod } from '../types/order';

type CheckoutStep = 'information' | 'payment' | 'review';

export function Checkout() {
  const { items, total, clearCart } = useCart();
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState<CheckoutStep>('information');
  
  // Form states
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    phone: '',
  });

  const [deliveryMethod, setDeliveryMethod] = useState<'standard' | 'express' | 'overnight'>('standard');
  
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  // Redirect if cart is empty
  if (items.length === 0) {
    return <Navigate to="/shop" replace />;
  }

  // Delivery options
  const deliveryOptions = [
    { id: 'standard', name: 'Standard Shipping', price: 0, eta: '5-7 business days' },
    { id: 'express', name: 'Express Shipping', price: 15, eta: '2-3 business days' },
    { id: 'overnight', name: 'Overnight Shipping', price: 35, eta: '1 business day' },
  ];

  const selectedDelivery = deliveryOptions.find(d => d.id === deliveryMethod);
  const shippingCost = selectedDelivery?.price || 0;
  const tax = total * 0.08; // 8% tax
  const orderTotal = total + shippingCost + tax;

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('review');
  };

  const handlePlaceOrder = () => {
    // Generate order
    const orderNumber = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    const order = {
      id: `order-${Date.now()}`,
      orderNumber,
      userId: user?.id || 'guest',
      items: items.map(item => ({
        id: item.id,
        productId: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        color: item.color,
        weight: item.weight,
        image: item.image,
      })),
      subtotal: total,
      shipping: shippingCost,
      tax,
      total: orderTotal,
      shippingAddress,
      paymentMethod: 'credit_card' as const,
      deliveryMethod,
      status: 'processing' as const,
      trackingNumber: `TRK${Math.random().toString(36).substr(2, 12).toUpperCase()}`,
      createdAt: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + (selectedDelivery?.eta.includes('5-7') ? 7 : selectedDelivery?.eta.includes('2-3') ? 3 : 1) * 24 * 60 * 60 * 1000).toISOString(),
    };

    // Save order to localStorage
    const existingOrders = JSON.parse(localStorage.getItem('exotic-fiber-orders') || '[]');
    localStorage.setItem('exotic-fiber-orders', JSON.stringify([...existingOrders, order]));

    // Clear cart
    clearCart();

    // Navigate to confirmation
    navigate(`/order-confirmation/${order.orderNumber}`);
  };

  const steps = [
    { id: 'information', name: 'Information', icon: Info },
    { id: 'payment', name: 'Payment', icon: CreditCard },
    { id: 'review', name: 'Review', icon: CheckCircle },
  ];

  const currentStepIndex = steps.findIndex(s => s.id === currentStep);

  return (
    <div className="pt-0 pb-24 bg-[#f9f8f6] min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-medium mb-2">Checkout</h1>
          <p className="text-gray-500">Complete your order</p>
        </div>

        {/* Progress Steps */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStepIndex >= index;
              const isCurrent = currentStep === step.id;
              
              return (
                <React.Fragment key={step.id}>
                  <div className="flex flex-col items-center flex-1">
                    <div className={clsx(
                      "w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors",
                      isActive ? "bg-[#555348] text-white" : "bg-gray-200 text-gray-400",
                      isCurrent && "ring-4 ring-[#555348]/20"
                    )}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <p className={clsx(
                      "text-xs font-bold uppercase tracking-widest",
                      isActive ? "text-[#555348]" : "text-gray-400"
                    )}>
                      {step.name}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <ChevronRight className={clsx(
                      "w-5 h-5 flex-shrink-0 -mt-6",
                      isActive ? "text-[#555348]" : "text-gray-300"
                    )} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            
            {/* Shipping Address */}
            {currentStep === 'information' && (
              <div className="bg-white rounded-lg p-8">
                <h2 className="text-2xl font-medium mb-2">Shipping & Delivery</h2>
                <p className="text-sm text-gray-500 mb-8">Where should we send your order?</p>
                
                <form onSubmit={handleShippingSubmit} className="space-y-6">
                  
                  {/* Shipping Address Section */}
                  <div className="space-y-4">
                    <h3 className="font-bold text-xs uppercase tracking-widest text-gray-900">Shipping Address</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          required
                          value={shippingAddress.firstName}
                          onChange={(e) => setShippingAddress({ ...shippingAddress, firstName: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded focus:border-[#555348] focus:ring-1 focus:ring-[#555348] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          required
                          value={shippingAddress.lastName}
                          onChange={(e) => setShippingAddress({ ...shippingAddress, lastName: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded focus:border-[#555348] focus:ring-1 focus:ring-[#555348] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Street Address
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="123 Main Street"
                        value={shippingAddress.address}
                        onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded focus:border-[#555348] focus:ring-1 focus:ring-[#555348] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Apartment, Suite (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="Apt 4B"
                        value={shippingAddress.apartment}
                        onChange={(e) => setShippingAddress({ ...shippingAddress, apartment: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded focus:border-[#555348] focus:ring-1 focus:ring-[#555348] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2">
                        <label className="block text-sm text-gray-700 mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="New York"
                          value={shippingAddress.city}
                          onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded focus:border-[#555348] focus:ring-1 focus:ring-[#555348] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-700 mb-2">
                          State
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="NY"
                          value={shippingAddress.state}
                          onChange={(e) => setShippingAddress({ ...shippingAddress, state: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded focus:border-[#555348] focus:ring-1 focus:ring-[#555348] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-700 mb-2">
                          ZIP Code
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="10001"
                          value={shippingAddress.zipCode}
                          onChange={(e) => setShippingAddress({ ...shippingAddress, zipCode: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded focus:border-[#555348] focus:ring-1 focus:ring-[#555348] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="(555) 123-4567"
                          value={shippingAddress.phone}
                          onChange={(e) => setShippingAddress({ ...shippingAddress, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded focus:border-[#555348] focus:ring-1 focus:ring-[#555348] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Delivery Method Section */}
                  <div className="pt-6 border-t border-gray-100">
                    <h3 className="font-bold text-xs uppercase tracking-widest text-gray-900 mb-4">Delivery Speed</h3>
                    <div className="space-y-3">
                      {deliveryOptions.map((option) => (
                        <label
                          key={option.id}
                          className={clsx(
                            "flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all",
                            deliveryMethod === option.id
                              ? "border-[#555348] bg-[#555348]/5"
                              : "border-gray-200 hover:border-gray-300"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="delivery"
                              value={option.id}
                              checked={deliveryMethod === option.id}
                              onChange={() => setDeliveryMethod(option.id as any)}
                              className="w-4 h-4 text-[#555348] focus:ring-[#555348]"
                            />
                            <div>
                              <p className="font-medium text-sm">{option.name}</p>
                              <p className="text-xs text-gray-500">{option.eta}</p>
                            </div>
                          </div>
                          <p className="font-bold text-sm">
                            {option.price === 0 ? (
                              <span className="text-green-600">FREE</span>
                            ) : (
                              `$${option.price.toFixed(2)}`
                            )}
                          </p>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#555348] text-white py-4 rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-[#3d3a30] transition-colors mt-8"
                  >
                    Continue to Payment
                  </button>
                </form>
              </div>
            )}

            {/* Payment */}
            {currentStep === 'payment' && (
              <div className="bg-white rounded-lg p-8">
                <h2 className="text-2xl font-medium mb-6 flex items-center gap-2">
                  Payment Information
                  <Lock className="w-5 h-5 text-green-600" />
                </h2>
                
                <form onSubmit={handlePaymentSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="1234 5678 9012 3456"
                      value={paymentMethod.cardNumber}
                      onChange={(e) => setPaymentMethod({ ...paymentMethod, cardNumber: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded focus:border-[#555348] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">
                      Cardholder Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={paymentMethod.cardName}
                      onChange={(e) => setPaymentMethod({ ...paymentMethod, cardName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded focus:border-[#555348] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="MM/YY"
                        value={paymentMethod.expiryDate}
                        onChange={(e) => setPaymentMethod({ ...paymentMethod, expiryDate: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded focus:border-[#555348] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="123"
                        value={paymentMethod.cvv}
                        onChange={(e) => setPaymentMethod({ ...paymentMethod, cvv: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded focus:border-[#555348] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded text-xs text-gray-600 flex items-start gap-2">
                    <Lock className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <p>Your payment information is encrypted and secure. We never store your full card details.</p>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <button
                      type="button"
                      onClick={() => setCurrentStep('information')}
                      className="flex-1 border border-gray-300 py-4 text-xs font-bold uppercase tracking-widest hover:border-[#555348] transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-[#555348] text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#3d3a30] transition-colors"
                    >
                      Review Order
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Review */}
            {currentStep === 'review' && (
              <div className="bg-white rounded-lg p-8">
                <h2 className="text-2xl font-medium mb-6">Review Your Order</h2>
                
                {/* Shipping Address Review */}
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-sm uppercase tracking-widest">Shipping Address</h3>
                    <button
                      onClick={() => setCurrentStep('information')}
                      className="text-xs text-[#555348] hover:underline"
                    >
                      Edit
                    </button>
                  </div>
                  <p className="text-sm text-gray-700">
                    {shippingAddress.firstName} {shippingAddress.lastName}<br />
                    {shippingAddress.address}<br />
                    {shippingAddress.apartment && <>{shippingAddress.apartment}<br /></>}
                    {shippingAddress.city}, {shippingAddress.state} {shippingAddress.zipCode}<br />
                    {shippingAddress.phone}
                  </p>
                </div>

                {/* Delivery Method Review */}
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-sm uppercase tracking-widest">Delivery Method</h3>
                    <button
                      onClick={() => setCurrentStep('information')}
                      className="text-xs text-[#555348] hover:underline"
                    >
                      Edit
                    </button>
                  </div>
                  <p className="text-sm text-gray-700">
                    {selectedDelivery?.name} - {selectedDelivery?.eta}
                  </p>
                </div>

                {/* Payment Method Review */}
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-sm uppercase tracking-widest">Payment Method</h3>
                    <button
                      onClick={() => setCurrentStep('payment')}
                      className="text-xs text-[#555348] hover:underline"
                    >
                      Edit
                    </button>
                  </div>
                  <p className="text-sm text-gray-700">
                    Card ending in {paymentMethod.cardNumber.slice(-4)}
                  </p>
                </div>

                <button
                  onClick={handlePlaceOrder}
                  className="w-full bg-[#555348] text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#3d3a30] transition-colors"
                >
                  Place Order - ${orderTotal.toFixed(2)}
                </button>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-32">
              <h3 className="font-bold text-sm uppercase tracking-widest mb-6">Order Summary</h3>
              
              {/* Items */}
              <div className="space-y-4 mb-6 pb-6 border-b border-gray-100">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 bg-[#f9f8f6] rounded overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        {item.color} • {item.weight} • Qty: {item.quantity}
                      </p>
                      <p className="text-sm font-bold mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="space-y-2 text-sm mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-lg">${orderTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}