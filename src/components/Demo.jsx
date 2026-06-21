import { useState } from "react";
import { Sparkles, Copy, Check } from "lucide-react";
import { generateReply } from "../services/geminiService";

function Demo() {
  const [email, setEmail] = useState("");

  const [tone, setTone] = useState("Professional");

  const [length, setLength] = useState("Medium");

  const [reply, setReply] = useState("");

  const [loading, setLoading] = useState(false);

  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!email.trim()) return;

    try {
      setLoading(true);

      const result = await generateReply(
        email,
        tone,
        length
      );

      setReply(result.reply);

    } catch (error) {
      console.error(error);
      alert("Failed to generate reply");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(reply);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const tones = [
    "Professional",
    "Friendly",
    "Formal",
    "Casual",
  ];

  const lengths = [
    "Short",
    "Medium",
    "Detailed",
  ];

  return (
    <section
      id="demo"
      className="max-w-6xl mx-auto px-6 py-32"
    >
      <div className="text-center">

        <span className="px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 text-sm">
          TRY IT NOW
        </span>

        <h2 className="mt-8 text-5xl md:text-7xl font-bold">

          See InboxIQ

          <span className="bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
            {" "}in action
          </span>

        </h2>

        <p className="mt-6 text-gray-400 text-lg">
          Paste any email and watch AI craft the perfect reply.
        </p>

      </div>

      <div className="mt-20 bg-[#0B0B0F] border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

        {/* EMAIL */}

        <label className="text-gray-400 text-sm">
          ORIGINAL EMAIL
        </label>

        <textarea
          rows="8"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          placeholder="Paste the email you received..."
          className="mt-3 w-full rounded-2xl bg-black/30 border border-white/10 p-5 outline-none resize-none"
        />

        {/* OPTIONS */}

        <div className="grid md:grid-cols-2 gap-10 mt-10">

          {/* TONE */}

          <div>

            <p className="text-gray-400 text-sm mb-4">
              TONE
            </p>

            <div className="flex flex-wrap gap-3">

              {tones.map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    setTone(item)
                  }
                  className={`px-4 py-2 rounded-full transition-all ${
                    tone === item
                      ? "bg-violet-600"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

          {/* LENGTH */}

          <div>

            <p className="text-gray-400 text-sm mb-4">
              LENGTH
            </p>

            <div className="flex gap-3">

              {lengths.map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    setLength(item)
                  }
                  className={`px-5 py-2 rounded-full transition-all ${
                    length === item
                      ? "bg-violet-600"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

        </div>

        {/* GENERATE */}

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="mt-10 w-full py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 flex items-center justify-center gap-2 font-medium hover:opacity-90 transition-all"
        >

          <Sparkles size={18} />

          {loading
            ? "Generating Reply..."
            : "Generate Reply"}

        </button>

        {/* LOADING */}

        {loading && (

          <div className="mt-8 text-center text-violet-400 animate-pulse">

            Analyzing Email...

            <br />

            Detecting Intent...

            <br />

            Generating Reply...

          </div>

        )}

        {/* OUTPUT */}

        {reply && !loading && (

          <div className="mt-10">

            <div className="flex items-center justify-between">

              <h3 className="text-xl font-semibold">
                Generated Reply
              </h3>

              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition"
              >

                {copied ? (
                  <>
                    <Check size={18} />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    Copy
                  </>
                )}

              </button>

            </div>

            <div className="mt-4 p-6 rounded-2xl bg-black/30 border border-white/10 whitespace-pre-wrap text-gray-300 leading-relaxed">

              {reply}

            </div>

          </div>

        )}

      </div>

    </section>
  );
}

export default Demo;