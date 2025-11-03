import { Film, Instagram, Facebook, MessageCircle } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-black border-t border-[#ff8600]/20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 text-2xl font-bold" style={{ fontFamily: 'Comfortaa, sans-serif' }}>
            <Film className="w-8 h-8 text-[#ff8600]" />
            <span className="bg-gradient-to-r from-white to-[#ff8600] bg-clip-text text-transparent">
              Back to the Booth
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#dddddd] hover:text-[#ff8600] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#dddddd] hover:text-[#ff8600] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/393385637339"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#dddddd] hover:text-[#ff8600] transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>

          <p className="text-[#dddddd] text-center text-sm" style={{ fontFamily: 'Comfortaa, sans-serif' }}>
            © 2025 Back to the Booth | Firenze – Tutti i diritti riservati | Design by Luca Gori
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
