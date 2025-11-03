import { useState, FormEvent } from 'react';
import { MapPin, Mail, MessageCircle, Send } from 'lucide-react';

function Contatti() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    messaggio: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Messaggio da ${formData.nome}`);
    const body = encodeURIComponent(`
Nome: ${formData.nome}
Email: ${formData.email}

Messaggio:
${formData.messaggio}
    `);

    window.open(`mailto:luca.gori@gmail.com?subject=${subject}&body=${body}`, '_blank');

    setFormData({
      nome: '',
      email: '',
      messaggio: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-32 pb-20" style={{ fontFamily: 'Comfortaa, sans-serif' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <MessageCircle className="w-16 h-16 text-[#ff8600] mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-[#ff8600]">Contattaci</span>
            </h1>
            <p className="text-[#dddddd] text-lg">
              Scrivici per informazioni, preventivi o collaborazioni
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-black/40 backdrop-blur-sm border border-[#ff8600]/20 rounded-3xl p-8 hover:border-[#ff8600] transition-all">
              <h2 className="text-2xl font-bold mb-6">Informazioni di contatto</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#ff8600]/10 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-[#ff8600]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Zona operativa</h3>
                    <p className="text-[#dddddd]">Firenze, Toscana</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#ff8600]/10 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-[#ff8600]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:luca.gori@gmail.com"
                      className="text-[#dddddd] hover:text-[#ff8600] transition-colors"
                    >
                      luca.gori@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#ff8600]/10 p-3 rounded-xl">
                    <MessageCircle className="w-6 h-6 text-[#ff8600]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/393385637339"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#dddddd] hover:text-[#ff8600] transition-colors"
                    >
                      +39 338 5637339
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[#ff8600]/20">
                <a
                  href="https://wa.me/393385637339?text=Ciao%20Luca!%20Vorrei%20informazioni%20su%20Back%20to%20the%20Booth."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#ff8600] text-white py-3 rounded-xl font-semibold hover:bg-[#ff9920] transition-all text-center"
                >
                  Scrivici su WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-[#ff8600]/20 rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-6">Inviaci un messaggio</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-[#ff8600]/30 rounded-xl px-4 py-3 focus:outline-none focus:border-[#ff8600] transition-colors"
                    placeholder="Il tuo nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-[#ff8600]/30 rounded-xl px-4 py-3 focus:outline-none focus:border-[#ff8600] transition-colors"
                    placeholder="tua@email.it"
                  />
                </div>

                <div>
                  <label htmlFor="messaggio" className="block text-sm font-semibold mb-2">
                    Messaggio *
                  </label>
                  <textarea
                    id="messaggio"
                    name="messaggio"
                    required
                    rows={5}
                    value={formData.messaggio}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-[#ff8600]/30 rounded-xl px-4 py-3 focus:outline-none focus:border-[#ff8600] transition-colors resize-none"
                    placeholder="Come possiamo aiutarti?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ff8600] text-white py-3 rounded-xl font-semibold hover:bg-[#ff9920] transition-all transform hover:scale-105 shadow-lg shadow-[#ff8600]/50 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Invia messaggio
                </button>
              </form>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#ff8600]/20 to-transparent border border-[#ff8600]/30 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Tempi di risposta</h3>
            <p className="text-[#dddddd] text-lg">
              Rispondiamo entro 24 ore a tutte le richieste, anche su WhatsApp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contatti;
