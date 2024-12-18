import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Target,
  Calendar,
  MapPin,
  TrendingUp,
  Building,
  Globe,
  Trophy,
} from "lucide-react";
import ParallaxSection from "../components/ParallaxSection";
import Timeline from "../components/Timeline";

const stats = [
  { label: "Years of Experience", value: "25+" },
  { label: "Countries Served", value: "200+" },
  { label: "Satisfied Clients", value: "10K+" },
  { label: "Shipments per Year", value: "1M+" },
];

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every shipment we handle",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Our customers' success is our top priority",
  },
  {
    icon: Target,
    title: "Reliability",
    description: "Consistent and dependable service you can trust",
  },
];

const milestones = [
  {
    year: "1998",
    icon: Building,
    title: "The Beginning",
    description:
      "Started as a local courier service in Port City with just one truck and a dream to revolutionize shipping.",
  },
  {
    year: "2003",
    icon: Trophy,
    title: "Regional Recognition",
    description:
      "Awarded 'Best Emerging Logistics Company' and expanded our fleet to serve neighboring cities.",
  },
  {
    year: "2005",
    icon: MapPin,
    title: "National Expansion",
    description:
      "Established presence in major cities across the country with state-of-the-art warehouses.",
  },
  {
    year: "2010",
    icon: Globe,
    title: "Global Reach",
    description:
      "Launched international shipping services, connecting businesses across continents.",
  },
  {
    year: "2015",
    icon: Target,
    title: "Digital Transformation",
    description:
      "Implemented cutting-edge tracking technology and automated logistics solutions.",
  },
  {
    year: "2023",
    icon: TrendingUp,
    title: "Industry Leader",
    description:
      "Recognized as one of the top 10 global shipping companies with operations in 200+ countries.",
  },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - ShipFast</title>
        <meta
          name="description"
          content="Learn about ShipFast's journey, our values, and what makes us the trusted choice for global shipping solutions."
        />
      </Helmet>

      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl">Your Trusted Shipping Partner Since 1998</p>
        </div>
      </ParallaxSection>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Meet Our Founder
              </h2>
              <p className="text-gray-600">
                Nathaniel Brookes, the visionary behind ShipFast, started his
                journey in the shipping industry with a single truck and a dream
                to revolutionize global logistics. With over 25 years of
                experience in international trade and logistics, James has
                transformed ShipFast from a small local courier service into a
                global shipping solutions provider.
              </p>
              <p className="text-gray-600">
                "I believe that efficient logistics is the backbone of global
                commerce. Our mission is to connect businesses and people across
                borders, making international trade accessible to everyone." -
                Nathaniel Brookes
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-600">
                  <div className="font-semibold">Nathaniel Brookes</div>
                  <div>Founder & CEO</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Nathaniel Brookes, Founder of ShipFast"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-gray-900 text-center mb-12"
            >
              Our Journey
            </motion.h2>
            <Timeline items={milestones} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
