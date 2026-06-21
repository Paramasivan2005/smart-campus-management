import React, { useState } from "react";

const AdminReports = () => {
  const [reports] = useState([
    {
      id: "CMP001",
      studentName: "Arun",
      email: "arun@gmail.com",
      title: "Broken Chair",
      category: "Library",
      status: "Pending",
    },
    {
      id: "CMP002",
      studentName: "Karthik",
      email: "karthik@gmail.com",
      title: "Lab Computer Not Working",
      category: "Lab",
      status: "Pending",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">
        Complaints Management
      </h1>

      <div className="grid gap-4">
        {reports.map((report) => (
          <div
            key={report.id}
            className="bg-white p-5 rounded-xl shadow"
          >
            <h2 className="font-bold text-lg">
              {report.id}
            </h2>

            <p>
              <strong>Student:</strong> {report.studentName}
            </p>

            <p>
              <strong>Title:</strong> {report.title}
            </p>

            <p>
              <strong>Category:</strong> {report.category}
            </p>

            <p>
              <strong>Status:</strong> {report.status}
            </p>

            <button
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            >
              Reply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminReports;