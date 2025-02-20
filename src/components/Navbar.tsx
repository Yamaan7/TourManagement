import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, User, LogIn } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Compass className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">TourGuide</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link to="/tours" className="text-gray-600 hover:text-blue-600">
              Tours
            </Link>
            <Link to="/login" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <LogIn className="h-5 w-5" />
              <span>Login</span>
            </Link>
            <Link
              to="/register"
              className="flex items-center space-x-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <User className="h-5 w-5" />
              <span>Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;