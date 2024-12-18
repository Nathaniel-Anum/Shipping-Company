import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Truck, Ship, Plane, Package, Clock, Globe } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';

const services = [
  {
    icon: Truck,
    title: "Ground Shipping",
    description: "Reliable door-to-door delivery services across the continent"
  },
  {
    icon: Ship,
    title: "Ocean Freight",
    description: "Cost-effective shipping solutions for large cargo volumes"
  },
  {
    icon: Plane,
    title: "Air Freight",
    description: "Express delivery services for time-sensitive shipments"
  },
  {
    icon: Package,
    title: "Warehousing",
    description: "Secure storage solutions with inventory management"
  },
  {
    icon: Clock,
    title: "Express Delivery",
    description: "Same-day and next-day delivery options available"
  },
  {
    icon: Globe,
    title: "International Shipping",
    description: "Global shipping network covering 200+ countries"
  }
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services - ShipFast</title>
        <meta name="description" content="Explore our comprehensive range of shipping and logistics services including ground shipping, ocean freight, air freight, and more." />
      </Helmet>

      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">Comprehensive shipping solutions for every need</p>
        </div>
      </ParallaxSection>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}