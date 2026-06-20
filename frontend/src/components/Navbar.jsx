import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [usersOpen, setUsersOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-around items-center h-16">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="logo"
              className="w-10 h-10"
            />
            <h1 className="text-2xl font-bold text-blue-700">
              Smart Campus
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            {/* Users Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 font-medium">
                Users
                <ChevronDown size={18} />
              </button>

              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg w-56 mt-1">
                <ul className="py-2">
                  <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                    Library Seats
                  </li>
                  <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                    Classroom
                  </li>
                  <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                    Labs
                  </li>
                </ul>
              </div>
            </div>

            {/* Admin Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 font-medium">
                Admin
                <ChevronDown size={18} />
              </button>

              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg w-64 mt-1">
                <ul className="py-2">
                  <li className="px-4 py-3 hover:bg-gray-100">
                    Create User Account
                  </li>
                  <li className="px-4 py-3 hover:bg-gray-100">
                    Reports
                  </li>
                  <li className="px-4 py-3 hover:bg-gray-100">
                    Analytics
                  </li>
                  <li className="px-4 py-3 hover:bg-gray-100">
                    Dashboard
                  </li>
                  <li className="px-4 py-3 hover:bg-gray-100">
                    Users Details
                  </li>
                </ul>
              </div>
            </div>

            {/* Login */}
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              Login
            </button>

          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-t">

          {/* Users */}
          <div>
            <button
              onClick={() => setUsersOpen(!usersOpen)}
              className="w-full flex justify-between px-5 py-3"
            >
              Users
              <ChevronDown size={18} />
            </button>

            {usersOpen && (
              <div className="bg-gray-50">
                <p className="px-8 py-2">Library Seats</p>
                <p className="px-8 py-2">Classroom</p>
                <p className="px-8 py-2">Labs</p>
              </div>
            )}
          </div>

          {/* Admin */}
          <div>
            <button
              onClick={() => setAdminOpen(!adminOpen)}
              className="w-full flex justify-between px-5 py-3"
            >
              Admin
              <ChevronDown size={18} />
            </button>

            {adminOpen && (
              <div className="bg-gray-50">
                <p className="px-8 py-2">Create User Account</p>
                <p className="px-8 py-2">Reports</p>
                <p className="px-8 py-2">Analytics</p>
                <p className="px-8 py-2">Dashboard</p>
                <p className="px-8 py-2">Users Details</p>
              </div>
            )}
          </div>

          <div className="p-5">
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
              Login
            </button>
          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;