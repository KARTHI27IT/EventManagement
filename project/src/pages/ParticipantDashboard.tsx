import React, { useState } from "react";
import { Calendar, MapPin, Clock, Users, ChevronLeft, ChevronRight } from 'lucide-react';

function ParticipantDashboard() {
  const [techCurrentIndex, setTechCurrentIndex] = useState(0);
  const [nonTechCurrentIndex, setNonTechCurrentIndex] = useState(0);
  const [onlineCurrentIndex, setOnlineCurrentIndex] = useState(0);

  const fakeTechEvents = [
    {
      id: 1,
      title: "Campus Tech Symposium",
      date: "2024-03-25",
      time: "10:00 AM",
      location: "Main Auditorium",
      capacity: 200,
      image: "https://via.placeholder.com/400x200?text=Tech+Symposium"
    },
    {
      id: 2,
      title: "AI and Machine Learning Workshop",
      date: "2024-04-01",
      time: "9:00 AM",
      location: "Lecture Hall A",
      capacity: 100,
      image: "https://via.placeholder.com/400x200?text=AI+Workshop"
    },
    {
      id: 3,
      title: "Blockchain Technology Seminar",
      date: "2024-04-05",
      time: "11:30 AM",
      location: "Seminar Room C",
      capacity: 75,
      image: "https://via.placeholder.com/400x200?text=Blockchain+Seminar"
    },
    {
      id: 4,
      title: "Cybersecurity Workshop",
      date: "2024-04-10",
      time: "2:00 PM",
      location: "Conference Hall B",
      capacity: 60,
      image: "https://via.placeholder.com/400x200?text=Cybersecurity+Workshop"
    },
    {
      id: 5,
      title: "Data Science Conference",
      date: "2024-04-15",
      time: "10:30 AM",
      location: "Main Auditorium",
      capacity: 150,
      image: "https://via.placeholder.com/400x200?text=Data+Science+Conference"
    }
  ];

  const fakeNonTechEvents = [
    {
      id: 1,
      title: "Cultural Festival",
      date: "2024-03-30",
      time: "11:00 AM",
      location: "Campus Square",
      capacity: 500,
      image: "https://via.placeholder.com/400x200?text=Cultural+Festival"
    },
    {
      id: 2,
      title: "Art Exhibition",
      date: "2024-04-02",
      time: "10:00 AM",
      location: "Art Gallery",
      capacity: 120,
      image: "https://via.placeholder.com/400x200?text=Art+Exhibition"
    },
    {
      id: 3,
      title: "Music Concert",
      date: "2024-04-07",
      time: "7:00 PM",
      location: "Auditorium",
      capacity: 300,
      image: "https://via.placeholder.com/400x200?text=Music+Concert"
    },
    {
      id: 4,
      title: "Health and Wellness Seminar",
      date: "2024-04-05",
      time: "11:30 AM",
      location: "Seminar Room C",
      capacity: 75,
      image: "https://via.placeholder.com/400x200?text=Health+Seminar"
    },
    {
      id: 5,
      title: "Sports Day",
      date: "2024-04-12",
      time: "9:00 AM",
      location: "Sports Ground",
      capacity: 200,
      image: "https://via.placeholder.com/400x200?text=Sports+Day"
    }
  ];

  const fakeOnlineEvents = [
    {
      id: 1,
      title: "Online Python Workshop",
      date: "2024-03-28",
      time: "3:00 PM",
      location: "Online",
      capacity: 100,
      image: "https://via.placeholder.com/400x200?text=Python+Workshop"
    },
    {
      id: 2,
      title: "Web Development Webinar",
      date: "2024-04-03",
      time: "4:00 PM",
      location: "Online",
      capacity: 150,
      image: "https://via.placeholder.com/400x200?text=Web+Development"
    },
    {
      id: 3,
      title: "Digital Marketing Course",
      date: "2024-04-09",
      time: "1:00 PM",
      location: "Online",
      capacity: 200,
      image: "https://via.placeholder.com/400x200?text=Digital+Marketing"
    },
    {
      id: 4,
      title: "Virtual Leadership Summit",
      date: "2024-04-14",
      time: "10:00 AM",
      location: "Online",
      capacity: 300,
      image: "https://via.placeholder.com/400x200?text=Leadership+Summit"
    },
    {
      id: 5,
      title: "Online Photography Class",
      date: "2024-04-16",
      time: "2:00 PM",
      location: "Online",
      capacity: 80,
      image: "https://via.placeholder.com/400x200?text=Photography+Class"
    }
  ];

  const scrollEvents = (direction, setIndex, totalEvents) => {
    if (direction === 'left' && setIndex > 0) {
      setIndex(setIndex - 1);
    } else if (direction === 'right' && setIndex < totalEvents - 4) {
      setIndex(setIndex + 1);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Participant Dashboard</h1>

      {/* Tech Events Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold mb-4">Tech Events</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scrollEvents('left', techCurrentIndex, setTechCurrentIndex, fakeTechEvents.length)}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              disabled={techCurrentIndex === 0}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={() => scrollEvents('right', techCurrentIndex, setTechCurrentIndex, fakeTechEvents.length)}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              disabled={techCurrentIndex >= fakeTechEvents.length - 4}
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
        <div className="flex overflow-x-hidden gap-6 pb-4">
          {fakeTechEvents.slice(techCurrentIndex, techCurrentIndex + 4).map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex-none w-[350px]"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-indigo-600" />
                    <span>{new Date(event.date).toLocaleDateString('en-GB')}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-indigo-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-indigo-600" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-indigo-600" />
                    <span>Capacity: {event.capacity}</span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Non-Tech Events Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold mb-4">Non-Tech Events</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scrollEvents('left', nonTechCurrentIndex, setNonTechCurrentIndex, fakeNonTechEvents.length)}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              disabled={nonTechCurrentIndex === 0}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={() => scrollEvents('right', nonTechCurrentIndex, setNonTechCurrentIndex, fakeNonTechEvents.length)}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              disabled={nonTechCurrentIndex >= fakeNonTechEvents.length - 4}
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
        <div className="flex overflow-x-hidden gap-6 pb-4">
          {fakeNonTechEvents.slice(nonTechCurrentIndex, nonTechCurrentIndex + 4).map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex-none w-[350px]"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-indigo-600" />
                    <span>{new Date(event.date).toLocaleDateString('en-GB')}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-indigo-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-indigo-600" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-indigo-600" />
                    <span>Capacity: {event.capacity}</span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Online Events & Workshops Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold mb-4">Online Events & Workshops</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scrollEvents('left', onlineCurrentIndex, setOnlineCurrentIndex, fakeOnlineEvents.length)}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              disabled={onlineCurrentIndex === 0}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={() => scrollEvents('right', onlineCurrentIndex, setOnlineCurrentIndex, fakeOnlineEvents.length)}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              disabled={onlineCurrentIndex >= fakeOnlineEvents.length - 4}
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
        <div className="flex overflow-x-hidden gap-6 pb-4">
          {fakeOnlineEvents.slice(onlineCurrentIndex, onlineCurrentIndex + 4).map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex-none w-[350px]"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-indigo-600" />
                    <span>{new Date(event.date).toLocaleDateString('en-GB')}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-indigo-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-indigo-600" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-indigo-600" />
                    <span>Capacity: {event.capacity}</span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* My Registrations Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-lg font-semibold mb-4">My Registrations</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Registered Events</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded">2</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {/* Example Registered Event Cards */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Campus Tech Symposium</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-indigo-600" />
                    <span>March 25, 2024</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-indigo-600" />
                    <span>10:00 AM</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-indigo-600" />
                    <span>Main Auditorium</span>
                  </div>
                </div>
                <button className="w-full bg-white text-indigo-600 border border-indigo-600 px-4 py-2 rounded hover:bg-indigo-50 mt-2">
                  View Details
                </button>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Student Leadership Workshop</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-indigo-600" />
                    <span>March 27, 2024</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-indigo-600" />
                    <span>2:00 PM</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-indigo-600" />
                    <span>Conference Hall B</span>
                  </div>
                </div>
                <button className="w-full bg-white text-indigo-600 border border-indigo-600 px-4 py-2 rounded hover:bg-indigo-50 mt-2">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParticipantDashboard;
