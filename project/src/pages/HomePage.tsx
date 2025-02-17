import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, Award } from 'lucide-react';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Campus Event Hub
          </h1>
          <p className="text-xl text-white opacity-90 mb-8">
            Your one-stop platform for managing and participating in campus events
          </p>
          <button
            onClick={() => navigate('/role-selection')}
            className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Get Started
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 text-white">
            <Calendar className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
            <p className="opacity-80">
              Stay updated with all the exciting events happening on campus
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 text-white">
            <Users className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Registration</h3>
            <p className="opacity-80">
              Quick and simple registration process for participants
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 text-white">
            <Award className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Event Management</h3>
            <p className="opacity-80">
              Efficient tools for organizers to manage events seamlessly
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Featured Events
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event cards will be dynamically populated from the database */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;