export interface ShippingAddress {
  firstName: string;
  lastName: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
}

export interface PaymentMethod {
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
}

export interface OrderItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  color: string;
  weight: string;
  image: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  userId: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  shippingAddress: ShippingAddress;
  paymentMethod: 'credit_card' | 'paypal' | 'apple_pay';
  deliveryMethod: 'standard' | 'express' | 'overnight';
  status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
  trackingNumber?: string;
  createdAt: string;
  estimatedDelivery: string;
}

export interface TrackingEvent {
  status: string;
  location: string;
  timestamp: string;
  description: string;
}
