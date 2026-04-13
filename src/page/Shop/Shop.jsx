"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const categories = ["All", "Pizza", "Burger", "Drinks", "Dessert"];

const foods = [
  {
    id: 1,
    name: "Cheese Pizza",
    price: 12,
    category: "Pizza",
    img: "https://i.ibb.co/0jqHpnp/pizza.png",
  },
  {
    id: 2,
    name: "Beef Burger",
    price: 10,
    category: "Burger",
    img: "https://i.ibb.co/9v6h7Qk/burger.png",
  },
  {
    id: 3,
    name: "Cold Drink",
    price: 5,
    category: "Drinks",
    img: "https://i.ibb.co/4fX1ZkX/drink.png",
  },
  {
    id: 4,
    name: "Chocolate Cake",
    price: 8,
    category: "Dessert",
    img: "https://i.ibb.co/F0s3FHQ/cake.png",
  },
];

const Shop = () => {
  const [active, setActive] = useState("All");

  const filteredFoods =
    active === "All" ? foods : foods.filter((item) => item.category === active);

  return (
    <div className="pt-32 pb-16 px-4 bg-gray-50 min-h-screen">
      {/* 🔥 Hero */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold">
          Our <span className="text-accent">Menu</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Choose your favorite food and order now 🍔🍕
        </p>
      </motion.div>

      {/* 🔥 Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full border transition ${
              active === cat
                ? "bg-accent text-white"
                : "bg-white hover:bg-accent hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🔥 Food Grid */}
      <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredFoods.map((food) => (
          <motion.div
            key={food.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-5 rounded-2xl shadow hover:shadow-xl transition"
          >
            <img
              src={food.img}
              alt={food.name}
              className="w-full h-40 object-contain mb-4"
            />

            <h3 className="text-lg font-semibold">{food.name}</h3>
            <p className="text-accent font-bold">${food.price}</p>

            <button className="mt-3 w-full bg-accent text-white py-2 rounded-lg hover:opacity-90 transition">
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>

      {/* 🔥 Offer Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container mx-auto mt-16 bg-accent text-white p-8 rounded-2xl text-center"
      >
        <h3 className="text-2xl font-bold mb-2">🔥 Special Offer 20% Off</h3>
        <p>Order now and get discount on selected items!</p>
      </motion.div>
    </div>
  );
};

export default Shop;
