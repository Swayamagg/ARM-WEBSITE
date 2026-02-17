import React, { useState, useMemo } from 'react';
import { 
  ClockIcon, 
  FireIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { useCart } from '../context/CartContext';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [loadedImages, setLoadedImages] = useState({});
  const { addToCart } = useCart();

  const menuItems = useMemo(() => [
    // Pizza Category
    {
      id: 1,
      name: "Classic Margherita",
      description: "Fresh mozzarella, basil, tomato sauce on thin crust",
      price: 299,
      category: "pizza",
      image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&h=300&fit=crop&auto=format",
      rating: 4.8,
      isVeg: true,
      isPopular: true,
      prepTime: "20 min",
      calories: 280
    },
    {
      id: 2,
      name: "Pepperoni Feast",
      description: "Double pepperoni, mozzarella, tomato sauce",
      price: 399,
      category: "pizza",
      image: "https://images.unsplash.com/photo-1628843676373-663b96b383a7?w=400&h=300&fit=crop&auto=format",
      rating: 4.9,
      isVeg: false,
      isPopular: true,
      prepTime: "25 min",
      calories: 350
    },
    {
      id: 3,
      name: "Farmhouse Veggie",
      description: "Bell peppers, mushrooms, onions, olives, corn",
      price: 349,
      category: "pizza",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop&auto=format",
      rating: 4.6,
      isVeg: true,
      isPopular: false,
      prepTime: "22 min",
      calories: 260
    },
    
    // Burgers Category
    {
      id: 4,
      name: "ARM Special Burger",
      description: "Double patty, cheese, lettuce, tomato, special sauce",
      price: 249,
      category: "burgers",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop&auto=format",
      rating: 4.9,
      isVeg: false,
      isPopular: true,
      prepTime: "15 min",
      calories: 520
    },
    {
      id: 5,
      name: "Veggie Delight",
      description: "Plant-based patty, avocado, sprouts, whole wheat bun",
      price: 229,
      category: "burgers",
      image: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=400&h=300&fit=crop&auto=format",
      rating: 4.5,
      isVeg: true,
      isPopular: false,
      prepTime: "12 min",
      calories: 380
    },
    {
      id: 6,
      name: "Cheese Blast",
      description: "Triple cheese, caramelized onions, pickles",
      price: 279,
      category: "burgers",
      image: "https://images.unsplash.com/photo-1588167338535-93a79bce114f?w=400&h=300&fit=crop&auto=format",
      rating: 4.7,
      isVeg: true,
      isPopular: true,
      prepTime: "18 min",
      calories: 480
    },

    // Snacks Category
    {
      id: 7,
      name: "French Fries",
      description: "Crispy golden fries with peri-peri seasoning",
      price: 99,
      category: "snacks",
      image: "https://images.unsplash.com/photo-1576107232684-1279f390b9c2?w=400&h=300&fit=crop&auto=format",
      rating: 4.4,
      isVeg: true,
      isPopular: false,
      prepTime: "10 min",
      calories: 320
    },
    {
      id: 8,
      name: "Chicken Wings",
      description: "6 pieces with BBQ sauce and dip",
      price: 189,
      category: "snacks",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop&auto=format",
      rating: 4.8,
      isVeg: false,
      isPopular: true,
      prepTime: "20 min",
      calories: 420
    },
    {
      id: 9,
      name: "Onion Rings",
      description: "Crispy battered onion rings with ranch dip",
      price: 129,
      category: "snacks",
      image: "https://images.unsplash.com/photo-1526428164438-0f8c6f9bb5e9?w=400&h=300&fit=crop&auto=format",
      rating: 4.3,
      isVeg: true,
      isPopular: false,
      prepTime: "12 min",
      calories: 280
    },

    // Beverages Category
    {
      id: 10,
      name: "Cold Coffee",
      description: "Chilled coffee with ice cream and chocolate syrup",
      price: 149,
      category: "beverages",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop&auto=format",
      rating: 4.7,
      isVeg: true,
      isPopular: true,
      prepTime: "5 min",
      calories: 180
    },
    {
      id: 11,
      name: "Fresh Lime Soda",
      description: "Refreshing lime soda with mint",
      price: 79,
      category: "beverages",
      image: "https://images.unsplash.com/photo-1581009628624-7d8a8ea5a9e8?w=400&h=300&fit=crop&auto=format",
      rating: 4.2,
      isVeg: true,
      isPopular: false,
      prepTime: "3 min",
      calories: 60
    },
    {
      id: 12,
      name: "Mango Shake",
      description: "Thick mango shake with vanilla ice cream",
      price: 169,
      category: "beverages",
      image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop&auto=format",
      rating: 4.6,
      isVeg: true,
      isPopular: true,
      prepTime: "5 min",
      calories: 240
    },

    // Desserts Category
    {
      id: 13,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center",
      price: 189,
      category: "desserts",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&auto=format",
      rating: 4.9,
      isVeg: true,
      isPopular: true,
      prepTime: "15 min",
      calories: 380
    },
    {
      id: 14,
      name: "Ice Cream Sundae",
      description: "Vanilla ice cream with chocolate sauce and nuts",
      price: 149,
      category: "desserts",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop&auto=format",
      rating: 4.5,
      isVeg: true,
      isPopular: false,
      prepTime: "5 min",
      calories: 290
    },
    {
      id: 15,
      name: "Brownie Delight",
      description: "Warm brownie with ice cream and caramel",
      price: 179,
      category: "desserts",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop&auto=format",
      rating: 4.8,
      isVeg: true,
      isPopular: true,
      prepTime: "12 min",
      calories: 420
    }
  ], []);

  const categories = [
    { id: 'all', name: 'All Items', icon: '🍽️' },
    { id: 'pizza', name: 'Pizza', icon: '🍕' },
    { id: 'burgers', name: 'Burgers', icon: '🍔' },
    { id: 'snacks', name: 'Snacks', icon: '🍟' },
    { id: 'beverages', name: 'Beverages', icon: '🥤' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' }
  ];

  const filteredAndSortedItems = useMemo(() => {
    let filtered = menuItems;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort items
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'popularity':
        default:
          return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
      }
    });

    return sorted;
  }, [selectedCategory, searchTerm, sortBy, menuItems]);

  const handleImageLoad = (itemId) => {
    setLoadedImages(prev => ({ ...prev, [itemId]: true }));
  };

  const handleImageError = (e, itemId) => {
    e.target.src = `https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop&auto=format`;
    setLoadedImages(prev => ({ ...prev, [itemId]: true }));
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    // You could add a toast notification here
  };

  return (
    <div className="min-h-screen bg-cream py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-4 font-elegant">
            Our Menu
          </h1>
          <p className="text-lg text-coffee-600">
            Explore our delicious selection crafted with love
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-coffee-400" />
              <input
                type="text"
                placeholder="Search for dishes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="input-field lg:w-48"
            >
              <option value="popularity">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A-Z</option>
            </select>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mt-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-coffee-600 text-white'
                    : 'bg-coffee-100 text-coffee-700 hover:bg-coffee-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-coffee-600">
          Showing {filteredAndSortedItems.length} items
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
              <div className="relative">
                {!loadedImages[item.id] && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  </div>
                )}
                <img 
                  src={item.image} 
                  alt={item.name}
                  className={`w-full h-48 object-cover transition-opacity duration-300 ${
                    loadedImages[item.id] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => handleImageLoad(item.id)}
                  onError={(e) => handleImageError(e, item.id)}
                  loading="lazy"
                />
                {item.isPopular && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <FireIcon className="w-4 h-4 mr-1" />
                    Popular
                  </div>
                )}
                <div className="absolute top-3 right-3">
                  {item.isVeg ? (
                    <div className="veg-indicator"></div>
                  ) : (
                    <div className="non-veg-indicator"></div>
                  )}
                </div>
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-medium text-coffee-700 flex items-center">
                  <ClockIcon className="w-3 h-3 mr-1" />
                  {item.prepTime}
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-coffee-900">{item.name}</h3>
                  <span className="text-sm text-coffee-600">{item.calories} cal</span>
                </div>
                
                <p className="text-coffee-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIconSolid 
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(item.rating) 
                            ? 'text-yellow-400' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-coffee-600">{item.rating}</span>
                  </div>
                  <span className="text-xl font-bold text-coffee-700">₹{item.price}</span>
                </div>
                
                <button
                  onClick={() => handleAddToCart(item)}
                  className="w-full cafe-button text-sm"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredAndSortedItems.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-coffee-100 rounded-full flex items-center justify-center">
              <AdjustmentsHorizontalIcon className="w-12 h-12 text-coffee-400" />
            </div>
            <h3 className="text-xl font-semibold text-coffee-900 mb-2">No items found</h3>
            <p className="text-coffee-600 mb-4">
              Try adjusting your filters or search terms
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchTerm('');
                setSortBy('popularity');
              }}
              className="cafe-button"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
