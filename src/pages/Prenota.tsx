import { useState, FormEvent } from 'react';
import { Calendar, Mail, Phone, MapPin, Send } from 'lucide-react';

function Prenota() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    data: '',
    orario: '',
    location: '',
    tipoEvento: '',
    pacchetto: '',
    serviziExtra: '',
    note: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Richiesta Prenotazione - ${formData.nome}`);
    const body = encodeURIComponent(`
Nome: ${formData.nome}
Email: ${formData.email}
Telefono: ${formData.telefono}
Data: ${formData.data}
Orario: ${formData.orario}
Location: ${formData.location}
Tipo Evento: ${formData.tipoEvento}
Pacchetto: ${formData.pacchetto}
Servizi Extra: ${formData.serviziExtra}
Note: ${formData.note}
    `);

    window.open(`mailto:luca.gori@gmail.com?subject=${subject}&body=${body}`, '_blank');
    window.open('/faq', '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-32 pb-20" style={{ fontFamily: 'Comfortaa, sans-serif' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Calendar className="w-16 h-16 text-[#ff8600] mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-4">
              Prenota il tuo <span className="text-[#ff8600]">photobooth</span>
            </h1>
            <p className="text-[#dddddd] text-lg">
              Compila il form per richiedere la disponibilità per il tuo evento
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-[#ff8600]/20 rounded-3xl p-8 mb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-[#ff8600]/30 rounded-xl px-4 py-3 focus:outline-none focus:border-[#ff8600] transition-colors"
                    placeholder="Mario Rossi"
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
                    placeholder="mario@esempio.it"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefono" className="block text-sm font-semibold mb-2">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-[#ff8600]/30 rounded-xl px-4 py-3 focus:outline-none focus:border-[#ff8600] transition-colors"
                    placeholder="+39 333 1234567"
                  />
                </div>

                <div>
                  <label htmlFor="data" className="block text-sm font-semibold mb-2">
                    Data Evento *
                  </label>
                  <input
                    type="date"
                    id="data"
                    name="data"
                    required
                    value={formData.data}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-[#ff8600]/30 rounded-xl px-4 py-3 focus:outline-none focus:border-[#ff8600] transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="orario" className="block text-sm font-semibold mb-2">
                    Orario
                  </label>
                  <input
                    type="time"
                    id="orario"
                    name="orario"
                    value={formData.orario}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-[#ff8600]/30 rounded-xl px-4 py-3 focus:outline-none focus:border-[#ff8600] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-semibold mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-[#ff8600]/30 rounded-xl px-4 py-3 focus:outline-none focus:border-[#ff8600] transition-colors"
                    placeholder="Firenze, Villa Toscana"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="tipoEvento" className="block text-sm font-semibold mb-2">
                    Tipo Evento *
                  </label>
                  <select
                    id="tipoEvento"
                    name="tipoEvento"
                    required
                    value={formData.tipoEvento}
                    onChange={handleChange}
                    className="w-full bg-black border border-[#ff8600]/30 rounded-xl px-4 py-3 focus:outline-none focus:border-[#ff8600] transition-colors text-white"
                  >
                    <option value="">Seleziona...</option>
                    <option value="matrimonio">Matrimonio</option>
                    <option value="compleanno">Compleanno</option>
                    <option value="aziendale">Evento Aziendale</option>
                    <option value="festa">Festa Privata</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="pacchetto" className="block text-sm font-semibold mb-2">
                    Pacchetto *
                  </label>
                  <select
                    id="pacchetto"
                    name="pacchetto"
                    required
                    value={formData.pacchetto}
                    onChange={handleChange}
                    className="w-full bg-black border border-[#ff8600]/30 rounded-xl px-4 py-3 focus:outline-none focus:border-[#ff8600] transition-colors text-white"
                  >
                    <option value="">Seleziona...</option>
                    <option value="starter">Starter - 4 ore (€250)</option>
                    <option value="evento">Evento - 8 ore (€400)</option>
                    <option value="full">Full - 12 ore (€500)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="serviziExtra" className="block text-sm font-semibold mb-2">
                  Servizi Extra
                </label>
                <input
                  type="text"
                  id="serviziExtra"
                  name="serviziExtra"
                  value={formData.serviziExtra}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-[#ff8600]/30 rounded-xl px-4 py-3 focus:outline-none focus:border-[#ff8600] transition-colors"
                  placeholder="Es: stampa extra, album fotografico, video..."
                />
              </div>

              <div>
                <label htmlFor="note" className="block text-sm font-semibold mb-2">
                  Note Aggiuntive
                </label>
                <textarea
                  id="note"
                  name="note"
                  rows={4}
                  value={formData.note}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-[#ff8600]/30 rounded-xl px-4 py-3 focus:outline-none focus:border-[#ff8600] transition-colors resize-none"
                  placeholder="Raccontaci di più sul tuo evento..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#ff8600] text-white py-4 rounded-xl font-semibold hover:bg-[#ff9920] transition-all transform hover:scale-105 shadow-lg shadow-[#ff8600]/50 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Invia richiesta di prenotazione
              </button>

              <p className="text-sm text-[#dddddd] text-center">
                Dopo aver premuto, si aprirà la tua app di posta per completare l'invio
              </p>
            </form>
          </div>

          <div className="bg-gradient-to-r from-[#ff8600]/20 to-transparent border border-[#ff8600]/30 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Contatti rapidi</h3>
            <div className="space-y-4">
              <a
                href="https://wa.me/393385637339?text=Ciao%20Luca!%20Vorrei%20informazioni%20su%20Back%20to%20the%20Booth."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#dddddd] hover:text-[#ff8600] transition-colors cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                <span className="hover:underline">WhatsApp: +39 338 5637339</span>
              </a>
              <a
                href="mailto:luca.gori@gmail.com"
                className="flex items-center gap-3 text-[#dddddd] hover:text-[#ff8600] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Email: luca.gori@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-[#dddddd]">
                <MapPin className="w-5 h-5" />
                <span>Operativi a Firenze e in tutta la Toscana</span>
              </div>
            </div>
            <p className="text-center mt-6 text-[#ff8600] font-semibold">
              Rispondiamo entro 24h, anche su WhatsApp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prenota;
