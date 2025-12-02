import { Palette } from "lucide-react"
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:flex md:flex-row md:justify-between">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <div className="bg-gray-900 rounded-lg p-6">
              {/* <img src={} alt="Axiom Tech Labs" className="h-16 mb-4" /> */}
              <Link href="/" className="flex items-center gap-2  z-10 px-4 py-4 text-white hover:bg-white/20 hover: rounded-xl transition-colors">
                <Palette className="h-8 w-8 text-white transition-transform group-hover:rotate-12" />
                <h1 className="text-2xl font-bold text-white">
                  Roomagine
                </h1>
              </Link>
              <p className="text-sm text-gray-400">
                Reimagine and make your home a paradise.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-1">
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">
                Connect With Us
              </h3>
              <div className="grid grid-cols-2 gap-4"></div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>
            © {new Date().getFullYear()} Powered By Axiom Tech Labs. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}