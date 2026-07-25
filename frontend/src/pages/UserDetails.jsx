import React, { useState } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";
import axios from "axios";

const StudentDetails = () => {
  const [students, setStudents] = useState([]);

  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    register_number: "",
    department: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/users`);

      setStudents(response.data);
    } catch (err) {
      console.log(err);
      toast.error("Failed to fetch users");
    }
  };

  // Start edit
  const handleEdit = (student) => {
    setEditId(student.id);
    setEditData(student);
  };

  // Save update
  const handleSave = async () => {
    try {
      await await axios.put(
        `${import.meta.env.VITE_API_URL}/users/${editId}`,
        editData,
      );

      fetchUser();

      setEditId(null);

      toast.success("Updated Successfully");
    } catch (err) {
      toast.error("Update Failed");
    }
  };

  // Delete student
  const handleDelete = async (id) => {
    try {
      await await axios.delete(`${import.meta.env.VITE_API_URL}/users/${id}`);

      fetchUser();

      toast.success("User Deleted");
    } catch (err) {
      toast.error("Delete Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Student Management</h1>

        <div className="bg-white px-4 py-2 rounded shadow">
          Total Students: <span className="font-bold">{students.length}</span>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white p-4 rounded-xl shadow overflow-x-auto">
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">Name</th>
              <th>Reg No</th>
              <th>Dept</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((stu) => (
              <tr key={stu.id} className="border-b">
                {/* NAME */}
                <td className="p-2">
                  {editId === stu.id ? (
                    <input
                      value={editData.name}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          name: e.target.value,
                        })
                      }
                      className="border p-1"
                    />
                  ) : (
                    stu.name
                  )}
                </td>

                {/* REG NO */}
                <td>
                  {editId === stu.id ? (
                    <input
                      value={editData.register_number}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          register_number: e.target.value,
                        })
                      }
                      className="border p-1"
                    />
                  ) : (
                    stu.register_number
                  )}
                </td>

                {/* DEPT */}
                <td>
                  {editId === stu.id ? (
                    <input
                      value={editData.department}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          department: e.target.value,
                        })
                      }
                      className="border p-1"
                    />
                  ) : (
                    stu.department
                  )}
                </td>

                {/* EMAIL */}
                <td>
                  {editId === stu.id ? (
                    <input
                      value={editData.email}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          email: e.target.value,
                        })
                      }
                      className="border p-1"
                    />
                  ) : (
                    stu.email
                  )}
                </td>

                {/* PASSWORD */}
                <td>
                  {editId === stu.id ? (
                    <input
                      value={editData.password}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          password: e.target.value,
                        })
                      }
                      className="border p-1"
                    />
                  ) : (
                    "••••••"
                  )}
                </td>

                {/* ACTIONS */}
                <td className="flex gap-2 p-2">
                  {editId === stu.id ? (
                    <button
                      onClick={handleSave}
                      className="bg-green-600 text-white px-2 py-1 rounded"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(stu)}
                      className="bg-blue-600 text-white px-2 py-1 rounded"
                    >
                      Edit
                    </button>
                  )}

                  <button
                    onClick={() => handleDelete(stu.id)}
                    className="bg-red-600 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentDetails;
