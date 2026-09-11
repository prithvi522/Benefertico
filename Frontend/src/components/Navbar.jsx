import { useState } from 'react';
import { ArrowRight, Mail, Menu, Package, Sparkles, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/BeneferticoLogo.png';

const navItems = [
  { label: 'Products', to: '/products', icon: Package },
  { label: 'About', to: '/about', icon: Sparkles },
  { label: 'Contact', to: '/contact', icon: Mail },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="site-navbar" style={{ zIndex: 9999 }}>
      <div className="site-navbar-shell">
        <div className="site-navbar-pill">
          <Link
            to="/"
            className="site-navbar-brand"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="site-navbar-logo">
              <img
                src={logo}
                alt="Benfertico Nutrition logo"
              />
            </span>
          </Link>

          <div className="site-navbar-links">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className="site-navbar-link"
                >
                  <Icon size={17} strokeWidth={2.2} />
                  {item.label}
                </Link>
              );
            })}
          </div>

          <Link
            to="/contact"
            className="site-navbar-cta"
          >
            Dealer Inquiry
            <ArrowRight size={18} />
          </Link>

          <button
            type="button"
            className="site-navbar-toggle"
            onClick={() => setIsMobileMenuOpen((value) => !value)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="site-mobile-menu">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className="site-mobile-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon size={17} />
                  {item.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="site-mobile-cta"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dealer Inquiry
              <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
