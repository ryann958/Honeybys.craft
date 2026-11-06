import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { business } from '../../data/business';

const navigationItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Articles', to: '/articles' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink
          className="brand"
          to="/"
          aria-label={`${business.brandName}, halaman Home`}
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            className="brand__logo"
            src="/assets/images/branding/honeybys-craft-logo.png"
            alt=""
            fetchPriority="high"
          />
          <span className="brand__name">{business.brandName}</span>
        </NavLink>

        <button
          className={`menu-toggle${isMenuOpen ? ' menu-toggle--open' : ''}`}
          type="button"
          aria-label={isMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span className="visually-hidden">
            {isMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
          </span>
        </button>

        <nav
          id="primary-navigation"
          className={`primary-navigation${isMenuOpen ? ' primary-navigation--open' : ''}`}
          aria-label="Navigasi utama"
        >
          {navigationItems.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `primary-navigation__link${isActive ? ' primary-navigation__link--active' : ''}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}