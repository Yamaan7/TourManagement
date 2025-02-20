import React from 'react';
import { MapPin, Calendar, Users, DollarSign } from 'lucide-react';

interface TourCardProps {
  tour: {
    title: string;
    description: string;
    price: number;
    duration: number;
    maxGroupSize: number;
    difficulty: string;
    images: string[];
    startDates: Date[];
    location: {
      address: string;
    };
  };
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={tour.images[0] || 'https://images.unsplash.com/photo-1500835556837-99ac94a94552'}
        alt={tour.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{tour.description}</p>
        
        <div className="flex items-center gap-4 text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            <span>{tour.location.address}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{tour.duration} days</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>{tour.maxGroupSize} people</span>
          </div>
          <div className="flex items-center gap-1">
            <DollarSign size={16} />
            <span>{tour.price}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            {tour.difficulty}
          </span>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;