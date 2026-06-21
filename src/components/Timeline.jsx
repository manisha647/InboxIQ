import {
  ClipboardPaste,
  SlidersHorizontal,
  FileText,
  Sparkles,
  Send,
} from "lucide-react";

import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

function Timeline() {
  const { scrollYProgress } = useScroll();

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const steps = [
    {
      icon: <ClipboardPaste size={24} />,
      title: "Paste Email",
      desc: "Paste the email you received into InboxIQ.",
    },
    {
      icon: <SlidersHorizontal size={24} />,
      title: "Choose Tone",
      desc: "Select Professional, Friendly, Formal or Custom tone.",
    },
    {
      icon: <FileText size={24} />,
      title: "Choose Length",
      desc: "Choose between Short, Medium or Detailed response.",
    },
    {
      icon: <Sparkles size={24} />,
      title: "Generate Reply",
      desc: "AI instantly creates a polished, context-aware response.",
    },
    {
      icon: <Send size={24} />,
      title: "Copy & Send",
      desc: "Copy your generated email and send confidently.",
    },
  ];

  return (
    <section
      id="timeline"
      className="max-w-6xl mx-auto px-6 py-40"
    >
      {/* Heading */}

      <div className="text-center mb-32">

        <span className="px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 text-sm">
          HOW IT WORKS
        </span>

        <h2 className="mt-8 text-5xl md:text-7xl font-bold">

          From inbox to

          <br />

          <span className="bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
            perfect reply
          </span>

        </h2>

        <p className="mt-6 text-gray-400 text-lg">
          Generate professional emails in under 30 seconds.
        </p>

      </div>

      {/* Timeline */}

      <div className="relative">

        {/* Static Line */}

        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[2px] bg-white/10" />

        {/* Animated Line */}

        <motion.div
          style={{ scaleY }}
          className="origin-top absolute left-1/2 top-0 -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-violet-500 via-blue-500 to-cyan-400"
        />

        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -120 : 120,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.8,
            }}
            className={`relative flex items-center mb-32 ${
              index % 2 === 0
                ? "justify-start"
                : "justify-end"
            }`}
          >

            {/* Content */}

            <div
              className={`w-[42%] ${
                index % 2 === 0
                  ? "text-right pr-20"
                  : "text-left pl-20"
              }`}
            >

              <p className="text-violet-400 text-sm tracking-[0.2em] mb-3">
                STEP {index + 1}
              </p>

              <h3 className="text-3xl md:text-4xl font-semibold">
                {step.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-relaxed">
                {step.desc}
              </p>

            </div>

            {/* Timeline Node */}

            <motion.div
              whileInView={{
                scale: [0.5, 1.25, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 0.8,
              }}
              className="absolute left-1/2 -translate-x-1/2 z-20"
            >

              <div className="w-16 h-16 rounded-full bg-[#0B0B0F] border border-violet-500/30 flex items-center justify-center text-violet-400 shadow-[0_0_40px_rgba(139,92,246,0.35)]">

                {step.icon}

              </div>

            </motion.div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Timeline;