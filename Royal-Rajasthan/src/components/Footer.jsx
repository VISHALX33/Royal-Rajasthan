import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-red-700 text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Branding */}
          <div>
            <h2 className="text-xl font-bold mb-2">Royal Rajasthan</h2>
            <p className="text-sm text-red-100 max-w-xs">
              Discover the royal heritage, vibrant culture, and scenic beauty of Rajasthan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/" className="hover:underline hover:text-red-200">Home</Link></li>
              <li><Link to="#" className="hover:underline hover:text-red-200">About</Link></li>
              <li><Link to="#" className="hover:underline hover:text-red-200">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <p className="text-sm">Jaipur, Rajasthan, India</p>
            <p className="text-sm">Email: info@rajtourism.in</p>
            <p className="text-sm">Phone: +91 12345 67890</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-sm text-red-200 border-t border-red-500 pt-4">
          © {new Date().getFullYear()} Royal Rajasthan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
