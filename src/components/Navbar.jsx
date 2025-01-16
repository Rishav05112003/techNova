import React, { useState } from 'react';
import { Menu, X, Monitor, Cloud, Brain, ChevronRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDarkMode } from './darkModeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const {isDarkMode, toggleDarkMode} = useDarkMode();

  const buttonHandler = () => {
    navigate("/about");
  }

  return (
    <div className=''>
    <nav className="bg-white dark:bg-[#261C2C] shadow-lg  w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Brain className="h-8 w-8 text-blue-600 dark:text-white" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">TechNova</span>
            </Link>
            <input
            onChange={toggleDarkMode}
            type="checkbox"
            className="toggle toggle-info ml-10 mr-2 bg-white"
            defaultChecked
          />
          <p className='text-black dark:text-white'>Mode Change</p>
          </div>

          

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? 'text-indigo-600 dark:text-white'
                    : 'text-gray-600 hover:text-indigo-600'
                } transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
            <button onClick = {buttonHandler} className='btn btn-primary'>Learn More</button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-[#6EACDA]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? 'bg-indigo-50 text-indigo-600 dark:bg-[#3B1C32]'
                    : 'text-gray-600 dark:text-white hover:bg-indigo-50 dark:hover:bg-[#6A1E55] hover:text-indigo-600 dark:hover:text-[#A64D79]'
                } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
        </div>
      )}
    </nav>
    </div>
  );
};

export default Navbar;