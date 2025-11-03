import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Prenota from './pages/Prenota';
import FAQ from './pages/FAQ';
import Contatti from './pages/Contatti';

type Page = 'home' | 'prenota' | 'faq' | 'contatti';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'prenota':
        return <Prenota />;
      case 'faq':
        return <FAQ onNavigate={setCurrentPage} />;
      case 'contatti':
        return <Contatti />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
