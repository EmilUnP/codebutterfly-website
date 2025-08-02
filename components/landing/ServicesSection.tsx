import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Heart, Search, Sparkles, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies and seamless user experiences.",
    features: ["Responsive Design", "Performance Optimization", "API Integration", "E-commerce Solutions"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Intuitive and beautiful interfaces that engage users and drive conversions through thoughtful design.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Heart,
    title: "Social Media Marketing",
    description: "Strategic social media campaigns that build community and amplify your brand's voice across platforms.",
    features: ["Content Strategy", "Community Management", "Paid Advertising", "Analytics & Reporting"],
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Data-driven SEO strategies that improve your search rankings and drive organic traffic to your site.",
    features: ["Keyword Research", "Technical SEO", "Content Optimization", "Link Building"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Sparkles,
    title: "Branding & Graphic Design",
    description: "Cohesive brand identities and stunning visual materials that tell your story and captivate audiences.",
    features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Visual Identity"],
    color: "from-amber-500 to-orange-500"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-6 relative">
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
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
            </motion.div>
            <span className="text-sm font-medium text-gray-700">Our Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="playfair text-5xl md:text-6xl font-bold mb-6"
          >
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-gray-800 inline-block"
            >
              We craft meaningful
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="gradient-text inline-block"
            >
              digital experiences
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            From concept to launch, we provide comprehensive digital solutions that elevate your brand and drive results.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group h-full"
            >
              <Card className="h-full material-card glass-morphism hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <CardContent className="p-8 relative h-full flex flex-col">
                  {/* Background gradient effect */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700`}
                  />

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-6 material-fab relative z-10`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="playfair text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300 relative z-10"
                  >
                    {service.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300 relative z-10 flex-grow"
                  >
                    {service.description}
                  </motion.p>

                  {/* Feature List */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="space-y-2 mb-6 relative z-10"
                  >
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.7 + index * 0.1 + featureIndex * 0.05 }}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}
                        />
                        {feature}
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                    className={`h-1 bg-gradient-to-r ${service.color} rounded-full mb-4 relative z-10`}
                  />

                  {/* Learn More Button */}
                  <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center text-gray-600 hover:text-pink-600 font-medium transition-colors duration-300 relative z-10 group/btn"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}