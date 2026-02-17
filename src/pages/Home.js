import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  FireIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const [loadedImages, setLoadedImages] = useState({});
  
  const handleImageLoad = (itemId) => {
    setLoadedImages(prev => ({ ...prev, [itemId]: true }));
  };

  const handleImageError = (e, itemId) => {
    e.target.src = `https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop&auto=format`;
    setLoadedImages(prev => ({ ...prev, [itemId]: true }));
  };
  
  const featuredDishes = [
    {
      id: 1,
      name: "Classic Margherita Pizza",
      description: "Fresh mozzarella, basil, tomato sauce",
      price: 299,
      image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400",
      rating: 4.8,
      isVeg: true,
      isPopular: true
    },
    {
      id: 2,
      name: "ARM Special Burger",
      description: "Double patty, cheese, special sauce",
      price: 249,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
      rating: 4.9,
      isVeg: false,
      isPopular: true
    },
    {
      id: 3,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center",
      price: 189,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
      rating: 4.7,
      isVeg: true,
      isPopular: false
    }
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      rating: 5,
      comment: "Amazing food quality and quick delivery! The ARM Special Burger is my favorite.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
    },
    {
      name: "Priya Patel",
      rating: 5,
      comment: "Best café in Ghaziabad! Love their pizza collection and the ambiance is perfect.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100"
    },
    {
      name: "Amit Kumar",
      rating: 4,
      comment: "Great taste and reasonable prices. The staff is very friendly and professional.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
    }
  ];

  const specialOffers = [
    {
      title: "Weekend Special",
      description: "Get 20% off on all pizzas",
      code: "WEEKEND20",
      bgColor: "bg-gradient-to-r from-coffee-600 to-coffee-700"
    },
    {
      title: "Combo Deal",
      description: "Burger + Fries + Drink @ ₹399",
      code: "COMBO399",
      bgColor: "bg-gradient-to-r from-orange-500 to-amber-600"
    },
    {
      title: "Happy Hours",
      description: "Buy 1 Get 1 on all beverages",
      code: "BOGO",
      bgColor: "bg-gradient-to-r from-red-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600"
            alt="Restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-coffee-900/80 to-coffee-700/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-elegant">
            A.R.M CAFE
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-coffee-100">
            Always Ready To Munch
          </p>
          <p className="text-lg md:text-xl mb-12 text-coffee-200 max-w-2xl mx-auto">
            Experience the perfect blend of taste and ambiance at your premium café destination in Ghaziabad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className="cafe-button bg-white text-coffee-800 hover:bg-coffee-50">
              Order Now
              <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
            </Link>
            <a 
              href="tel:+919876543210"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-coffee-800 transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-4 font-elegant">
              Featured Dishes
            </h2>
            <p className="text-lg text-coffee-600 max-w-2xl mx-auto">
              Discover our most loved creations, crafted with the finest ingredients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <div key={dish.id} className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover">
                <div className="relative">
                  {!loadedImages[dish.id] && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    </div>
                  )}
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className={`w-full h-64 object-cover transition-opacity duration-300 ${
                      loadedImages[dish.id] ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => handleImageLoad(dish.id)}
                    onError={(e) => handleImageError(e, dish.id)}
                    loading="lazy"
                  />
                  {dish.isPopular && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <FireIcon className="w-4 h-4 mr-1" />
                      Popular
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    {dish.isVeg ? (
                      <div className="veg-indicator"></div>
                    ) : (
                      <div className="non-veg-indicator"></div>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-coffee-900 mb-2">{dish.name}</h3>
                  <p className="text-coffee-600 mb-4">{dish.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIconSolid 
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(dish.rating) 
                              ? 'text-yellow-400' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-coffee-600">{dish.rating}</span>
                    </div>
                    <span className="text-2xl font-bold text-coffee-700">₹{dish.price}</span>
                  </div>
                  <button 
                    onClick={() => addToCart(dish)}
                    className="w-full cafe-button"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 px-4 bg-coffee-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-4 font-elegant">
              Special Offers
            </h2>
            <p className="text-lg text-coffee-600">
              Grab these amazing deals before they're gone!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialOffers.map((offer, index) => (
              <div key={index} className={`${offer.bgColor} rounded-2xl p-8 text-white card-hover`}>
                <h3 className="text-2xl font-bold mb-3">{offer.title}</h3>
                <p className="text-white/90 mb-6">{offer.description}</p>
                <div className="flex items-center justify-between">
                  <span className="bg-white/20 px-4 py-2 rounded-lg font-mono font-bold">
                    {offer.code}
                  </span>
                  <button className="bg-white text-coffee-800 px-6 py-2 rounded-lg font-semibold hover:bg-coffee-50 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-4 font-elegant">
              What Our Customers Say
            </h2>
            <p className="text-lg text-coffee-600">
              Real reviews from satisfied food lovers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg card-hover">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-coffee-900">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <StarIconSolid 
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating 
                              ? 'text-yellow-400' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-coffee-600 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Order CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-coffee-600 to-coffee-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-elegant">
            Ready to Order?
          </h2>
          <p className="text-xl mb-8 text-coffee-100">
            Get your favorite food delivered hot and fresh to your doorstep
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className="bg-white text-coffee-800 px-8 py-4 rounded-lg font-semibold hover:bg-coffee-50 transition-colors">
              Order Online
            </Link>
            <a 
              href="tel:+919876543210"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-coffee-800 transition-colors"
            >
              Call: +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
