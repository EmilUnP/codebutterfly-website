import React from 'react';
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Facebook 
} from "lucide-react";
import Link from "next/link";
import { createPageUrl } from "@/utils";

export default function Footer() {
  return (
    <footer className="relative z-10 material-surface py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center material-card">
                  <motion.svg
                    width="20"
                    height="20"
                    viewBox="0 0 100 100"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <path d="M50 30 Q30 10 20 25 Q25 40 50 35" fill="white" fillOpacity="0.9" />
                    <path d="M50 30 Q70 10 80 25 Q75 40 50 35" fill="white" fillOpacity="0.7" />
                    <path d="M50 35 Q30 45 25 60 Q35 70 50 65" fill="white" fillOpacity="0.8" />
                    <path d="M50 35 Q70 45 75 60 Q65 70 50 65" fill="white" fillOpacity="0.6" />
                    <line x1="50" y1="25" x2="50" y2="75" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </motion.svg>
                </div>
                <h3 className="playfair text-2xl font-bold text-gray-800">
                  CodeButterfly.art
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed max-w-md">
                We transform digital dreams into reality through innovative design, cutting-edge development, and strategic marketing solutions.
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: "Home", link: "/" },
                { name: "Projects", link: "/projects" },
                { name: "About", link: "/#about" },
                { name: "Services", link: "/#services" },
                { name: "Contact", link: "/#contact" }
              ].map((item, index) => (
                <motion.div key={item.name}>
                  <Link
                    href={item.link}
                    className="block text-gray-600 hover:text-pink-600 transition-colors duration-300"
                  >
                    <motion.span
                      whileHover={{ x: 4, color: "#ec4899" }}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@codebutterfly.art</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 glass-morphism rounded-full flex items-center justify-center text-gray-700 hover:text-pink-600 transition-colors duration-300 material-card"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              © 2024 CodeButterfly.art. Crafted with ❤️ in San Francisco.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}