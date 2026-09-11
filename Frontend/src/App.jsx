import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/contactPage';
import AboutUsPage from './pages/AboutUs';

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');

      requestAnimationFrame(() => {
        const target = document.getElementById(sectionId);

        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });

      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollManager />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutUsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
