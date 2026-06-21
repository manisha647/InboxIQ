import { useState } from "react";
import {
  Brain,
  Mail,
  Type,
  BarChart3,
  Copy,
  LayoutGrid,
} from "lucide-react";

function Features() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const features = [
    {
      icon: <Brain size={32} />,
      title: "Smart Tone Detection",
      description:
        "AI analyzes context and intent to match the perfect tone.",
      className: "md:col-span-2",
    },

    {
      icon: <Mail size={32} />,
      title: "AI Replies",
      description:
        "Generate contextual responses instantly.",
    },

    {
      icon: <Type size={32} />,
      title: "Subject Generator",
      description:
        "Craft attention-grabbing subject lines.",
    },

    {
      icon: <BarChart3 size={32} />,
      title: "Quality Score",
      description:
        "Measure clarity and professionalism.",
    },

    {
      icon: <Copy size={32} />,
      title: "One Click Copy",
      description:
        "Copy polished responses instantly.",
    },

    {
      icon: <LayoutGrid size={32} />,
      title: "Email Templates",
      description:
        "Ready-to-use templates for every scenario.",
      className: "md:col-span-2",
    },
  ];

  return (
    <section
      id="features"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <div className="text-center">

        <span className="px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 text-sm">
          FEATURES
        </span>

        <h2 className="mt-8 text-5xl md:text-7xl font-bold">

          Everything you need to

          <br />

          <span className="bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
            write with confidence
          </span>

        </h2>

        <p className="mt-6 text-gray-400 text-lg">
          Powerful AI tools designed to make every email unforgettable.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">

        {features.map((feature, index) => (
          <div
            key={index}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();

              setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
              });
            }}
            className={`group relative overflow-hidden
            bg-[#0B0B0F]
            border border-white/[0.06]
            rounded-3xl
            p-8
            transition-all duration-300
            hover:border-violet-500/20
            hover:-translate-y-1
            ${feature.className || ""}`}
          >

            {/* Cursor Glow */}

            <div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `radial-gradient(
                  400px circle at ${mousePos.x}px ${mousePos.y}px,
                  rgba(99,102,241,0.18),
                  transparent 40%
                )`,
              }}
            />

            {/* Content */}

            <div className="relative z-10">

              <div className="w-16 h-16 rounded-2xl bg-[#13131A] flex items-center justify-center text-violet-400">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-relaxed">
                {feature.description}
              </p>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Features;