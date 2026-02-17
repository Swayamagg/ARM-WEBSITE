import React, { useState } from 'react';
import { 
  ChatBubbleLeftRightIcon,
  UserIcon,
  FunnelIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

const Reviews = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    email: '',
    rating: 5,
    comment: '',
    orderType: 'delivery'
  });

  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul.s@example.com",
      rating: 5,
      comment: "Absolutely amazing experience! The ARM Special Burger was juicy and flavorful, and the delivery was super fast. Will definitely order again!",
      date: "2024-01-15",
      orderType: "delivery",
      verified: true,
      helpful: 24
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya.p@example.com",
      rating: 5,
      comment: "Best café in Ghaziabad! Love their pizza collection and the ambiance is perfect for family dinners. The staff is very friendly and professional.",
      date: "2024-01-14",
      orderType: "dine-in",
      verified: true,
      helpful: 18
    },
    {
      id: 3,
      name: "Amit Kumar",
      email: "amit.k@example.com",
      rating: 4,
      comment: "Great taste and reasonable prices. The Cold Coffee is exceptional! Only suggestion would be to increase portion sizes slightly.",
      date: "2024-01-13",
      orderType: "delivery",
      verified: true,
      helpful: 12
    },
    {
      id: 4,
      name: "Sneha Reddy",
      email: "sneha.r@example.com",
      rating: 5,
      comment: "The Chocolate Lava Cake is to die for! Perfectly baked with a gooey center. My kids loved it. Excellent quality and presentation.",
      date: "2024-01-12",
      orderType: "pickup",
      verified: true,
      helpful: 31
    },
    {
      id: 5,
      name: "Vikram Singh",
      email: "vikram.s@example.com",
      rating: 4,
      comment: "Good food quality and quick service. The Farmhouse Veggie Pizza was loaded with toppings. Packaging was also very secure for delivery.",
      date: "2024-01-11",
      orderType: "delivery",
      verified: false,
      helpful: 8
    },
    {
      id: 6,
      name: "Neha Gupta",
      email: "neha.g@example.com",
      rating: 5,
      comment: "Exceptional service and food quality! The French Fries were crispy and perfectly seasoned. The Mango Shake was refreshing and thick.",
      date: "2024-01-10",
      orderType: "dine-in",
      verified: true,
      helpful: 15
    }
  ];

  const filters = [
    { id: 'all', name: 'All Reviews', count: reviews.length },
    { id: '5', name: '5 Stars', count: reviews.filter(r => r.rating === 5).length },
    { id: '4', name: '4 Stars', count: reviews.filter(r => r.rating === 4).length },
    { id: '3', name: '3 Stars', count: reviews.filter(r => r.rating === 3).length },
    { id: '2', name: '2 Stars', count: reviews.filter(r => r.rating === 2).length },
    { id: '1', name: '1 Star', count: reviews.filter(r => r.rating === 1).length }
  ];

  const filteredReviews = reviews.filter(review => {
    const matchesFilter = selectedFilter === 'all' || review.rating === parseInt(selectedFilter);
    const matchesSearch = review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.comment.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const averageRating = (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1);
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(r => r.rating === rating).length,
    percentage: (reviews.filter(r => r.rating === rating).length / reviews.length) * 100
  }));

  const handleSubmitReview = (e) => {
    e.preventDefault();
    // Handle review submission
    console.log('New review:', newReview);
    setShowReviewForm(false);
    setNewReview({
      name: '',
      email: '',
      rating: 5,
      comment: '',
      orderType: 'delivery'
    });
  };

  const renderStars = (rating, interactive = false, onRatingChange = null) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type={interactive ? "button" : "button"}
            disabled={!interactive}
            onClick={interactive ? () => onRatingChange(star) : null}
            className={`${interactive ? 'cursor-pointer hover:scale-110' : 'cursor-default'} transition-transform`}
          >
            <StarIconSolid
              className={`w-5 h-5 ${
                star <= rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-cream py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-4 font-elegant">
            Customer Reviews
          </h1>
          <p className="text-lg text-coffee-600">
            Real feedback from our valued customers
          </p>
        </div>

        {/* Rating Overview */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-coffee-900 mb-2">{averageRating}</div>
              <div className="flex justify-center mb-2">
                {renderStars(Math.round(averageRating))}
              </div>
              <p className="text-coffee-600 mb-6">Based on {reviews.length} reviews</p>
              
              <div className="space-y-2">
                {ratingDistribution.map(({ rating, count, percentage }) => (
                  <div key={rating} className="flex items-center gap-3">
                    <span className="text-sm text-coffee-600 w-8">{rating}★</span>
                    <div className="flex-1 bg-coffee-100 rounded-full h-2">
                      <div 
                        className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-coffee-600 w-8">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-coffee-900 mb-6">Share Your Experience</h3>
            <p className="text-coffee-600 mb-6">
              Your feedback helps us improve and serve you better. Share your thoughts about A.R.M CAFE!
            </p>
            <button
              onClick={() => setShowReviewForm(true)}
              className="w-full cafe-button flex items-center justify-center"
            >
              <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
              Write a Review
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-coffee-400" />
              <input
                type="text"
                placeholder="Search reviews..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2">
              <FunnelIcon className="w-5 h-5 text-coffee-600" />
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedFilter === filter.id
                        ? 'bg-coffee-600 text-white'
                        : 'bg-coffee-100 text-coffee-700 hover:bg-coffee-200'
                    }`}
                  >
                    {filter.name} ({filter.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {filteredReviews.map((review) => (
            <div key={review.id} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-coffee-100 rounded-full flex items-center justify-center">
                    <UserIcon className="w-6 h-6 text-coffee-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-coffee-900">{review.name}</h4>
                      {review.verified && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-coffee-600">
                      <span>{new Date(review.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <span className="capitalize">{review.orderType.replace('-', ' ')}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  {renderStars(review.rating)}
                </div>
              </div>
              
              <p className="text-coffee-600 mb-4 leading-relaxed">{review.comment}</p>
              
              <div className="flex items-center justify-between pt-4 border-t border-coffee-100">
                <button className="flex items-center gap-2 text-sm text-coffee-600 hover:text-coffee-700 transition-colors">
                  <span>👍 Helpful ({review.helpful})</span>
                </button>
                <button className="text-sm text-coffee-600 hover:text-coffee-700 transition-colors">
                  Report
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Reviews */}
        {filteredReviews.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-coffee-100 rounded-full flex items-center justify-center">
              <ChatBubbleLeftRightIcon className="w-12 h-12 text-coffee-400" />
            </div>
            <h3 className="text-xl font-semibold text-coffee-900 mb-2">No reviews found</h3>
            <p className="text-coffee-600 mb-4">
              Try adjusting your filters or search terms
            </p>
            <button
              onClick={() => {
                setSelectedFilter('all');
                setSearchTerm('');
              }}
              className="cafe-button"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Review Form Modal */}
      {showReviewForm && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowReviewForm(false)}
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-coffee-900">Write a Review</h2>
                <button
                  onClick={() => setShowReviewForm(false)}
                  className="p-2 rounded-lg hover:bg-coffee-100 transition-colors"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleSubmitReview} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-coffee-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={newReview.name}
                    onChange={(e) => setNewReview({...newReview, name: e.target.value})}
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
                    required
                    value={newReview.email}
                    onChange={(e) => setNewReview({...newReview, email: e.target.value})}
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-coffee-700 mb-2">
                    Rating *
                  </label>
                  {renderStars(newReview.rating, true, (rating) => setNewReview({...newReview, rating}))}
                </div>

                <div>
                  <label className="block text-sm font-medium text-coffee-700 mb-2">
                    Order Type
                  </label>
                  <select
                    value={newReview.orderType}
                    onChange={(e) => setNewReview({...newReview, orderType: e.target.value})}
                    className="input-field"
                  >
                    <option value="delivery">Home Delivery</option>
                    <option value="pickup">Self Pickup</option>
                    <option value="dine-in">Dine In</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-coffee-700 mb-2">
                    Your Review *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={newReview.comment}
                    onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                    className="input-field"
                    placeholder="Share your experience with A.R.M CAFE..."
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setShowReviewForm(false)}
                    className="flex-1 px-6 py-3 border border-coffee-300 text-coffee-700 rounded-lg font-semibold hover:bg-coffee-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 cafe-button"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
