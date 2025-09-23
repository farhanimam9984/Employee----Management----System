import React from "react";

import { motion} from "framer-motion";
import { Briefcase } from "lucide-react";

import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";
import Header from "../others/Header";
import AuthProvider from "../../context/AuthProvider";

const AdminDashboard = (props) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-8">
      {/* Logo + Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-between mb-10"
      >
        <div className="flex items-center space-x-3">
          <Briefcase className="w-10 h-10 text-emerald-400" />
          <h1 className="text-3xl font-extrabold tracking-wide">
            Employee Management System
          </h1>
        </div>
        <Header changeUser={props.changeUser} />
      </motion.div>

      {/* Create Task Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="mb-10"
      >
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-emerald-600/40 transition">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-400">
            Create New Task
          </h2>
          <CreateTask />
        </div>
      </motion.div>

      {/* All Tasks Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-600/40 transition">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">
            All Employee Tasks
          </h2>
          <AllTask />
        </div>
      </motion.div>

      {/* AuthProvider (if used for context) */}
      <AuthProvider />
    </div>
  );
};

export default AdminDashboard;
