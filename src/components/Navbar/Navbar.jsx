import { useState, useRef, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import logo4 from '../../assets/logo4.png';
import underline from '../../assets/nav_underline.svg';
import './Navbar.css';

function Navbar() {
  const [activeMenu, setActiveMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef();
  const navbarRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (!navbarRef.current.contains(event.target)) {
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (menuItem) => {
    setActiveMenu(menuItem);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} ref={navbarRef}>
      <div className="navbar-container">
        <AnchorLink href="#home" className="logo-link">
          <img className="logoimg" src={logo4} alt="Main Logo" />
        </AnchorLink>

        <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle menu">
          <img 
            src={isMenuOpen ? menu_close : menu_open} 
            alt={isMenuOpen ? "Close menu" : "Open menu"} 
            className="menu-icon"
          />
        </button>

        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
          <ul className="nav-list">
            {['home', 'about', 'work', 'contact'].map((item) => (
              <li key={item} className="nav-item">
                <AnchorLink 
                  href={`#${item}`} 
                  className={`nav-link ${activeMenu === item ? 'active' : ''}`}
                  onClick={() => handleMenuClick(item)}
                  offset={item !== 'home' ? 50 : 0}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  {activeMenu === item && <img src={underline} alt="" className="underline" />}
                </AnchorLink>
              </li>
            ))}
          </ul>

          <AnchorLink 
            href="#contact" 
            className="connect-btn-mobile"
            onClick={() => handleMenuClick('contact')}
            offset={50}
          >
            Connect With Me
          </AnchorLink>
        </div>

        <AnchorLink 
          href="#contact" 
          className="connect-btn"
          onClick={() => setActiveMenu('contact')}
          offset={50}
        >
          Connect With Me
        </AnchorLink>
      </div>
    </nav>
  );
}

export default Navbar;