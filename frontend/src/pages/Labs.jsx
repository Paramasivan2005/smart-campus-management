import React from "react";

const labs = [
  { name: "Lab A", status: "Available" },
  { name: "Lab B", status: "Occupied" },
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

const LabsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
        Smart Campus - Labs Status
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {labs.map((lab, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
          >
            {/* Lab Name */}
            <h2 className="text-xl font-semibold text-gray-800">
              {lab.name}
            </h2>

            {/* Status */}
            <span
              className={`inline-block mt-4 px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(
                lab.status
              )}`}
            >
              {lab.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabsPage;