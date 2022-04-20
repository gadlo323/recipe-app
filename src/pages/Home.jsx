import React from "react";
import Popular from "../compnents/Popular";
import Veggie from "../compnents/Veggie";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Popular />
      <Veggie />
    </motion.div>
  );
};

export default Home;
