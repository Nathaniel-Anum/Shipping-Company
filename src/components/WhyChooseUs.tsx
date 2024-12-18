import { motion } from 'framer-motion';
import { Shield, Clock, Award, Users, Truck, Headphones } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: "Secure Shipping",
    description: "Advanced tracking and security measures to ensure your packages are safe"
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "99.9% on-time delivery rate across all our shipping services"
  },
  {
    icon: Award,
    title: "Industry Leaders",
    description: "25+ years of experience with recognition for excellence"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Dedicated professionals committed to your shipping success"
  },
  {
    icon: Truck,
    title: "Global Network",
    description: "Extensive network covering 200+ countries worldwide"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer service for your peace of mind"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose ShipFast?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine industry expertise, global reach, and cutting-edge technology to deliver 
              exceptional shipping solutions for businesses of all sizes.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <reason.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}