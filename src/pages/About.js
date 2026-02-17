import React from 'react';
import { 
  HeartIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ClockIcon,
  UsersIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const values = [
    {
      icon: HeartIcon,
      title: "Made with Love",
      description: "Every dish is crafted with passion and attention to detail, ensuring the best taste experience."
    },
    {
      icon: ShieldCheckIcon,
      title: "Quality Promise",
      description: "We use only the freshest ingredients sourced from trusted suppliers to guarantee quality."
    },
    {
      icon: SparklesIcon,
      title: "Hygiene First",
      description: "Our kitchen follows strict hygiene standards to ensure your food is safe and clean."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers Daily" },
    { number: "50+", label: "Menu Items" },
    { number: "99%", label: "Customer Satisfaction" },
    { number: "5★", label: "Average Rating" }
  ];

  const team = [
    {
      name: "Rahul Verma",
      role: "Founder & Head Chef",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
      description: "With over 15 years of culinary experience, Rahul brings passion and innovation to every dish."
    },
    {
      name: "Priya Sharma",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200",
      description: "Priya ensures smooth operations and exceptional customer service at all times."
    },
    {
      name: "Amit Kumar",
      role: "Executive Chef",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
      description: "Amit's creative flair and expertise in fusion cuisine makes our menu truly special."
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600"
            alt="About A.R.M Cafe"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-coffee-900/80 to-coffee-700/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-elegant">
            About A.R.M CAFE
          </h1>
          <p className="text-xl md:text-2xl text-coffee-100">
            Our Story, Our Passion, Your Experience
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 mb-6 font-elegant">
                Our Journey
              </h2>
              <div className="space-y-4 text-coffee-600">
                <p className="text-lg leading-relaxed">
                  Founded in 2020, A.R.M CAFE started with a simple vision: to create a space where food lovers could gather, connect, and enjoy exceptional cuisine in a warm, welcoming atmosphere.
                </p>
                <p className="text-lg leading-relaxed">
                  What began as a small café in Ghaziabad has grown into a beloved destination for food enthusiasts across the city. Our name "A.R.M" stands for "Always Ready To Munch" - a philosophy that reflects our commitment to serving delicious food whenever you crave it.
                </p>
                <p className="text-lg leading-relaxed">
                  We believe that great food has the power to bring people together, create memories, and transform ordinary moments into extraordinary experiences.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600"
                alt="Cafe Interior"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-coffee-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">ARM</span>
                  </div>
                  <div>
                    <p className="font-bold text-coffee-900">Since 2020</p>
                    <p className="text-sm text-coffee-600">Serving Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-coffee-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 mb-4 font-elegant">
              Our Mission & Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-coffee-100 rounded-full flex items-center justify-center mb-6">
                <TrophyIcon className="w-8 h-8 text-coffee-600" />
              </div>
              <h3 className="text-2xl font-bold text-coffee-900 mb-4">Our Mission</h3>
              <p className="text-coffee-600 leading-relaxed">
                To consistently serve high-quality, delicious food that exceeds customer expectations while maintaining the highest standards of hygiene and service. We aim to create memorable dining experiences that keep our customers coming back.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-6">
                <SparklesIcon className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="text-2xl font-bold text-coffee-900 mb-4">Our Vision</h3>
              <p className="text-coffee-600 leading-relaxed">
                To become the most preferred café destination in Ghaziabad, known for our exceptional food quality, warm hospitality, and innovative menu offerings that cater to diverse tastes and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 mb-4 font-elegant">
              Our Core Values
            </h2>
            <p className="text-lg text-coffee-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-coffee-600" />
                </div>
                <h3 className="text-xl font-bold text-coffee-900 mb-3">{value.title}</h3>
                <p className="text-coffee-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-gradient-to-r from-coffee-600 to-coffee-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-coffee-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 mb-4 font-elegant">
              Meet Our Team
            </h2>
            <p className="text-lg text-coffee-600">
              The passionate people behind your favorite dishes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-coffee-900 mb-2">{member.name}</h3>
                  <p className="text-coffee-600 font-medium mb-3">{member.role}</p>
                  <p className="text-coffee-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-20 px-4 bg-coffee-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 mb-8 font-elegant">
            Our Quality Commitment
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <ClockIcon className="w-12 h-12 text-coffee-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-coffee-900 mb-2">Fresh Ingredients</h3>
              <p className="text-coffee-600 text-sm">
                We source fresh ingredients daily to ensure the best taste and quality in every dish.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <UsersIcon className="w-12 h-12 text-coffee-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-coffee-900 mb-2">Expert Chefs</h3>
              <p className="text-coffee-600 text-sm">
                Our skilled chefs bring years of experience and passion to every creation.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-coffee-900 mb-4">Visit Us Today!</h3>
            <p className="text-coffee-600 mb-6">
              Experience the perfect blend of taste, quality, and hospitality at A.R.M CAFE.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919876543210"
                className="cafe-button"
              >
                Call for Reservation
              </a>
              <a 
                href="mailto:info@armcafe.com"
                className="px-8 py-3 border border-coffee-300 text-coffee-700 rounded-lg font-semibold hover:bg-coffee-50 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
