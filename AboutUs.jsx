import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, TrendingUp, Users, Target, Wind, Sprout, BookOpen, Globe, Shield } from 'lucide-react';

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const features = [
    {
      icon: Recycle,
      title: "Waste to Value Transformation",
      description: "Convert agricultural waste into high-value bio-fuels and premium organic fertilizers using advanced processing technology"
    },
    {
      icon: Users,
      title: "Farmer-Industry Connection",
      description: "Our blockchain-powered platform ensures transparent transactions and fair pricing between farmers and industrial buyers"
    },
    {
      icon: TrendingUp,
      title: "Enhanced Income Generation",
      description: "Farmers can increase their annual income by up to 40% through our waste monetization and value-added services"
    },
    {
      icon: BookOpen,
      title: "Education & Training",
      description: "Access to expert-led workshops and digital learning resources on sustainable farming practices"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Contributing to UN Sustainable Development Goals through reduced emissions and improved farmer livelihoods"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control and certification process for all waste-derived products"
    }
  ];

  const impactMetrics = [
    {
      metric: "40%",
      label: "Reduction in crop burning incidents",
      subtext: "Preventing over 1000 tons of CO2 emissions annually"
    },
    {
      metric: "₹25,000",
      label: "Average additional monthly income per farmer",
      subtext: "Supporting over 10,000 farmer families"
    },
    {
      metric: "60%",
      label: "Lower carbon emissions",
      subtext: "Equivalent to taking 5000 cars off the road"
    },
    {
      metric: "15,000",
      label: "Tons of waste processed",
      subtext: "Converting waste into valuable resources"
    }
  ];

  const processSteps = [
    {
      title: "Collection",
      description: "Smart scheduling and efficient collection of agricultural waste from farms",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
    },
    {
      title: "Processing",
      description: "State-of-the-art facilities convert waste into bio-fuels and fertilizers",
      image: "https://images.unsplash.com/photo-1473876637954-4b493d59fd97?w=800&q=80"
    },
    {
      title: "Distribution",
      description: "Efficient delivery network ensures timely supply to industrial partners",
      image: "https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?w=800&q=80"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section - Enhanced with parallax effect */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-600/10"
              initial={{ rotate: 0, scale: 0.5 }}
              animate={{
                rotate: 360,
                scale: [0.5, 1, 0.5],
                y: [0, 100, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              <Leaf className="w-8 h-8" />
            </motion.div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            {...fadeIn}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
              Transforming
              <span className="text-green-600"> Agricultural Waste</span>
              <br />
              Into Sustainable Value
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
              Leveraging cutting-edge technology to create a circular economy in agriculture,
              benefiting farmers, industry, and the environment.
            </p>
            <div className="flex justify-center gap-4">
              <motion.button
                className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Our Network
              </motion.button>
              <motion.button
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section - New Addition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-gray-600">How we convert waste into value</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced with more details */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">Our Solutions</h2>
            <p className="text-green-100">Comprehensive waste management and value creation</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-green-800/50 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <feature.icon className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-green-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics - Enhanced with more context */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-gray-600">Creating measurable change in agriculture and environment</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="text-5xl font-bold text-green-600 mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.metric}
                </motion.div>
                <p className="text-lg font-semibold text-gray-800 mb-2">{item.label}</p>
                <p className="text-sm text-gray-600">{item.subtext}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Enhanced with more options */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            {...fadeIn}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join thousands of farmers and industries already contributing to a more sustainable future.
              Start your journey towards sustainable agriculture today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register as Farmer
              </motion.button>
              <motion.button
                className="bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Partner as Industry
              </motion.button>
              <motion.button
                className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}