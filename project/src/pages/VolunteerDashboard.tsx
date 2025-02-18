import React, { useState } from 'react';

function VolunteerDashboard() {
  const [showPopup, setShowPopup] = useState(false);
  const [showODPopup, setShowODPopup] = useState(false);
  const [studentHead, setStudentHead] = useState('');
  const [facultyHead, setFacultyHead] = useState('');
  const [eventName, setEventName] = useState('');
  const [odEventName, setODEventName] = useState('');
  const [odReason, setODReason] = useState('');
  const [odDuration, setODDuration] = useState('');
  const [odDate, setODDate] = useState('');
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', event: 'Event 1', completed: false },
    { id: 2, text: 'Task 2', event: 'Event 2', completed: false },
    { id: 3, text: 'Task 3', event: 'Event 3', completed: false },
  ]);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleODPopup = () => {
    setShowODPopup(!showODPopup);
  };

  const handleSubmit = () => {
    // Handle the form submission logic here
    console.log('Student Head:', studentHead);
    console.log('Faculty Head:', facultyHead);
    console.log('Event Name:', eventName);
    togglePopup();
  };

  const handleODSubmit = () => {
    // Handle the OD request form submission logic here
    console.log('Event Name:', odEventName);
    console.log('Reason:', odReason);
    console.log('Duration:', odDuration);
    console.log('Date:', odDate);
    toggleODPopup();
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Volunteer Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Assigned Tasks Card */}
        <div className="bg-white p-6 rounded-lg shadow-md h-80 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">My Tasks</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              {tasks.map((task) => (
                <div key={task.id} className="p-4 border rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTaskCompletion(task.id)}
                        className="mr-2"
                      />
                      <span
                        className={`${
                          task.completed ? 'line-through text-gray-500' : 'text-blue-600'
                        }`}
                      >
                        {task.text}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 text-gray-500">{task.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Event Participation Card */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-lg font-semibold mb-4">Event Participation</h2>
            <button
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
              onClick={togglePopup}
            >
              Join New Event
            </button>
          </div>
        </div>

        {/* OD Request Card */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
          <h2 className="text-lg font-semibold mb-4">OD Requests</h2>
          <div className="space-y-3 w-full">
            <button
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
              onClick={toggleODPopup}
            >
              Make OD Request
            </button>
          </div>
        </div>
      </div>

      {/* Popup for Join New Event */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-md relative w-full max-w-lg">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={togglePopup}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-lg font-semibold mb-4">Join New Event</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700">Student Head</label>
                <select
                  value={studentHead}
                  onChange={(e) => setStudentHead(e.target.value)}
                  className="w-full px-4 py-2 border rounded"
                >
                  <option value="">Select Student Head</option>
                  <option value="Student 1">Student 1</option>
                  <option value="Student 2">Student 2</option>
                  <option value="Student 3">Student 3</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Faculty Head</label>
                <select
                  value={facultyHead}
                  onChange={(e) => setFacultyHead(e.target.value)}
                  className="w-full px-4 py-2 border rounded"
                >
                  <option value="">Select Faculty Head</option>
                  <option value="Faculty 1">Faculty 1</option>
                  <option value="Faculty 2">Faculty 2</option>
                  <option value="Faculty 3">Faculty 3</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Event Name</label>
                <select
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  className="w-full px-4 py-2 border rounded"
                >
                  <option value="">Select Event Name</option>
                  <option value="Event 1">Event 1</option>
                  <option value="Event 2">Event 2</option>
                  <option value="Event 3">Event 3</option>
                </select>
              </div>
              <button
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                onClick={handleSubmit}
              >
                Send Request
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Popup for Make OD Request */}
      {showODPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-md relative w-full max-w-lg">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={toggleODPopup}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-lg font-semibold mb-4">Make OD Request</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700">Event Name</label>
                <input
                  type="text"
                  value={odEventName}
                  onChange={(e) => setODEventName(e.target.value)}
                  className="w-full px-4 py-2 border rounded"
                  placeholder="Enter event name"
                />
              </div>
              <div>
                <label className="block text-gray-700">Reason</label>
                <input
                  type="text"
                  value={odReason}
                  onChange={(e) => setODReason(e.target.value)}
                  className="w-full px-4 py-2 border rounded"
                  placeholder="Enter reason"
                />
              </div>
              <div>
                <label className="block text-gray-700">Duration</label>
                <input
                  type="text"
                  value={odDuration}
                  onChange={(e) => setODDuration(e.target.value)}
                  className="w-full px-4 py-2 border rounded"
                  placeholder="Enter duration"
                />
              </div>
              <div>
                <label className="block text-gray-700">Date</label>
                <input
                  type="date"
                  value={odDate}
                  onChange={(e) => setODDate(e.target.value)}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <button
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                onClick={handleODSubmit}
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VolunteerDashboard;
