import { Film } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: 'home' | 'prenota' | 'faq' | 'contatti') => void;
}

function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const links = [
    { name: 'Home', page: 'home' as const },
    { name: 'Prenota', page: 'prenota' as const },
    { name: 'FAQ', page: 'faq' as const },
    { name: 'Contatti', page: 'contatti' as const },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/95 backdrop-blur-sm border-b border-[#ff8600]/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-xl font-bold transition-colors hover:text-[#ff8600]"
            style={{ fontFamily: 'Comfortaa, sans-serif' }}
          >
            <Film className="w-8 h-8 text-[#ff8600]" />
            <span className="bg-gradient-to-r from-white to-[#ff8600] bg-clip-text text-transparent">
              Back to the Booth
            </span>
          </button>

          <div className="flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className={`font-medium transition-colors ${
                  currentPage === link.page
                    ? 'text-[#ff8600]'
                    : 'text-white hover:text-[#ff8600]'
                }`}
                style={{ fontFamily: 'Comfortaa, sans-serif' }}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
