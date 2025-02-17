import React from 'react';

function VolunteerDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Volunteer Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Assigned Tasks Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">My Tasks</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Active Tasks</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded">4</span>
            </div>
            <button className="w-full bg-white text-indigo-600 border border-indigo-600 px-4 py-2 rounded hover:bg-indigo-50">
              View All Tasks
            </button>
          </div>
        </div>

        {/* Event Participation Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Event Participation</h2>
          <div className="space-y-3">
            <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              Join New Event
            </button>
            <button className="w-full bg-white text-indigo-600 border border-indigo-600 px-4 py-2 rounded hover:bg-indigo-50">
              My Events
            </button>
          </div>
        </div>

        {/* OD Request Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">OD Requests</h2>
          <div className="space-y-3">
            <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              Request OD
            </button>
            <button className="w-full bg-white text-indigo-600 border border-indigo-600 px-4 py-2 rounded hover:bg-indigo-50">
              View My Requests
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VolunteerDashboard;