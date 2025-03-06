import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#241d2e] to-[#544172] text-white py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 ">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold">DigitalMark</h2>
          <p className="mt-3 text-sm text-gray-200">
            Empowering brands with innovative digital marketing strategies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul>
            {['Home', 'Services', 'Portfolio', 'Contact'].map((link, index) => (
              <li key={index} className="mb-2">
                <a
                  href="#"
                  className="hover:text-gray-300 transition-all duration-300 relative after:block after:h-[2px] after:bg-gray-300 after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Subscribe to Our Newsletter</h3>
          <div className="flex w-full items-center bg-white rounded-full shadow-md overflow-hidden border border-gray-300">
  <input
    type="email"
    placeholder="Enter your email"
    className="w-full px-4 py-2 rounded-full text-gray-900 outline-none focus:ring-2 focus:ring-purple-300 pr-20"
  />
  <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-500 transition-all duration-300">
    Subscribe
  </button>
</div>

        </div>

        {/* Social Media Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            {[FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-2xl hover:scale-110 transition-all duration-300 hover:text-gray-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
