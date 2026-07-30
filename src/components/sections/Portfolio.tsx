import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "SatataFashion.com",
    description: "A modern e-commerce fashion website with product showcases and online shopping capabilities.",
    tags: ["React", "E-commerce", "Fashion"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    link: "https://satatafashion.com/"
  },
  {
    title: "Aurelia Restaurant",
    description: "An elegant dining experience website with menu showcases and reservation capabilities.",
    tags: ["Vue.js", "Animations", "Design"],
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
    link: "https://aurelia1.netlify.app/"
  },
  {
    title: "Dentist Three Coral",
    description: "Modern dental practice website with online booking and patient portal.",
    tags: ["React", "Tailwind", "Booking"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
    link: "https://dentist-three-coral.vercel.app/"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            Featured <span className="text-gray-900">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Where Vision Meets Execution. Explore our latest digital masterpieces.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm aspect-[4/3] cursor-pointer block hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex flex-wrap gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-white/20 text-white backdrop-blur-sm border border-white/30">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-2 font-heading flex items-center justify-between text-white">
                  {project.title}
                  <ExternalLink size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </h3>

                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-white border border-gray-200 text-gray-900 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 inline-flex items-center gap-2 shadow-sm">
            View All Projects
            <ExternalLink size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
