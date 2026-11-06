import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import ArticleDetailPage from './pages/ArticleDetailPage';
import ArticlesPage from './pages/ArticlesPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';

function NotFoundPage() {
  return (
    <section className="page-placeholder" aria-labelledby="page-title">
      <div className="page-placeholder__content">
        <p className="eyebrow">404 / Halaman tidak ditemukan</p>
        <h1 id="page-title">Halaman ini belum ada.</h1>
        <p className="page-placeholder__description">
          Periksa kembali alamat yang dituju.
        </p>
      </div>
      <div className="page-placeholder__mark" aria-hidden="true">HC</div>
    </section>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="articles" element={<ArticlesPage />} />
        <Route path="articles/:slug" element={<ArticleDetailPage />} />
        <Route path="not-found" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Route>
    </Routes>
  );
}