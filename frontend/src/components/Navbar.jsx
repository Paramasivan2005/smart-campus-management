import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [usersOpen, setUsersOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const user = JSON.parse(localStorage.getItem("user") || "null");

  const role = user?.role;

  const closeMobileMenu = () => {
    setMobileMenu(false);
    setUsersOpen(false);
    setAdminOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");

    window.location.reload();
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-around items-center h-16">
          {/* LOGO */}
          <Link to="/" onClick={closeMobileMenu}>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="logo" className="w-10 h-10" />
              <h1 className="text-2xl font-bold text-blue-700">Smart Campus</h1>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {/* USERS */}
            <div className="relative group">
              <button className="flex items-center gap-1 font-medium">
                Users <ChevronDown size={18} />
              </button>

              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg w-56 mt-1">
                <ul className="py-2">
                  <Link to="/liabraryseats">
                    <li className="px-4 py-3 hover:bg-gray-100">
                      Library Seats
                    </li>
                  </Link>

                  <Link to="/classroom">
                    <li className="px-4 py-3 hover:bg-gray-100">Classroom</li>
                  </Link>

                  <Link to="/labs">
                    <li className="px-4 py-3 hover:bg-gray-100">Labs</li>
                  </Link>

                  <Link to="/report">
                    <li className="px-4 py-3 hover:bg-gray-100">Report</li>
                  </Link>
                </ul>
              </div>
            </div>

            {/* ADMIN */}
            {role === "admin" && (
              <div className="relative group">
                <button className="flex items-center gap-1 font-medium">
                  Admin <ChevronDown size={18} />
                </button>

                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg w-64 mt-1">
                  <ul className="py-2">
                    <Link to="/createuser">
                      <li className="px-4 py-3 hover:bg-gray-100">
                        Create User Account
                      </li>
                    </Link>

                    <Link to="/admin-reports">
                      <li className="px-4 py-3 hover:bg-gray-100">Reports</li>
                    </Link>

                    <Link to="/analytics">
                      <li className="px-4 py-3 hover:bg-gray-100">Analytics</li>
                    </Link>

                    <Link to="/dashboard">
                      <li className="px-4 py-3 hover:bg-gray-100">Dashboard</li>
                    </Link>

                    <Link to="/student-details">
                      <li className="px-4 py-3 hover:bg-gray-100">
                        Users Details
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            )}

            {/* LOGIN */}
            {!token ? (
              <Link to="/login">
                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                  Login
                </button>
              </Link>
            ) : (
              <div className="relative group">
                <button className="flex items-center gap-2">
                  <FaUserCircle className="text-3xl text-blue-600" />
                  <span className="font-medium">{user?.name}</span>
                  <ChevronDown size={18} />
                </button>

                <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="px-4 py-3 border-b">
                    <p className="font-semibold">{user?.name}</p>
                    <p className="text-sm text-gray-500 capitalize">
                      {user?.role}
                    </p>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 hover:bg-gray-100 text-red-600"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-t">
          {/* USERS */}
          <button
            onClick={() => setUsersOpen(!usersOpen)}
            className="w-full flex justify-between px-5 py-3"
          >
            Users <ChevronDown size={18} />
          </button>

          {usersOpen && (
            <div className="bg-gray-50">
              <Link to="/liabraryseats" onClick={closeMobileMenu}>
                <p className="px-8 py-2 hover:bg-gray-200">Library Seats</p>
              </Link>

              <Link to="/classroom" onClick={closeMobileMenu}>
                <p className="px-8 py-2 hover:bg-gray-200">Classroom</p>
              </Link>

              <Link to="/labs" onClick={closeMobileMenu}>
                <p className="px-8 py-2 hover:bg-gray-200">Labs</p>
              </Link>

              <Link to="/report" onClick={closeMobileMenu}>
                <p className="px-8 py-2 hover:bg-gray-200">Report</p>
              </Link>
            </div>
          )}

          {/* ADMIN */}
          {role === "admin" && (
            <>
              <button
                onClick={() => setAdminOpen(!adminOpen)}
                className="w-full flex justify-between px-5 py-3"
              >
                Admin <ChevronDown size={18} />
              </button>

              {adminOpen && (
                <div className="bg-gray-50">
                  <Link to="/createuser" onClick={closeMobileMenu}>
                    <p className="px-8 py-2 hover:bg-gray-200">
                      Create User Account
                    </p>
                  </Link>

                  <Link to="/admin-reports" onClick={closeMobileMenu}>
                    <p className="px-8 py-2 hover:bg-gray-200">Reports</p>
                  </Link>

                  <Link to="/analytics" onClick={closeMobileMenu}>
                    <p className="px-8 py-2 hover:bg-gray-200">Analytics</p>
                  </Link>

                  <Link to="/dashboard" onClick={closeMobileMenu}>
                    <p className="px-8 py-2 hover:bg-gray-200">Dashboard</p>
                  </Link>

                  <Link to="/student-details" onClick={closeMobileMenu}>
                    <p className="px-8 py-2 hover:bg-gray-200">Users Details</p>
                  </Link>
                </div>
              )}
            </>
          )}

          {/* LOGIN */}
          {!token ? (
            <div className="p-5">
              <Link to="/login" onClick={closeMobileMenu}>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
                  Login
                </button>
              </Link>
            </div>
          ) : (
            <div className="border-t">
              <div className="flex items-center gap-3 px-5 py-4">
                <FaUserCircle className="text-3xl text-blue-600" />

                <div>
                  <p className="font-semibold">{user?.name}</p>
                  <p className="text-sm text-gray-500 capitalize">
                    {user?.role}
                  </p>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="w-full text-left px-5 py-3 text-red-600 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
