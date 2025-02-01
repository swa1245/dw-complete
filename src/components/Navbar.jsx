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

  // ${
  //   scrolled ? 'bg-black backdrop-blur-sm py-4' : 'bg-transparent py-6'
  // }
  return (
    <nav
      className={`fixed w-screen z-50 transition-all py-4 bg-black overflow-hidden duration-300 `}
    >
      <div className="max-w-7xl  mx-auto ">
        <div className="flex gap-64 items-center justify-between">
          {/* Logo - Left aligned */}
          <div className="flex-shrink-0 relative">
            <Link 
              to="/" 
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <img 
                src="/images/Logo.png"
                alt="DW Innovation Logo" 
                className="h-28 w-24 absolute -top-16 left-20 z-10" 
              />
              <span className="text-xl font-bold text-orange-500 hidden sm:block">
                DW Innovation Pvt.Ltd.
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Right aligned */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-text px-4 py-2.5 rounded-xl font-medium text-base transition-all duration-300 ${
                  isActivePath(item.path)
                    ? 'text-primary-400 bg-primary-400/10'
                    : 'text-dark-100 hover:text-primary-400 hover:bg-primary-400/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {isAdmin ? (
              <>
                <Link
                  to="/admin/dashboard"
                  className="nav-text px-4 py-2.5 rounded-xl font-medium text-base transition-all duration-300 text-dark-100 hover:text-primary-400 hover:bg-primary-400/5"
                >
                 Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="nav-text px-4 py-2.5 rounded-xl font-medium text-base transition-all duration-300 text-dark-100 hover:text-primary-400 hover:bg-primary-400/5"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/admin/login"
                className="nav-text px-4 flex-shrink-0 rounded-xl font-medium text-base transition-all duration-300 text-dark-100 hover:text-primary-400 hover:bg-primary-400/5"
              >
                Admin Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button - Right aligned */}
          <button
            className="lg:hidden p-2 rounded-xl text-dark-100 hover:text-primary-400 hover:bg-primary-400/5"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4">
            <div className="bg-dark-800/90 backdrop-blur-sm rounded-2xl p-3 space-y-1 shadow-xl">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="nav-text block transition-colors duration-300 px-4 py-2.5 rounded-xl text-dark-100 hover:bg-dark-800/50 hover:text-primary-400"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {isAdmin ? (
                <>
                  <Link
                    to="/admin/dashboard"
                    className="nav-text block transition-colors duration-300 px-4 py-2.5 rounded-xl text-dark-100 hover:bg-dark-800/50 hover:text-primary-400"
                    onClick={() => setIsOpen(false)}
                  >
                    Admin Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="nav-text block w-full text-left transition-colors duration-300 px-4 py-2.5 rounded-xl text-dark-100 hover:bg-dark-800/50 hover:text-primary-400"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/admin/login"
                  className="nav-text block transition-colors duration-300 px-4 py-2.5 rounded-xl text-dark-100 hover:bg-dark-800/50 hover:text-primary-400"
                  onClick={() => setIsOpen(false)}
                >
                  Admin Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
