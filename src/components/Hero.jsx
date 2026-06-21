import { ArrowRight, Play } from "lucide-react";

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-8 pt-40">

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Side */}

        <div>

          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/5 mb-8">

            <div className="w-2 h-2 bg-green-400 rounded-full"></div>

            <span className="text-gray-300 text-sm">
              AI-Powered Email Assistant
            </span>

          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-none">

            Write Better

            <br />

            Emails.

            <br />

            <span className="bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">

              Instantly.

            </span>

          </h1>

          <p className="mt-8 text-xl text-gray-400 max-w-xl">

            Generate professional, context-aware email replies
            with AI in seconds. Stop staring at blank screens.

          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
  href="#demo"
  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold hover:scale-105 transition-all"
>
  Generate Reply
</a>
          </div>

        </div>

        {/* Right Side */}

        <div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

            <div className="space-y-6">

              <div className="flex gap-2">

                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>

              </div>

              <div>

                <p className="text-gray-500 text-sm">Subject</p>

                <p className="text-lg font-medium">
                  Interview Invitation
                </p>

              </div>

              <div className="border-t border-white/10 pt-6">

                <div className="flex gap-3 mb-5">

                  <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-sm">
                    AI Generated
                  </span>

                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm">
                    Professional Tone
                  </span>

                </div>

                <p className="text-gray-300 leading-relaxed">

                  Hi Sarah,

                  <br />
                  <br />

                  Thank you for reaching out regarding the interview
                  opportunity.

                  <br />
                  <br />

                  I would be delighted to schedule a discussion and
                  learn more about the role.

                  <br />
                  <br />

                  Please let me know a suitable time.

                  <br />
                  <br />

                  Best regards

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;