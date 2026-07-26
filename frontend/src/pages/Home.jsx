import { BookOpen, School, FlaskConical, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleGetStarted = () => {
    if (!token) {
      navigate("/login");
      return;
    }

    const section = document.getElementById("features");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-900 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-5">Smart Campus</h1>

              <p className="text-lg text-gray-200 mb-6">
                IoT powered platform for monitoring library seats, classrooms
                and labs in real time.
              </p>

              <button
                onClick={handleGetStarted}
                className="cursor-pointer bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold"
              >
                Get Started
              </button>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585"
                alt="campus"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Smart Campus Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-6">
            <BookOpen size={50} className="text-blue-600 mb-4" />

            <h3 className="text-xl font-bold mb-2">Library Seats</h3>

            <p className="text-gray-600">
              Check real-time seat availability before visiting the library.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6">
            <School size={50} className="text-green-600 mb-4" />

            <h3 className="text-xl font-bold mb-2">Classrooms</h3>

            <p className="text-gray-600">
              Monitor classroom occupancy instantly.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6">
            <FlaskConical size={50} className="text-purple-600 mb-4" />

            <h3 className="text-xl font-bold mb-2">Labs</h3>

            <p className="text-gray-600">
              View lab availability and usage statistics.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Live Campus Status
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Users size={40} className="mx-auto text-blue-600" />

              <h3 className="text-4xl font-bold mt-4">125</h3>

              <p className="text-gray-500">Library Seats Available</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h3 className="text-4xl font-bold text-green-600">18</h3>

              <p className="text-gray-500">Active Classrooms</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h3 className="text-4xl font-bold text-purple-600">9</h3>

              <p className="text-gray-500">Available Labs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-6">
        <div className="text-center">
          © 2026 Smart Campus Resource Management System
        </div>
      </footer>
    </div>
  );
};

export default Home;
