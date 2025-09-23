import React, { useState } from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react"; // Logo icon

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      {/* Logo + Title */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mb-10"
      >
        <div className="flex items-center gap-3 text-white">
          <BriefcaseBusiness className="w-12 h-12 text-yellow-300" />
          <h1 className="text-4xl font-bold">Employee Management System</h1>
        </div>
        <p className="text-gray-200 mt-2 text-lg">Please login to continue</p>
      </motion.div>

      {/* Form container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 shadow-2xl"
      >
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <motion.input
            whileFocus={{ scale: 1.05 }}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="w-full outline-none bg-white/20 text-white placeholder:text-gray-200 border border-white/40 font-medium text-lg py-3 px-6 rounded-full focus:ring-2 focus:ring-yellow-300 transition"
            type="email"
            placeholder="Enter your Email"
          />

          <motion.input
            whileFocus={{ scale: 1.05 }}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="w-full outline-none bg-white/20 text-white placeholder:text-gray-200 border border-white/40 font-medium text-lg py-3 px-6 rounded-full mt-5 focus:ring-2 focus:ring-yellow-300 transition"
            type="password"
            placeholder="Enter your Password"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer mt-7 w-full text-white font-semibold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-lg py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition"
          >
            Login
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
