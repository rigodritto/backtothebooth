import { HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQProps {
  onNavigate: (page: 'prenota') => void;
}

function FAQ({ onNavigate }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Il booth è assistito?',
      answer: 'Sì, possiamo essere presenti per tutta la durata dell\'evento oppure lasciarti la postazione pronta con QR di assistenza in tempo reale. Tu scegli la modalità che preferisci!',
    },
    {
      question: 'Stampate anche sul posto?',
      answer: 'Sì, utilizziamo stampanti termiche professionali per stampe immediate di alta qualità. Indica questa preferenza nel form di prenotazione per includerla nel preventivo personalizzato.',
    },
    {
      question: 'Posso personalizzare la grafica delle foto?',
      answer: 'Certamente! Possiamo inserire loghi, nomi degli sposi, data dell\'evento o tema personalizzato. Ogni layout viene creato su misura per rendere unico il tuo photobooth.',
    },
    {
      question: 'Quanto spazio vi serve?',
      answer: 'Abbiamo bisogno di circa 2x2 metri di spazio e una presa di corrente nelle vicinanze. Possiamo adattarci a diverse configurazioni di location.',
    },
    {
      question: 'Fate anche eventi aziendali?',
      answer: 'Sì, offriamo pacchetti dedicati da 8 o 12 ore per eventi aziendali, fiere, inaugurazioni e team building. Possiamo personalizzare il servizio con branding aziendale.',
    },
    {
      question: 'La data è confermata subito?',
      answer: 'No, prima controlliamo la disponibilità nel nostro calendario e ti rispondiamo entro poche ore con la conferma. Una volta verificata la disponibilità, procediamo con la prenotazione definitiva.',
    },
  ];

  return (
    <div className="pt-32 pb-20" style={{ fontFamily: 'Comfortaa, sans-serif' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="w-16 h-16 text-[#ff8600] mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-4">
              Domande <span className="text-[#ff8600]">frequenti</span>
            </h1>
            <p className="text-[#dddddd] text-lg">
              Tutto quello che devi sapere sul nostro servizio
            </p>
          </div>

          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm border border-[#ff8600]/20 rounded-2xl overflow-hidden hover:border-[#ff8600] transition-all"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-[#ff8600] flex-shrink-0 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5 text-[#dddddd] leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#ff8600]/20 to-transparent border border-[#ff8600]/30 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Non hai trovato la risposta?</h3>
            <p className="text-[#dddddd] mb-6">
              Contattaci direttamente o prenota una consulenza gratuita
            </p>
            <button
              onClick={() => onNavigate('prenota')}
              className="bg-[#ff8600] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#ff9920] transition-all transform hover:scale-105 shadow-lg shadow-[#ff8600]/50"
            >
              Prenota la tua data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
