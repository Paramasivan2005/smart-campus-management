import React from "react";

const classrooms = [
  { name: "Classroom 1", status: "Available" },
  { name: "Classroom 2", status: "Occupied" },
  { name: "Classroom 3", status: "Available" },
  { name: "Classroom 4", status: "Occupied" },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Available":
      return "text-green-600 bg-green-100";
    case "Occupied":
      return "text-red-600 bg-red-100";
    default:
      return "text-gray-600 bg-gray-100";
  }
};

const ClassroomPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
        Smart Campus - Classrooms Status
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classrooms.map((room, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
          >
            {/* Classroom Name */}
            <h2 className="text-xl font-semibold text-gray-800">
              {room.name}
            </h2>

            {/* Status */}
            <span
              className={`inline-block mt-4 px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(
                room.status
              )}`}
            >
              {room.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassroomPage;