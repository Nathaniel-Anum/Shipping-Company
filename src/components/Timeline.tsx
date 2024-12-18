import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200" />
      
      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative"
          >
            {/* Content */}
            <div className={`flex items-center justify-${index % 2 === 0 ? 'end' : 'start'} w-1/2 ${index % 2 === 0 ? 'ml-auto pl-8' : 'mr-auto pr-8'}`}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <item.icon className="h-6 w-6 text-blue-600" />
                  <span className="text-2xl font-bold text-blue-600">{item.year}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>

            {/* Circle indicator */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
              <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-blue-100" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}