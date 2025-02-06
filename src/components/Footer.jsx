import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Careers', path: '/careers' },
    ],
    resources: [
      { name: 'Blog', path: '/blog' },
      // { name: 'FAQs', path: '/faqs' },
      // { name: 'Testimonials', path: '/Team' },
      { name: 'Contact', path: '/contact' },
    ],
    social: [
      { path: 'https://www.linkedin.com/company/dw-innovation-pvt-ltd', icon: FaLinkedin },
      // { path: 'https://twitter.com', icon: FaTwitter },
      // { path: 'https://facebook.com', icon: FaFacebook },
      { path: 'https://www.instagram.com/dw_innovation_?igsh=MXVwcWxvMmZhb2IwNA==', icon: FaInstagram },
    ],
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 font-sans">DW Innovation Pvt.Ltd.</h3>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Transforming ideas into innovative solutions through cutting-edge technology.
            </p>
          </div>

          {/* Company Links */}
          <div className='sm:ml-4 lg:ml-20 text-center sm:text-left'>
            <h4 className="text-lg sm:text-xl mb-4 sm:mb-6 hover:text-orange-500 transition-colors duration-300 font-sans">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm sm:text-base">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className='sm:ml-4 lg:ml-14 text-center sm:text-left'>
            <h4 className="text-lg sm:text-xl mb-4 sm:mb-6 hover:text-orange-500 transition-colors duration-300 font-sans">Resources</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm sm:text-base">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-semibold mb-4 hover:text-orange-500 transition-colors duration-300 font-sans">Contact Us</h4>
            <div className="space-y-2 text-gray-300 text-sm sm:text-base">
              <p>Email: info@dwi4u.com</p>
              <p>Phone: +91 9028954278</p>
              <p>Address: Pune, Maharashtra</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="mb-4 sm:mb-0">
              <p className="text-gray-300 text-sm sm:text-base">&copy; {currentYear} DW Innovation. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              {footerLinks.social.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
