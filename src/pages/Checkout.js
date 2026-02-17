import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CreditCardIcon,
  BanknotesIcon,
  QrCodeIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    landmark: '',
    deliveryType: 'delivery',
    paymentMethod: 'cash',
    specialInstructions: ''
  });

  const deliveryCharges = formData.deliveryType === 'delivery' ? 40 : 0;
  const subtotal = getTotalPrice();
  const total = subtotal + deliveryCharges;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // Place order
      setOrderPlaced(true);
      clearCart();
    }
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-cream py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircleIcon className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-coffee-900 mb-4">Order Confirmed!</h1>
            <p className="text-coffee-600 mb-8">
              Your order has been successfully placed and will be delivered soon.
            </p>
            <div className="bg-coffee-50 rounded-lg p-6 mb-8 text-left">
              <h3 className="font-semibold text-coffee-900 mb-4">Order Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-coffee-600">Order ID:</span>
                  <span className="font-medium">#{Math.floor(Math.random() * 1000000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-coffee-600">Total Amount:</span>
                  <span className="font-medium">₹{total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-coffee-600">Delivery Type:</span>
                  <span className="font-medium capitalize">{formData.deliveryType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-coffee-600">Payment Method:</span>
                  <span className="font-medium capitalize">{formData.paymentMethod}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              <Link to="/" className="cafe-button">
                Back to Home
              </Link>
              <Link to="/menu" className="px-6 py-3 border border-coffee-300 text-coffee-700 rounded-lg font-semibold hover:bg-coffee-50 transition-colors">
                Order More
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link to="/menu" className="inline-flex items-center text-coffee-600 hover:text-coffee-700 mb-4">
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Menu
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-coffee-900 font-elegant">
            Checkout
          </h1>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step >= 1 ? 'bg-coffee-600 text-white' : 'bg-coffee-200 text-coffee-600'
            }`}>
              1
            </div>
            <span className={`ml-2 font-medium ${
              step >= 1 ? 'text-coffee-900' : 'text-coffee-600'
            }`}>
              Details
            </span>
          </div>
          <div className={`w-16 h-1 mx-4 ${
            step >= 2 ? 'bg-coffee-600' : 'bg-coffee-200'
          }`}></div>
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step >= 2 ? 'bg-coffee-600 text-white' : 'bg-coffee-200 text-coffee-600'
            }`}>
              2
            </div>
            <span className={`ml-2 font-medium ${
              step >= 2 ? 'text-coffee-900' : 'text-coffee-600'
            }`}>
              Payment
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6">
              {step === 1 ? (
                /* Customer Details */
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-coffee-900 mb-4">Customer Information</h2>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-coffee-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-coffee-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-coffee-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-coffee-700 mb-2">
                      Delivery Address *
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="input-field"
                      placeholder="Khasra No-161, Plot No.10, Block A, Marium Nagar, Sewa Nagar, Ghaziabad 201003"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-coffee-700 mb-2">
                        Landmark
                      </label>
                      <input
                        type="text"
                        name="landmark"
                        value={formData.landmark}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="Near City Center"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-coffee-700 mb-2">
                        Delivery Type *
                      </label>
                      <select
                        name="deliveryType"
                        value={formData.deliveryType}
                        onChange={handleInputChange}
                        className="input-field"
                      >
                        <option value="delivery">Home Delivery</option>
                        <option value="pickup">Self Pickup</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-coffee-700 mb-2">
                      Special Instructions
                    </label>
                    <textarea
                      name="specialInstructions"
                      value={formData.specialInstructions}
                      onChange={handleInputChange}
                      rows={2}
                      className="input-field"
                      placeholder="Any special requests or dietary requirements..."
                    />
                  </div>
                </div>
              ) : (
                /* Payment Method */
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-coffee-900 mb-4">Payment Method</h2>
                  
                  <div className="space-y-3">
                    <label className="flex items-center p-4 border-2 border-coffee-200 rounded-lg cursor-pointer hover:border-coffee-400 transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        checked={formData.paymentMethod === 'cash'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <BanknotesIcon className="w-6 h-6 text-coffee-600 mr-3" />
                      <div>
                        <div className="font-medium text-coffee-900">Cash on Delivery</div>
                        <div className="text-sm text-coffee-600">Pay when you receive your order</div>
                      </div>
                    </label>

                    <label className="flex items-center p-4 border-2 border-coffee-200 rounded-lg cursor-pointer hover:border-coffee-400 transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="upi"
                        checked={formData.paymentMethod === 'upi'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <QrCodeIcon className="w-6 h-6 text-coffee-600 mr-3" />
                      <div>
                        <div className="font-medium text-coffee-900">UPI Payment</div>
                        <div className="text-sm text-coffee-600">Pay via UPI apps (GPay, PhonePe, etc.)</div>
                      </div>
                    </label>

                    <label className="flex items-center p-4 border-2 border-coffee-200 rounded-lg cursor-pointer hover:border-coffee-400 transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <CreditCardIcon className="w-6 h-6 text-coffee-600 mr-3" />
                      <div>
                        <div className="font-medium text-coffee-900">Credit/Debit Card</div>
                        <div className="text-sm text-coffee-600">Visa, Mastercard, Rupay</div>
                      </div>
                    </label>
                  </div>

                  {formData.paymentMethod === 'card' && (
                    <div className="mt-6 p-4 bg-coffee-50 rounded-lg">
                      <p className="text-sm text-coffee-600 mb-2">
                        <ExclamationTriangleIcon className="w-4 h-4 inline mr-1" />
                        Card payment interface will appear here in production
                      </p>
                      <p className="text-xs text-coffee-500">
                        This is a demo version. Actual payment integration would be implemented here.
                      </p>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-8 flex gap-4">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-3 border border-coffee-300 text-coffee-700 rounded-lg font-semibold hover:bg-coffee-50 transition-colors"
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  className="flex-1 cafe-button"
                >
                  {step === 1 ? 'Continue to Payment' : 'Place Order'}
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-coffee-900 mb-4">Order Summary</h3>
              
              <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-coffee-900 text-sm">{item.name}</h4>
                      <p className="text-xs text-coffee-600">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-medium text-coffee-700">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-coffee-200 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-coffee-600">Subtotal</span>
                  <span className="font-medium">₹{subtotal}</span>
                </div>
                {formData.deliveryType === 'delivery' && (
                  <div className="flex justify-between text-sm">
                    <span className="text-coffee-600">Delivery Charges</span>
                    <span className="font-medium">₹{deliveryCharges}</span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-bold text-coffee-900 pt-2 border-t border-coffee-200">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-coffee-50 rounded-lg">
                <p className="text-xs text-coffee-600">
                  <strong>Estimated Delivery:</strong> {formData.deliveryType === 'delivery' ? '30-45 mins' : '15-20 mins'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
