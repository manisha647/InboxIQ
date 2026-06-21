function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          <div>

            <h3 className="text-2xl font-bold">
              InboxIQ
            </h3>

            <p className="text-gray-400 mt-4">
              AI-powered email writing assistant.
            </p>

          </div>

          <div>

            <h4 className="font-semibold mb-4">
              Product
            </h4>

            <ul className="space-y-3 text-gray-400">

              <li>Features</li>
              <li>Demo</li>
              <li>How It Works</li>

            </ul>

          </div>

          <div>

            <h4 className="font-semibold mb-4">
              Creator
            </h4>

            <ul className="space-y-3 text-gray-400">

              <li>Manisha Kumari</li>

              <li>
                manishakmanu5788@gmail.com
              </li>

            </ul>

          </div>

          <div>

            <h4 className="font-semibold mb-4">
              Digital Heroes
            </h4>

            <a
              href="https://digitalheroesco.com"
              target="_blank"
              rel="noreferrer"
              className="text-violet-400"
            >
              Built for Digital Heroes →
            </a>

          </div>

        </div>

        <div className="border-t border-white/10 mt-10 pt-8 text-center text-gray-500">

          © 2026 InboxIQ. All rights reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;