import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Soft radial background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-100 via-white to-white" />

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient veil to increase readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 py-24 md:py-32">
        <div className="flex flex-col items-start">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/70 px-3 py-1 text-xs font-medium text-purple-600 shadow-sm"
          >
            New • Skincare
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900"
          >
            Elevate your daily ritual
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 max-w-xl text-base sm:text-lg text-gray-700"
          >
            A minimalist, dermatologist-approved formula for hydrated, luminous skin. Clean ingredients, beautiful results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#shop" className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium shadow-sm hover:shadow-md transition-all">
              Shop the Serum
            </a>
            <a href="#ingredients" className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur border border-gray-200 px-6 py-3 text-sm font-medium text-gray-900 hover:bg-white">
              See Ingredients
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex items-center gap-5 text-sm text-gray-600"
          >
            <div className="flex -space-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i + 12}`} alt="" className="h-8 w-8 rounded-full border-2 border-white shadow" />
              ))}
            </div>
            <span>Trusted by 5,000+ skincare lovers</span>
          </motion.div>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute -inset-10 rounded-3xl bg-gradient-to-br from-purple-200/40 to-blue-200/30 blur-3xl" />
          <div className="relative aspect-[4/5] w-full rounded-3xl bg-white/60 border border-white/60 shadow-xl backdrop-blur-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQcm9kdWN0fGVufDB8MHx8fDE3NjMyMDg5NjB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Product" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
