"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold tracking-wide">YourBrand</h2>
            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              We build modern, high-performance digital experiences with
              cutting-edge technology and stunning design.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <Link href="#" className="hover:text-gray-300 transition">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-gray-300 transition">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-gray-300 transition">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Brand Strategy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <p className="flex items-center gap-2">
                <MapPin size={16} /> Chennai, India
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} /> +91 98765 43210
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} /> info@yourbrand.com
              </p>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm mb-3">Subscribe to our newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full px-4 py-2 text-sm rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-white"
                />
                <button className="bg-white text-black px-4 py-2 text-sm rounded-r-lg hover:bg-gray-200 transition">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
