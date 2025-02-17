import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

function ParticipantDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Participant Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Upcoming Events Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Available Events</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">8</span>
            </div>
            <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              Browse Events
            </button>
          </div>
        </div>

        {/* My Registrations Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">My Registrations</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Registered Events</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded">2</span>
            </div>
            <button className="w-full bg-white text-indigo-600 border border-indigo-600 px-4 py-2 rounded hover:bg-indigo-50">
              View My Events
            </button>
          </div>
        </div>

        {/* QR Code Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Event Check-in</h2>
          <div className="flex flex-col items-center space-y-4">
            <QRCodeSVG
              value="https://example.com/check-in"
              size={128}
              level="L"
              className="mb-4"
            />
            <p className="text-sm text-gray-600 text-center">
              Scan this QR code at the event venue to check in
            </p>
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Event Feedback</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Recent Events</span>
              <button className="text-indigo-600 hover:text-indigo-800">
                View All
              </button>
            </div>
            <div className="border-t pt-4">
              <p className="text-gray-600">No completed events yet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParticipantDashboard;