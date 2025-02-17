import React from 'react';

function StudentHeadDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Student Head Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Event Management Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Event Management</h2>
          <div className="space-y-3">
            <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              Create New Event
            </button>
            <button className="w-full bg-white text-indigo-600 border border-indigo-600 px-4 py-2 rounded hover:bg-indigo-50">
              View My Events
            </button>
          </div>
        </div>

        {/* Task Management Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Task Management</h2>
          <div className="space-y-3">
            <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              Create New Task
            </button>
            <button className="w-full bg-white text-indigo-600 border border-indigo-600 px-4 py-2 rounded hover:bg-indigo-50">
              View All Tasks
            </button>
          </div>
        </div>

        {/* Volunteer Requests Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Volunteer Requests</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Pending Requests</span>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">2</span>
            </div>
            <button className="w-full bg-white text-indigo-600 border border-indigo-600 px-4 py-2 rounded hover:bg-indigo-50">
              View All Requests
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentHeadDashboard;