import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import WhatsAppFloatingButton from './WhatsAppFloatingButton';

export default function MainLayout() {
  return (
    <>
      <a className="skip-link" href="#main-content">Lewati ke konten</a>
      <Navbar />
      <main id="main-content" className="main-content">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}