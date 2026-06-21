const seats = [
  { id: 1, status: "available" },
  { id: 2, status: "occupied" },
  { id: 3, status: "available" },
  { id: 4, status: "occupied" },
];

const LibrarySeats = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-3">
          Library Seat Availability
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Real-time seat monitoring using IoT sensors
        </p>

        {/* Summary */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">

          <div className="bg-white shadow rounded-lg p-5 text-center">
            <h2 className="text-3xl font-bold text-blue-600">
              4
            </h2>
            <p>Total Seats</p>
          </div>

          <div className="bg-white shadow rounded-lg p-5 text-center">
            <h2 className="text-3xl font-bold text-green-600">
              2
            </h2>
            <p>Available</p>
          </div>

          <div className="bg-white shadow rounded-lg p-5 text-center">
            <h2 className="text-3xl font-bold text-red-600">
              2
            </h2>
            <p>Occupied</p>
          </div>

        </div>

        {/* Seat Layout */}
        <div className="bg-white rounded-xl shadow-lg p-8">

          <h2 className="text-2xl font-semibold text-center mb-8">
            Seat Layout
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {seats.map((seat) => (
              <div
                key={seat.id}
                className={`rounded-xl p-6 text-center shadow-md border-2
                ${
                  seat.status === "available"
                    ? "bg-green-100 border-green-500"
                    : "bg-red-100 border-red-500"
                }`}
              >
                <h3 className="text-xl font-bold">
                  Seat {seat.id}
                </h3>

                <p className="mt-2 font-medium">
                  {seat.status === "available"
                    ? "🟢 Available"
                    : "🔴 Occupied"}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
};

export default LibrarySeats;