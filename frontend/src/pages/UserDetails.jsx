import React, { useState } from "react";
import { toast } from "react-toastify";

const StudentDetails = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Arun",
      regNo: "21CSE001",
      dept: "CSE",
      email: "arun@gmail.com",
      password: "123456",
    },
    {
      id: 2,
      name: "Karthik",
      regNo: "21CSE002",
      dept: "IT",
      email: "karthik@gmail.com",
      password: "abcdef",
    },
  ]);

  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    regNo: "",
    dept: "",
    email: "",
    password: "",
  });

  // Start edit
  const handleEdit = (student) => {
    setEditId(student.id);
    setEditData(student);
  };

  // Save update
  const handleSave = () => {
    const updated = students.map((stu) =>
      stu.id === editId ? editData : stu
    );

    setStudents(updated);
    setEditId(null);
    toast.info("Updated User Details");
  };

  // Delete student
  const handleDelete = (id) => {
    setStudents(students.filter((stu) => stu.id !== id));
    toast.warn("User Was Deleted");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Student Management
        </h1>

        <div className="bg-white px-4 py-2 rounded shadow">
          Total Students:{" "}
          <span className="font-bold">{students.length}</span>
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
                      value={editData.regNo}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          regNo: e.target.value,
                        })
                      }
                      className="border p-1"
                    />
                  ) : (
                    stu.regNo
                  )}
                </td>

                {/* DEPT */}
                <td>
                  {editId === stu.id ? (
                    <input
                      value={editData.dept}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          dept: e.target.value,
                        })
                      }
                      className="border p-1"
                    />
                  ) : (
                    stu.dept
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