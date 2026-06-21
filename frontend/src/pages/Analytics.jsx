import React, { useState } from "react";

const mockData = [
  { date: "2026-06-01", labA: "Available", labB: "Occupied", library: 3 },
  { date: "2026-06-02", labA: "Occupied", labB: "Available", library: 2 },
  { date: "2026-06-03", labA: "Available", labB: "Available", library: 1 },
  { date: "2026-06-04", labA: "Occupied", labB: "Occupied", library: 0 },
];

const AnalyticsPage = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleGenerate = () => {
    if (!fromDate || !toDate) return;

    const result = mockData.filter((item) => {
      return item.date >= fromDate && item.date <= toDate;
    });

    setFilteredData(result);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">
        Analytics Report
      </h1>

      {/* DATE FILTER */}
      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Select Date Range
        </h2>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="border p-2 rounded w-full"
          />

          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="border p-2 rounded w-full"
          />

          <button
            onClick={handleGenerate}
            className="bg-blue-600 text-white px-6 py-2 rounded"
          >
            Generate Report
          </button>
        </div>
      </div>

      {/* SUMMARY */}
      {filteredData.length > 0 && (
        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Summary
          </h2>

          <p>
            Total Records:{" "}
            <strong>{filteredData.length}</strong>
          </p>

          <p>
            Library Status Count:{" "}
            <strong>
              {
                filteredData.filter((d) => d.library > 0)
                  .length
              }
            </strong>
          </p>
        </div>
      )}

      {/* HISTORY TABLE */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">
          History Report
        </h2>

        {filteredData.length === 0 ? (
          <p className="text-gray-500">
            No data selected. Please choose date range.
          </p>
        ) : (
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Lab A</th>
                <th className="p-2 border">Lab B</th>
                <th className="p-2 border">Library Seats</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="border p-2">
                    {item.date}
                  </td>
                  <td className="border p-2">
                    {item.labA}
                  </td>
                  <td className="border p-2">
                    {item.labB}
                  </td>
                  <td className="border p-2">
                    {item.library}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AnalyticsPage;