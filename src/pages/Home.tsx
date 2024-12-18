import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Package, Globe, Clock } from "lucide-react";
import ParallaxSection from "../components/ParallaxSection";
import TestimonialCard from "../components/TestimonialCard";
import WhyChooseUs from "../components/WhyChooseUs";

const features = [
  {
    icon: Package,
    title: "Global Shipping",
    description:
      "Ship your packages anywhere in the world with our reliable network",
  },
  {
    icon: Globe,
    title: "Worldwide Coverage",
    description: "Access to over 200 countries and territories worldwide",
  },
  {
    icon: Clock,
    title: "Real-time Tracking",
    description: "Track your shipments 24/7 with our advanced tracking system",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Operations Manager",
    company: "TechCorp",
    content:
      "ShipFast has revolutionized our logistics operations. Their reliable service and real-time tracking have made our shipping process seamless.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Michael Chen",
    role: "Supply Chain Director",
    company: "GlobalTrade Inc",
    content:
      "The best shipping partner we've worked with. Their global coverage and customer service are unmatched in the industry.",
    image:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>ShipFast - Global Shipping Solutions</title>
        <meta
          name="description"
          content="Your trusted partner in global logistics and shipping solutions. Ship anywhere in the world with reliability and real-time tracking."
        />
      </Helmet>

      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Ship Anywhere, Anytime
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8"
          >
            Your trusted partner in global logistics
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full inline-flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </ParallaxSection>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of shipping and logistics
              solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center p-6"
              >
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied
              clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                {...testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
