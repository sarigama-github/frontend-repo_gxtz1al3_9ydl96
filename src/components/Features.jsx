import { Leaf, Droplet, Shield, Sparkles } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: <Droplet className="h-5 w-5" />,
      title: 'Deep Hydration',
      desc: 'Low-molecular hyaluronic acid draws moisture deep within the skin.'
    },
    {
      icon: <Leaf className="h-5 w-5" />,
      title: 'Clean Ingredients',
      desc: 'Fragrance-free, vegan, cruelty-free — formulated for sensitive skin.'
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: 'Barrier Support',
      desc: 'Ceramides and niacinamide to fortify your skin’s natural barrier.'
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: 'Instant Glow',
      desc: 'Lightweight texture sinks in fast for a soft, healthy radiance.'
    }
  ];

  return (
    <section id="benefits" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/40 to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <div key={idx} className="rounded-2xl border border-gray-200/70 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
