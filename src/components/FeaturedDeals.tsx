import React from 'react';
import { Clock, Users, Star } from 'lucide-react';

const deals = [
  {
    title: "Greek Islands Cruise",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077",
    originalPrice: 2499,
    discountedPrice: 1999,
    duration: "8 days",
    groupSize: "12-15",
    rating: 4.9,
    reviews: 128,
    discount: 20
  },
  {
    title: "Northern Lights Adventure",
    image: "https://images.unsplash.com/photo-1579033461380-adb47c3eb938",
    originalPrice: 1899,
    discountedPrice: 1599,
    duration: "6 days",
    groupSize: "8-10",
    rating: 4.8,
    reviews: 96,
    discount: 15
  },
  {
    title: "Safari Experience",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    originalPrice: 3299,
    discountedPrice: 2799,
    duration: "10 days",
    groupSize: "6-8",
    rating: 4.9,
    reviews: 156,
    discount: 15
  }
];

const FeaturedDeals = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Limited Time Offers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take advantage of our exclusive deals and save big on your next adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg group">
              <div className="relative">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {deal.discount}% OFF
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{deal.title}</h3>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{deal.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{deal.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <span>{deal.rating} ({deal.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl font-bold text-blue-600">
                    ${deal.discountedPrice}
                  </span>
                  <span className="text-lg text-gray-400 line-through">
                    ${deal.originalPrice}
                  </span>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedDeals;