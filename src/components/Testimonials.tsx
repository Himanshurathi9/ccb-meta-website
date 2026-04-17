import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Entrepreneur",
    content: "Perfect place for evening chai and work. The ambiance really helps me focus, and the fusion snacks are just brilliant.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    name: "Riya Sharma",
    role: "Digital Creative",
    content: "Feels like a cozy corner in the city. Truly an escape from the hustle. Their signature roasts are literal magic!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    name: "Karan Patel",
    role: "Food Blogger",
    content: "Minimal, aesthetic, and deep flavors. CCB doesn't just serve food; they serve an experience that stays with you.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-transparent to-amber-900/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-amber-500/5 blur-[120px] -z-10" />
      
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.4em] text-amber-500"
          >
            Indian Style
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 font-display text-4xl font-extrabold text-white md:text-5xl"
          >
            The <span className="text-amber-500">Fine Dining</span> Feedback
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-morphism relative rounded-[2.5rem] p-10 flex flex-col justify-between border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500 group"
            >
              <Quote className="absolute top-10 right-10 text-amber-500/10 group-hover:text-amber-500/20 transition-colors" size={48} />
              
              <p className="text-lg text-white/80 leading-relaxed italic mb-8 relative z-10 font-medium">
                "{t.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full border-2 border-amber-500/30 overflow-hidden p-0.5 shadow-xl group-hover:border-amber-500 transition-colors">
                  <img src={t.avatar} alt={t.name} className="h-full w-full rounded-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all" />
                </div>
                <div>
                  <h4 className="font-bold text-white leading-none">{t.name}</h4>
                  <span className="text-xs text-white/40 uppercase tracking-widest mt-1 inline-block">
                    {t.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
