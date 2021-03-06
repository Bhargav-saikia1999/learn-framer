import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { btnVariants } from "../framerVariants/btn";

const Order = ({ pizza, setPizza }) => {
  return (
    <div className="container order">
      <h2>Thank you for your order !</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}

      <Link to="/">
        <motion.button
          onClick={() => setPizza({ base: "", toppings: [] })}
          variants={btnVariants}
          whileHover="hover"
        >
          Order another pizza
        </motion.button>
      </Link>
    </div>
  );
};

export default Order;
