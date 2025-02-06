import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminName, setAdminName] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    // { name: 'Team', path: '/team' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check admin status whenever location changes
    const token = localStorage.getItem('adminToken');
    const name = localStorage.getItem('adminName');
    if (token && name) {
      setIsAdmin(true);
      setAdminName(name);
    } else {
      setIsAdmin(false);
      setAdminName('');
    }
  }, [location.pathname]);

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminName');
    setIsAdmin(false);
    setAdminName('');
    navigate('/');
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all py-2 sm:py-3 lg:py-2 bg-black ${
        scrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - Left aligned */}
          <div className="flex-shrink-0 relative">
            <Link 
              to="/" 
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <img 
                src="/images/Logo.png"
                alt="DW Innovation Logo" 
                className="h-16 w-12 sm:h-20 sm:w-16 lg:h-24 lg:w-20 object-contain" 
              />
              <span className="text-sm sm:text-base lg:text-lg font-bold text-orange-500 pl-2 sm:pl-4">
                DW Innovation Pvt.Ltd.
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Right aligned */}
          <div className="hidden ml-10 lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm xl:text-base font-medium rounded-lg transition-colors duration-300 ${
                  isActivePath(item.path)
                    ? 'text-orange-500 bg-orange-500/10'
                    : 'text-gray-300 hover:text-orange-500 hover:bg-orange-500/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {isAdmin ? (
              <>
                <Link
                  to="/admin/dashboard"
                  className="px-3 py-2 text-sm xl:text-base font-medium rounded-lg text-gray-300 hover:text-orange-500 hover:bg-orange-500/5 transition-colors duration-300"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-3 py-2 text-sm xl:text-base font-medium rounded-lg text-gray-300 hover:text-orange-500 hover:bg-orange-500/5 transition-colors duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/admin/login"
                className="px-3 py-2 text-sm xl:text-base sm:text-sm font-medium rounded-lg text-gray-300 hover:text-orange-500 hover:bg-orange-500/5 transition-colors duration-300"
              >
                 Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-orange-500 hover:bg-orange-500/5 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-x-0 top-[64px] sm:top-[80px] transition-all duration-300 transform ${
            isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'
          }`}
        >
          <div className="bg-black shadow-lg border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 py-3">
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-300 ${
                      isActivePath(item.path)
                        ? 'text-orange-500 bg-orange-500/10'
                        : 'text-gray-300 hover:text-orange-500 hover:bg-orange-500/5'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                {isAdmin ? (
                  <>
                    <Link
                      to="/admin/dashboard"
                      className="px-4 py-3 text-sm font-medium rounded-lg text-gray-300 hover:text-orange-500 hover:bg-orange-500/5 transition-colors duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="px-4 py-3 text-left text-sm font-medium rounded-lg text-gray-300 hover:text-orange-500 hover:bg-orange-500/5 transition-colors duration-300"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    to="/admin/login"
                    className="px-4 py-3 text-sm font-medium rounded-lg text-gray-300 hover:text-orange-500 hover:bg-orange-500/5 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Admin Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
