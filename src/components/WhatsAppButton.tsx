import { MessageCircle } from 'lucide-react';

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/393385637339?text=Ciao%20Luca!%20Vorrei%20informazioni%20su%20Back%20to%20the%20Booth."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-[#ff8600] text-white p-4 rounded-full shadow-lg hover:bg-[#ff9920] transition-all hover:scale-110 z-50"
      aria-label="Contattaci su WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}

export default WhatsAppButton;
