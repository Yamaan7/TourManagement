import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    text: "The Rome tour was absolutely incredible! Our guide was knowledgeable and passionate. It was the highlight of our Italian vacation.",
    rating: 5
  },
  {
    name: "David Chen",
    location: "Sydney, Australia",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    text: "Paris Discovery Tour exceeded all expectations. The small group size made it personal, and we got to see hidden gems of the city.",
    rating: 5
  },
  {
    name: "Emma Wilson",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    text: "Tokyo Adventure was a perfect blend of modern and traditional Japan. The attention to detail and organization was impressive.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Travelers Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;