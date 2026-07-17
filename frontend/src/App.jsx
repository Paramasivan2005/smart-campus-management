import React from "react";
import { LoadingProvider } from "./contexts/LoadingContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./layouts/Rootlayout";
import Home from "./pages/Home";
import LibrarySeats from "./pages/LiabrarySeats";
import ClassroomPage from "./pages/Classroom";
import LabsPage from "./pages/Labs";
import LoginPage from "./pages/Login";
import CreateUser from "./pages/CreateUser";
import ReportPage from "./pages/ReportPage";
import AdminReports from "./pages/AdminReportPage";
import AnalyticsPage from "./pages/Analytics";
import AdminDashboard from "./pages/Dashboard";
import UserDetails from "./pages/UserDetails";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="liabraryseats" element={<LibrarySeats />} />
        <Route path="classroom" element={<ClassroomPage />} />
        <Route path="labs" element={<LabsPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="createuser" element={<CreateUser />} />
        <Route path="report" element={<ReportPage />} />
        <Route path="admin-reports" element={<AdminReports />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="student-details" element={<UserDetails />} />
      </Route>,
    ),
  );
  return (
    <>
      {/* 🔥 GLOBAL TOAST (IMPORTANT) */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
      <LoadingProvider>
        <RouterProvider router={router} />
      </LoadingProvider>
    </>
  );
};

export default App;
