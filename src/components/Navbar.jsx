import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

import {
  auth,
  provider,
  signInWithPopup,
  signOut,
} from "../firebase";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-2">
      <div className="max-w-7xl mx-auto">

        <nav className="flex items-center justify-between px-6 py-2 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">

          {/* Logo */}
          <div className="flex items-center gap-4">

            <img
              src={logo}
              alt="InboxIQ Logo"
              className="w-24 h-24 object-contain"
            />

            <h1 className="text-3xl font-bold text-white">
              Inbox<span className="text-blue-500">IQ</span>
            </h1>

          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            <a
              href="#features"
              className="text-gray-300 hover:text-white transition"
            >
              Features
            </a>

            <a
              href="#demo"
              className="text-gray-300 hover:text-white transition"
            >
              Demo
            </a>

            <a
              href="#timeline"
              className="text-gray-300 hover:text-white transition"
            >
              How It Works
            </a>

          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">

            {user ? (
              <div className="flex items-center gap-3">

                <img
                  src={user.photoURL}
                  alt="profile"
                  className="w-10 h-10 rounded-full border border-white/20"
                />

                <span className="text-white text-sm font-medium">
                  {user.displayName}
                </span>

                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-xl border border-white/10 text-white hover:bg-white/5 transition"
                >
                  Logout
                </button>

              </div>
            ) : (
              <button
                onClick={handleGoogleLogin}
                className="px-6 py-3 rounded-xl border border-violet-500/20 text-violet-300 hover:bg-violet-500/10 transition-all"
              >
                Sign In
              </button>
            )}

              <a
              href="#demo"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium hover:scale-105 transition-all"
            >
             Generate Reply
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </nav>

        {/* Mobile Menu */}

        {isOpen && (
          <div className="md:hidden mt-3 rounded-3xl border border-white/10 bg-black/80 backdrop-blur-xl p-6">

            <div className="flex flex-col gap-5">

              <a
                href="#features"
                className="text-gray-300 hover:text-white"
              >
                Features
              </a>

              <a
                href="#demo"
                className="text-gray-300 hover:text-white"
              >
                Demo
              </a>

              <a
                href="#timeline"
                className="text-gray-300 hover:text-white"
              >
                How It Works
              </a>

              {!user ? (
                <button
                  onClick={handleGoogleLogin}
                  className="px-6 py-3 rounded-xl border border-violet-500/20 text-violet-300"
                >
                  Sign In
                </button>
              ) : (
                <button
                  onClick={handleLogout}
                  className="px-6 py-3 rounded-xl border border-white/10 text-white"
                >
                  Logout
                </button>
              )}

              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white">
                Generate Reply
              </button>

            </div>

          </div>
        )}

      </div>
    </header>
  );
}

export default Navbar;