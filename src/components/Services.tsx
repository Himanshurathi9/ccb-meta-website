import { motion } from 'motion/react';
import { Sparkles, GlassWater, Coffee, UserPlus } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: "Curated Ambiance",
    desc: "Light-sculpted spaces designed for the ultimate sensory comfort.",
    color: "bg-amber-500",
  },
  {
    icon: GlassWater,
    title: "Private Dining",
    desc: "Exclusive suites for intimate conversations and elite gatherings.",
    color: "bg-blue-500",
  },
  {
    icon: Coffee,
    title: "Artisanal Cuisine",
    desc: "100+ meticulously crafted dishes by world-class chefs.",
    color: "bg-ccb-rich-red",
  },
  {
    icon: UserPlus,
    title: "The Elite Circle",
    desc: "Membership access to secret roasts and private brand events.",
    color: "bg-purple-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.4em] text-ccb-rich-red"
          >
            Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 font-display text-4xl font-extrabold text-white md:text-5xl"
          >
            Engineered for <span className="text-gradient-premium">Excellence.</span>
          </motion.h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative h-full rounded-[2.5rem] glass-morphism p-10 text-center transition-all duration-500"
            >
              <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/5 transition-all group-hover:bg-ccb-rich-red group-hover:glow-red-premium">
                <service.icon size={36} className="text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/50">
                {service.desc}
              </p>
              
              {/* Decorative line */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 h-1 w-8 rounded-full bg-ccb-rich-red opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
