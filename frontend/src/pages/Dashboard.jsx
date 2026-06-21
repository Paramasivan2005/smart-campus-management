import React, { useEffect, useState } from "react";

const initialState = {
  students: 250,
  complaints: 35,
  pending: 7,
  resolved: 28,
  librarySeats: 3,
  labA: "Available",
  labB: "Occupied",
  classroom1: "Available",
  classroom2: "Occupied",
};

const AdminDashboard = () => {
  const [data, setData] = useState(initialState);

  // 🔥 Fake realtime update (replace with API/WebSocket later)
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => ({
        ...prev,
        librarySeats: Math.floor(Math.random() * 4),
        labA: Math.random() > 0.5 ? "Available" : "Occupied",
        labB: Math.random() > 0.5 ? "Available" : "Occupied",
        classroom1: Math.random() > 0.5 ? "Available" : "Occupied",
        classroom2: Math.random() > 0.5 ? "Available" : "Occupied",
      }));
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard (Realtime)
      </h1>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

        <div className="bg-white p-5 rounded-xl shadow">
          <p>Total Students</p>
          <h2 className="text-2xl font-bold">{data.students}</h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <p>Total Complaints</p>
          <h2 className="text-2xl font-bold">{data.complaints}</h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <p>Pending</p>
          <h2 className="text-2xl font-bold text-red-500">
            {data.pending}
          </h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <p>Resolved</p>
          <h2 className="text-2xl font-bold text-green-500">
            {data.resolved}
          </h2>
        </div>

      </div>

      {/* REALTIME STATUS SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Library */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">
            Library Status
          </h2>
          <p>Available Seats: {data.librarySeats}/4</p>
        </div>

        {/* Labs */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">
            Labs Status
          </h2>
          <p>Lab A: {data.labA}</p>
          <p>Lab B: {data.labB}</p>
        </div>

        {/* Classrooms */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">
            Classrooms
          </h2>
          <p>Classroom 1: {data.classroom1}</p>
          <p>Classroom 2: {data.classroom2}</p>
        </div>

        {/* System Status */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">
            System Status
          </h2>
          <p className="text-green-600 font-bold">
            LIVE 🔴 (Auto Updating)
          </p>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;