import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AdminReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/reports/pending`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setReports(response.data);
    } catch (err) {
      console.log(err);
      toast.error("Failed to fetch reports");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Complaints Management</h1>

      <div className="grid gap-4">
        {reports.map((report) => (
          <div key={report.id} className="bg-white p-5 rounded-xl shadow">

            <p>
              <strong>Student:</strong> {report.student_name}
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

            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              Reply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminReports;
