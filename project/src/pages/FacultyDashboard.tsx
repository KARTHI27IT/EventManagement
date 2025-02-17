import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

function FacultyDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventData, setEventData] = useState({
    name: "",
    date: "",
    venue: "",
    time: "",
    student_head: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/createEvent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Event creation failed");

      toast.success("Event Created Successfully");
      setIsModalOpen(false);
      setEventData({ name: "", date: "", venue: "", time: "", student_head: "" });
    } catch (error) {
      toast.error(error.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEventData({ name: "", date: "", venue: "", time: "", student_head: "" });
  };

  const handleViewEvents = () => {
    navigate("/events"); // Navigate to the events page
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Faculty Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Event Management Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Event Management</h2>
          <div className="space-y-3">
            <button
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
              onClick={() => setIsModalOpen(true)}
            >
              Create New Event
            </button>
            <button
              className="w-full bg-white text-indigo-600 border border-indigo-600 px-4 py-2 rounded hover:bg-indigo-50"
              onClick={handleViewEvents} // Add onClick handler for navigation
            >
              View All Events
            </button>
          </div>
        </div>

        {/* Budget Requests Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Budget Requests</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Pending Requests</span>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                3
              </span>
            </div>
            <button className="w-full bg-white text-indigo-600 border border-indigo-600 px-4 py-2 rounded hover:bg-indigo-50">
              View All Requests
            </button>
          </div>
        </div>

        {/* OD Requests Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">OD Requests</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Pending Approvals</span>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                5
              </span>
            </div>
            <button className="w-full bg-white text-indigo-600 border border-indigo-600 px-4 py-2 rounded hover:bg-indigo-50">
              View All OD Requests
            </button>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h5 className="text-lg font-semibold">Create Event</h5>
              <button
                onClick={closeModal}
                className="text-xl font-bold"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="eventName" className="block font-medium">
                  Event Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="eventName"
                  className="w-full border rounded px-3 py-2"
                  placeholder="Enter event name"
                  value={eventData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="eventDate" className="block font-medium">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="eventDate"
                  className="w-full border rounded px-3 py-2"
                  value={eventData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="eventVenue" className="block font-medium">
                  Venue
                </label>
                <input
                  type="text"
                  name="venue"
                  id="eventVenue"
                  className="w-full border rounded px-3 py-2"
                  placeholder="Enter venue"
                  value={eventData.venue}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="studentHead" className="block font-medium">
                  Student Head
                </label>
                <input
                  type="text"
                  name="student_head"
                  id="studentHead"
                  className="w-full border rounded px-3 py-2"
                  placeholder="Enter student head name"
                  value={eventData.student_head}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="eventTime" className="block font-medium">
                  Timings
                </label>
                <input
                  type="time"
                  name="time"
                  id="eventTime"
                  className="w-full border rounded px-3 py-2"
                  value={eventData.time}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex justify-end space-x-3 mt-4">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 rounded"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default FacultyDashboard;