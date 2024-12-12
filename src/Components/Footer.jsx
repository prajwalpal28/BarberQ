import React from "react";

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-between">
          {/* Logo and App Links */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-xl font-bold text-gray-800">BarberQ</h1>
            <div className="mt-4 flex items-center space-x-4">
              <button className="bg-white border border-gray-300 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition">
                Get the app
              </button>
              <span className="flex space-x-2 items-center">
                <img
                  src="https://img.icons8.com/ios-filled/24/000000/mac-os.png"
                  alt="Apple"
                />
                <img
                  src="https://img.icons8.com/ios-filled/24/000000/google-logo.png"
                  alt="Google"
                />
              </span>
            </div>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-4">
                About Fresha
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>Careers</li>
                <li>Customer Support</li>
                <li>Blog</li>
                <li>Sitemap</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-4">
                For business
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>For partners</li>
                <li>Pricing</li>
                <li>Support</li>
                <li>Status</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Privacy Policy</li>
                <li>Terms of service</li>
                <li>Terms of use</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-4">
                Find us on social
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="flex items-center">
                    <span className="mr-2">➜</span> Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center">
                    <span className="mr-2">➜</span> Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center">
                    <span className="mr-2">➜</span> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center">
                    <span className="mr-2">➜</span> Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 flex flex-wrap justify-between items-center">
          <div className="text-sm text-gray-600">🌐 English</div>
          <div className="text-sm text-gray-600">
            © 2024 BarberQ Pvt Ltd
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
