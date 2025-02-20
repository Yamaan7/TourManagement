import React, { useState } from 'react';
import TourCard from '../components/TourCard';
import TourMap from '../components/TourMap';

// Example tour data (in a real app, this would come from an API)
const exampleTours = [
  {
    title: "Explore Ancient Rome",
    description: "Walk through the historic streets of Rome, visit the Colosseum, and experience the rich history of the Roman Empire.",
    price: 199,
    duration: 3,
    maxGroupSize: 15,
    difficulty: "medium",
    images: ["https://images.unsplash.com/photo-1552832230-c0197dd311b5"],
    startDates: [new Date()],
    location: {
      address: "Rome, Italy",
      coordinates: [12.4964, 41.9028]
    }
  },
  {
    title: "Paris Discovery Tour",
    description: "Experience the magic of Paris with guided tours of the Eiffel Tower, Louvre Museum, and charming Montmartre district.",
    price: 249,
    duration: 4,
    maxGroupSize: 12,
    difficulty: "easy",
    images: ["https://images.unsplash.com/photo-1502602898657-3e91760cbb34"],
    startDates: [new Date()],
    location: {
      address: "Paris, France",
      coordinates: [2.3522, 48.8566]
    }
  },
  {
    title: "Tokyo Adventure",
    description: "Immerse yourself in Japanese culture, visit ancient temples, and explore modern Tokyo's vibrant districts.",
    price: 299,
    duration: 5,
    maxGroupSize: 10,
    difficulty: "medium",
    images: ["https://images.unsplash.com/photo-1503899036084-c55cdd92da26"],
    startDates: [new Date()],
    location: {
      address: "Tokyo, Japan",
      coordinates: [139.6503, 35.6762]
    }
  }
];

const Tours = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [selectedTour, setSelectedTour] = useState<number | null>(null);

  const locations = exampleTours.map(tour => ({
    coordinates: tour.location.coordinates as [number, number],
    name: tour.title,
    description: tour.location.address
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h1 className="text-3xl font-bold">Available Tours</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-lg ${
                viewMode === 'grid'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`px-4 py-2 rounded-lg ${
                viewMode === 'map'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Map View
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-6">
          <input
            type="text"
            placeholder="Search tours..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow sm:flex-grow-0"
          />
          <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">All Difficulties</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="difficult">Difficult</option>
          </select>
          <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Price Range</option>
            <option value="0-100">$0 - $100</option>
            <option value="101-300">$101 - $300</option>
            <option value="301+">$301+</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={viewMode === 'map' ? 'lg:col-span-1' : 'lg:col-span-2'}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {exampleTours.map((tour, index) => (
              <div
                key={index}
                onMouseEnter={() => setSelectedTour(index)}
                onMouseLeave={() => setSelectedTour(null)}
              >
                <TourCard tour={tour} />
              </div>
            ))}
          </div>
        </div>

        {viewMode === 'map' && (
          <div className="lg:col-span-1 h-[calc(100vh-200px)] sticky top-8">
            <TourMap
              locations={locations}
              center={selectedTour !== null ? locations[selectedTour].coordinates : undefined}
              zoom={selectedTour !== null ? 12 : 3}
              className="h-full w-full rounded-lg overflow-hidden shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tours;