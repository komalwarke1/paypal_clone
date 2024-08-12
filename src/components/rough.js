import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isBusinessOpen, setIsBusinessOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsProfileMenuOpen(false); 
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <>
      <header  id="stickynavbar" className={`bg-white px-8 py-6 lg:py-10 flex items-center justify-between shadow-md sticky-navbar`}>
  {/* Logo and Navigation */}
  <div ></div>
  <div>
    <Link to="/">
      <img src="icon1.png" alt="PayPal" className="w-40" />
    </Link>
  </div>

  {/* Rest of your navbar code... */}

          
          {/* Desktop Menu */}
          
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            <li
              onMouseEnter={() => setIsBusinessOpen(true)}
              onMouseLeave={() => setIsBusinessOpen(false)}
              className={styles['arrow-container']}
            >
              <Link
                to="/Home"
                className="uppercase font-bold text-sm text-slate-800 hover:underline flex items-center"
                onClick={handleLinkClick}
              >
               <Link to="/dashboard">HOME</Link>
                <svg
                  className={`${styles.arrow} ${isBusinessOpen ? styles['arrow-right'] : styles['arrow-down']} w-4 h-4`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </Link>
              {isBusinessOpen && (
                <ul className="absolute top-full left-0 bg-white text-black shadow-lg mt-2 p-4 rounded border border-gray-300">
                  <li>
                    <Link
                      to="/merchant"
                      onClick={handleLinkClick}
                      className="flex flex-col hover:underline"
                    >
                      All Business Solutions
                      <span>See our range of products</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/accept-payments-online"
                      onClick={handleLinkClick}
                      className="flex flex-col hover:underline"
                    >
                      Accept online payments
                      <span>Get paid on your website</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/email-invoice"
                      onClick={handleLinkClick}
                      className="flex flex-col hover:underline"
                    >
                      Send invoices
                      <span>Create and email online invoices</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/freelancers"
                      onClick={handleLinkClick}
                      className="flex flex-col hover:underline"
                    >
                      PayPal for freelancers
                      <span>Grow your freelance business</span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className={styles['arrow-container']}>
              <Link
                to="/individual"
                onClick={handleLinkClick}
                className="uppercase font-bold text-sm text-slate-800 hover:underline flex items-center"
              >
              <Link to="/financedashboardofsendrequest">SEND AND REQUEST</Link>  
                <svg
                  className={`${styles.arrow} ${isOpen ? styles['arrow-right'] : styles['arrow-down']} w-4 h-4`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </Link>
            </li>
            <li className={styles['arrow-container']}>
              <Link
                to="/partners"
                onClick={handleLinkClick}
                className="uppercase font-bold text-sm text-slate-800 hover:underline flex items-center"
              >
                <Link to="/paymentmethods">PAYMENT METHODS</Link>
                <svg
                  className={`${styles.arrow} ${isOpen ? styles['arrow-right'] : styles['arrow-down']} w-4 h-4`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </Link>
            </li>
            <li className={styles['arrow-container']}>
              <Link
                to="/info"
                onClick={handleLinkClick}
                className="uppercase font-bold text-sm text-slate-800 hover:underline flex items-center"
              >
                <Link to="/transactionlist">ACTIVITY</Link>
                <svg
                  className={`${styles.arrow} ${isOpen ? styles['arrow-right'] : styles['arrow-down']} w-4 h-4`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {/* Other menu items... */}
          </ul>
        </nav>

        {/* Log In / Sign Up */}
        <div className="hidden lg:flex items-center justify-center gap-2">
          <ul className="flex items-center justify-center gap-2">
            <li>
              <Link
                to="login"
                className="border border-gray-800 text-gray-800 font-bold text-sm py-1 px-4 rounded-full hover:opacity-75"
              >
                Log In
              </Link>
            </li>
            <li
              className="flex items-center gap-2 relative"
              onClick={toggleProfileMenu}  // Toggle menu on click
            >
              <Link
                to="sign-up"
                className="bg-gray-800 text-white font-bold text-sm py-1 px-4 rounded-full hover:opacity-75"
              >
                Sign Up
              </Link>
              <FontAwesomeIcon icon={faUserCircle} className="text-gray-800 w-8 h-8 hover:text-gray-600" />
              
              {/* Profile Dropdown */}
              {isProfileMenuOpen && (
                <div className="absolute top-full right-0 bg-white shadow-lg mt-2 p-4 rounded border border-gray-300 w-40">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <Link to="/profile" onClick={handleLinkClick} className="hover:underline">
                      <Link to="/profile">My Profile</Link>
                      </Link>
                    </li>
                    <li>
                      <Link to="/settings" onClick={handleLinkClick} className="hover:underline">
                      <Link to="/helppage">Help</Link>
                      </Link>
                    </li>
                    <li>
                      <Link to="/logout" onClick={handleLinkClick} className="hover:underline">
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 lg:hidden uppercase text-sm text-gray-800 tracking-wide hover:opacity-75"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="lg:hidden bg-white p-4 border-t border-gray-300">
          <ul className="flex flex-col gap-4">
            {/* Mobile menu items */}
          </ul>
        </nav>
      )}
    </>
  );
}
