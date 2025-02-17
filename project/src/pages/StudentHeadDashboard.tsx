import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

function StudentHeadDashboard() {
  const [showPopup, setShowPopup] = useState(false);

  // Dummy Data for Volunteers and Events
  const volunteers = [
    { name: 'John Doe', dept: 'CSE', event: 'Tech Talk' },
    { name: 'Jane Smith', dept: 'ECE', event: 'Workshop' },
  ];

  const events = [
    { eventName: 'Tech Talk', date: '2025-03-10' },
    { eventName: 'Workshop', date: '2025-03-15' },
  ];

  // Toggle Popup
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Student Head Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Task Management Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Task Management</h2>
          <div className="space-y-3">
            <button 
              onClick={togglePopup} 
              className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Assign Task
            </button>
            <button className="w-full bg-white text-indigo-600 border border-indigo-600 px-4 py-2 rounded hover:bg-indigo-50">
              View All Tasks
            </button>
          </div>
        </div>

        {/* Volunteer Requests Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Volunteer Requests</h2>
          <div className="space-y-4">
            {volunteers.map((volunteer, index) => (
              <div 
                key={index} 
                className="bg-gray-100 p-4 rounded-lg flex justify-between items-center shadow-sm"
              >
                <div>
                  <p className="font-semibold">{volunteer.name}</p>
                  <p className="text-sm text-gray-600">{volunteer.dept}</p>
                  <p className="text-sm text-gray-500">Event: {volunteer.event}</p>
                </div>
                <div className="flex space-x-2">
                  <button 
                    className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
                    title="Accept"
                  >
                    <FaCheck />
                  </button>
                  <button 
                    className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                    title="Reject"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event List Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Event List</h2>
          <ul className="space-y-3">
            {events.map((event, index) => (
              <li 
                key={index} 
                className="bg-gray-100 p-3 rounded-lg shadow-sm"
              >
                <p className="font-semibold">{event.eventName}</p>
                <p className="text-sm text-gray-600">Date: {event.date}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* OD Request Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">OD Request</h2>
          <button className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Request OD
          </button>
        </div>
      </div>

      {/* Popup for Assign Task */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">Assign Task</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Task Title</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400" 
                  placeholder="Enter task title" 
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Assign To</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400" 
                  placeholder="Enter name" 
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button 
                  type="button" 
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  onClick={togglePopup}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                >
                  Assign
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentHeadDashboard;
