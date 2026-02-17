import React from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon, MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

const Cart = ({ isOpen, onClose }) => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-coffee-200">
            <h2 className="text-xl font-bold text-coffee-900">Your Cart</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-coffee-100 transition-colors"
            >
              <XMarkIcon className="w-6 h-6 text-coffee-600" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-coffee-100 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-coffee-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <p className="text-coffee-600 mb-4">Your cart is empty</p>
                <button
                  onClick={onClose}
                  className="cafe-button"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="bg-coffee-50 rounded-lg p-4">
                    <div className="flex items-start space-x-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-coffee-900">{item.name}</h3>
                        <p className="text-sm text-coffee-600 mb-2">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-coffee-700">₹{item.price}</span>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 rounded-lg bg-coffee-200 hover:bg-coffee-300 transition-colors"
                            >
                              <MinusIcon className="w-4 h-4 text-coffee-700" />
                            </button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 rounded-lg bg-coffee-200 hover:bg-coffee-300 transition-colors"
                            >
                              <PlusIcon className="w-4 h-4 text-coffee-700" />
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="p-1 rounded-lg bg-red-100 hover:bg-red-200 transition-colors ml-2"
                            >
                              <TrashIcon className="w-4 h-4 text-red-600" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-coffee-200 p-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-coffee-900">Total:</span>
                <span className="text-xl font-bold text-coffee-700">₹{getTotalPrice()}</span>
              </div>
              <div className="space-y-2">
                <Link to="/checkout" onClick={onClose} className="w-full cafe-button block text-center">
                  Proceed to Checkout
                </Link>
                <button
                  onClick={() => {
                    clearCart();
                    onClose();
                  }}
                  className="w-full px-6 py-3 border border-coffee-300 text-coffee-700 rounded-lg font-semibold hover:bg-coffee-50 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
