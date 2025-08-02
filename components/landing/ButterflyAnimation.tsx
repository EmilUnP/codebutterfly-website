import React from 'react';
import { motion } from "framer-motion";

export default function ButterflyAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Main Butterfly */}
      <motion.div
        className="absolute top-20 right-20"
        animate={{
          x: [0, 50, -30, 20, 0],
          y: [0, -30, 20, -10, 0],
          rotate: [0, 5, -5, 2, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.svg
          width="60"
          height="60"
          viewBox="0 0 100 100"
          className="drop-shadow-lg"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Butterfly Wings */}
          <motion.path
            d="M50 30 Q30 10 20 25 Q25 40 50 35"
            fill="url(#gradient1)"
            animate={{
              d: [
                "M50 30 Q30 10 20 25 Q25 40 50 35",
                "M50 30 Q28 8 18 23 Q23 38 50 35",
                "M50 30 Q30 10 20 25 Q25 40 50 35"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M50 30 Q70 10 80 25 Q75 40 50 35"
            fill="url(#gradient2)"
            animate={{
              d: [
                "M50 30 Q70 10 80 25 Q75 40 50 35",
                "M50 30 Q72 8 82 23 Q77 38 50 35",
                "M50 30 Q70 10 80 25 Q75 40 50 35"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M50 35 Q30 45 25 60 Q35 70 50 65"
            fill="url(#gradient3)"
            animate={{
              d: [
                "M50 35 Q30 45 25 60 Q35 70 50 65",
                "M50 35 Q28 43 23 58 Q33 68 50 65",
                "M50 35 Q30 45 25 60 Q35 70 50 65"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M50 35 Q70 45 75 60 Q65 70 50 65"
            fill="url(#gradient4)"
            animate={{
              d: [
                "M50 35 Q70 45 75 60 Q65 70 50 65",
                "M50 35 Q72 43 77 58 Q67 68 50 65",
                "M50 35 Q70 45 75 60 Q65 70 50 65"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Butterfly Body */}
          <line x1="50" y1="20" x2="50" y2="80" stroke="#4a5568" strokeWidth="2" strokeLinecap="round" />
          
          {/* Gradients */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#f472b6" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </motion.svg>
      </motion.div>

      {/* Secondary Butterflies */}
      <motion.div
        className="absolute top-1/3 left-10 opacity-40"
        animate={{
          x: [0, 30, -20, 15, 0],
          y: [0, -20, 15, -8, 0],
          rotate: [0, -3, 3, -1, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      >
        <motion.svg
          width="30"
          height="30"
          viewBox="0 0 100 100"
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path d="M50 30 Q30 10 20 25 Q25 40 50 35" fill="url(#smallGrad1)" />
          <path d="M50 30 Q70 10 80 25 Q75 40 50 35" fill="url(#smallGrad2)" />
          <path d="M50 35 Q30 45 25 60 Q35 70 50 65" fill="url(#smallGrad1)" />
          <path d="M50 35 Q70 45 75 60 Q65 70 50 65" fill="url(#smallGrad2)" />
          <line x1="50" y1="25" x2="50" y2="75" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
          
          <defs>
            <linearGradient id="smallGrad1">
              <stop offset="0%" stopColor="#f472b6" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="smallGrad2">
              <stop offset="0%" stopColor="#c084fc" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#ddd6fe" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </motion.svg>
      </motion.div>
    </div>
  );
}