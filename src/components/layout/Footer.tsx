import { Link } from 'react-router-dom';
import { business } from '../../data/business';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Articles', to: '/articles' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <Link className="site-footer__brand" to="/">{business.brandName}</Link>
        <nav className="site-footer__navigation" aria-label="Navigasi footer">
          {footerLinks.map(({ label, to }) => (
            <Link key={to} to={to}>{label}</Link>
          ))}
        </nav>
        <p className="site-footer__copyright">
          &copy; {new Date().getFullYear()} {business.brandName}
        </p>
      </div>
      <div className="site-footer__credit">
        <a href="https://temanweb.my.id" target="_blank" rel="noopener noreferrer">
          Designed &amp; Developed by Temanweb
        </a>
      </div>
    </footer>
  );
}