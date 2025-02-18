import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

function StudentHeadDashboard() {
  const [showPopup, setShowPopup] = useState(false);
  const [totalBudget, setTotalBudget] = useState('');
  const [numDivisions, setNumDivisions] = useState('');
  const [divisions, setDivisions] = useState([]);

  // Dummy Data for Volunteers and OD Requests
  const volunteers = [
    { name: 'John Doe', dept: 'CSE', event: 'Tech Talk' },
    { name: 'Jane Smith', dept: 'ECE', event: 'Workshop' },
  ];

  const odRequests = [
    { 
      name: 'Alice Johnson', 
      regNo: '12345', 
      date: '2025-02-20', 
      startTime: '10:00 AM', 
      endTime: '02:00 PM', 
      dept: 'MECH' 
    },
    { 
      name: 'Bob Brown', 
      regNo: '67890', 
      date: '2025-02-21', 
      startTime: '09:00 AM', 
      endTime: '01:00 PM', 
      dept: 'CIVIL' 
    },
  ];

  // Toggle Popup
  const togglePopup = () => {
    setShowPopup(!showPopup);
    setTotalBudget('');
    setNumDivisions('');
    setDivisions([]);
  };

  // Handle Division Change
  const handleDivisionChange = (index, field, value) => {
    const updatedDivisions = [...divisions];
    updatedDivisions[index] = {
      ...updatedDivisions[index],
      [field]: value
    };
    setDivisions(updatedDivisions);
  };

  // Handle Submit
  const handleSubmit = () => {
    console.log('Total Budget:', totalBudget);
    console.log('Divisions:', divisions);
    togglePopup();
  };

  // Generate Table Rows based on number of divisions
  const handleNumDivisionsChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setNumDivisions(count);

    const newDivisions = Array.from({ length: count }, () => ({
      name: '',
      amount: ''
    }));
    setDivisions(newDivisions);
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
              className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Assign Task
            </button>
            <button className="w-full bg-white text-indigo-600 border border-indigo-600 px-4 py-2 rounded hover:bg-indigo-50">
              View All Tasks
            </button>
          </div>
        </div>

        {/* Volunteer Join Requests Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Volunteer Join Requests</h2>
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

        {/* Volunteer OD Requests Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Volunteer OD Requests</h2>
          <div className="space-y-4">
            {odRequests.map((request, index) => (
              <div 
                key={index} 
                className="bg-gray-100 p-4 rounded-lg shadow-sm"
              >
                <p className="font-semibold">{request.name}</p>
                <p className="text-sm text-gray-600">Reg No: {request.regNo}</p>
                <p className="text-sm text-gray-600">Date: {request.date}</p>
                <p className="text-sm text-gray-600">Start Time: {request.startTime}</p>
                <p className="text-sm text-gray-600">End Time: {request.endTime}</p>
                <p className="text-sm text-gray-600">Department: {request.dept}</p>
                <div className="flex space-x-2 mt-2">
                  <button className="bg-green-500 text-white p-2 rounded hover:bg-green-600">Approve</button>
                  <button className="bg-red-500 text-white p-2 rounded hover:bg-red-600">Reject</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Budget Request Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Budget Request</h2>
          <button 
            onClick={togglePopup}
            className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Create Request
          </button>
        </div>
      </div>

      {/* Budget Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">Budget Request</h2>
            <input 
              type="number" 
              placeholder="Total Budget" 
              className="border p-2 mb-4 w-full"
              value={totalBudget}
              onChange={(e) => setTotalBudget(e.target.value)}
            />
            <input 
              type="number" 
              placeholder="No. of Divisions" 
              className="border p-2 mb-4 w-full"
              value={numDivisions}
              onChange={handleNumDivisionsChange}
            />

            {/* Dynamically create rows for each division */}
            <div className="space-y-4">
              {divisions.map((division, index) => (
                <div key={index} className="flex space-x-4">
                  <input
                    type="text"
                    placeholder={`Division ${index + 1} Name`}
                    value={division.name}
                    onChange={(e) => handleDivisionChange(index, 'name', e.target.value)}
                    className="border p-2 w-full"
                  />
                  <input
                    type="number"
                    placeholder={`Amount for Division ${index + 1}`}
                    value={division.amount}
                    onChange={(e) => handleDivisionChange(index, 'amount', e.target.value)}
                    className="border p-2 w-full"
                  />
                </div>
              ))}
            </div>

            <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
            <button onClick={togglePopup} className="bg-gray-500 text-white px-4 py-2 rounded ml-2">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentHeadDashboard;
