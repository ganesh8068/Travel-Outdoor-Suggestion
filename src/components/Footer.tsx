import React from 'react';
import { Mountain as Mountains, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div>
            <div className="flex items-center mb-4">
              <Mountains className="h-8 w-8 text-emerald-500" />
              <span className="ml-2 text-xl font-bold">OutdoorExplore</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your ultimate guide to outdoor adventures and nature exploration. 
              Discover beautiful destinations and activities around the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Destinations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Activities</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Activities</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Hiking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Camping</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Rock Climbing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Photography</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Wildlife Viewing</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" />
                <span className="text-gray-400">123 Adventure Way, Outdoor City, OC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-500 mr-2" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-500 mr-2" />
                <span className="text-gray-400">info@outdoorexplore.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 pb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-4">Get the latest outdoor adventure tips and destination recommendations.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">© {new Date().getFullYear()} OutdoorExplore. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-2">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;