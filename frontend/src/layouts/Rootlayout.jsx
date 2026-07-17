import React from "react";
import Navbar from "../components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLoading } from "../contexts/LoadingContext";

const Rootlayout = () => {
  const location = useLocation();
  const loading = useLoading();

  useEffect(() => {
    loading.current.complete();
  }, [location]);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
      >
        <Navbar />
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
};

export default Rootlayout;
