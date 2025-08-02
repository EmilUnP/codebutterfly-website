import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, Target, Sparkles } from "lucide-react";

const stats = [
  { icon: Users, number: "50+", label: "Happy Clients", color: "from-blue-500 to-cyan-500" },
  { icon: Award, number: "100+", label: "Projects Completed", color: "from-purple-500 to-pink-500" },
  { icon: Clock, number: "5+", label: "Years Experience", color: "from-green-500 to-emerald-500" },
  { icon: Target, number: "98%", label: "Success Rate", color: "from-orange-500 to-red-500" }
];

export default function AboutSection() {
  return (
    <section className="py-16 px-6 relative bg-white/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center glass-morphism rounded-full px-6 py-3 mb-8 material-card"
          >
            <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">About Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="playfair text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="text-gray-800">Crafting Digital</span>
            <br />
            <span className="gradient-text">Excellence Since 2019</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We're a passionate team of designers, developers, and digital strategists who believe in the power of beautiful, functional design to transform businesses and create meaningful connections.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="text-center"
            >
              <Card className="material-card glass-morphism p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 material-fab`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1, type: "spring" }}
                    className="playfair text-3xl font-bold gradient-text mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-gray-600 font-medium text-sm">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}