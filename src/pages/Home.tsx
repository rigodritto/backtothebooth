import { Camera, Clock, Share2, Sparkles, CheckCircle2, Palette, Zap, Award, Briefcase, QrCode, FolderOpen } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: 'prenota') => void;
}

function Home({ onNavigate }: HomeProps) {
  const steps = [
    {
      icon: Clock,
      title: 'Scegli la data',
      description: 'Prenota il tuo evento con facilità',
    },
    {
      icon: Palette,
      title: 'Personalizza il layout',
      description: 'Grafica su misura per te',
    },
    {
      icon: Share2,
      title: 'Scatta, stampa e condividi',
      description: 'Ricordi istantanei da portare a casa',
    },
  ];

  const packages = [
    {
      name: 'Starter',
      hours: '4 ore',
      photos: '300 foto',
      price: '€250',
      ideal: 'Ideale per Compleanni, cene, piccoli eventi privati',
      features: ['Stampa immediata', 'Layout personalizzato', 'QR assistenza'],
    },
    {
      name: 'Evento',
      hours: '8 ore',
      photos: '400 foto',
      price: '€400',
      popular: true,
      ideal: 'Ideale per Matrimoni, eventi aziendali medi di mezza giornata',
      features: ['Stampa immediata', 'Layout personalizzato', 'QR assistenza', 'Assistenza dedicata'],
    },
    {
      name: 'Full',
      hours: '12 ore',
      photos: '500 foto',
      price: '€500',
      ideal: 'Ideale per Convegni, eventi aziendali grandi con gran quantità di persone che occupa tutto il giorno',
      features: ['Stampa immediata', 'Layout personalizzato', 'QR assistenza', 'Assistenza dedicata', 'Servizi extra'],
    },
  ];

  const benefits = [
    {
      icon: Palette,
      title: 'Layout personalizzato',
      description: 'Grafica unica per il tuo evento',
    },
    {
      icon: Zap,
      title: 'Stampa immediata',
      description: 'Ricordi tangibili in pochi secondi',
    },
    {
      icon: Camera,
      title: 'Assistenza QR in tempo reale',
      description: 'Sempre disponibili per te',
    },
    {
      icon: Award,
      title: 'Design elegante e professionale',
      description: 'Qualità cinematografica garantita',
    },
    {
      icon: Briefcase,
      title: 'Servizio chiavi in mano',
      description: 'Soluzione completa per il tuo evento',
    },
    {
      icon: QrCode,
      title: 'QR Code assistenza',
      description: 'Supporto istantaneo via WhatsApp',
    },
    {
      icon: FolderOpen,
      title: 'Cartella foto',
      description: 'Scarica tutte le foto al termine',
    },
  ];

  return (
    <div className="pt-20" style={{ fontFamily: 'Comfortaa, sans-serif' }}>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#ff8600]/10 to-transparent" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#ff8600] rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-40 right-20 w-40 h-40 bg-[#ff8600] rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Camera className="w-20 h-20 text-[#ff8600] mx-auto mb-6 animate-bounce" />
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#ff8600] to-white bg-clip-text text-transparent leading-tight">
              Back to the Booth
            </h1>
            <p className="text-2xl md:text-3xl text-[#dddddd] mb-12">
              Il photobooth cinematografico per eventi, matrimoni e feste
            </p>
            <button
              onClick={() => onNavigate('prenota')}
              className="bg-[#ff8600] text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-[#ff9920] transition-all transform hover:scale-105 shadow-lg shadow-[#ff8600]/50"
            >
              Prenota la tua data
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-transparent to-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Come <span className="text-[#ff8600]">funziona</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm border border-[#ff8600]/20 rounded-3xl p-8 text-center hover:border-[#ff8600] transition-all hover:transform hover:scale-105"
              >
                <div className="bg-[#ff8600]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-[#ff8600]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-[#dddddd]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            I nostri <span className="text-[#ff8600]">pacchetti</span>
          </h2>
          <p className="text-[#dddddd] text-center mb-16 text-lg">
            Scegli la soluzione perfetta per il tuo evento
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-black/40 backdrop-blur-sm border rounded-3xl p-8 hover:transform hover:scale-105 transition-all ${
                  pkg.popular
                    ? 'border-[#ff8600] shadow-lg shadow-[#ff8600]/30 relative'
                    : 'border-[#ff8600]/20 hover:border-[#ff8600]'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#ff8600] text-white px-6 py-1 rounded-full text-sm font-semibold">
                    Più scelto
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-[#ff8600] text-5xl font-bold mb-2">{pkg.price}</p>
                  <p className="text-[#dddddd] mb-4">{pkg.hours} / {pkg.photos}</p>
                  <p className="text-sm text-[#ff8600]/80 italic">{pkg.ideal}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[#dddddd]">
                      <CheckCircle2 className="w-5 h-5 text-[#ff8600] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onNavigate('prenota')}
                  className={`w-full py-3 rounded-full font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-[#ff8600] text-white hover:bg-[#ff9920]'
                      : 'bg-white/10 text-white hover:bg-[#ff8600]'
                  }`}
                >
                  Scegli {pkg.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black/30 to-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Perché <span className="text-[#ff8600]">sceglierci</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto flex-wrap">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm border border-[#ff8600]/20 rounded-3xl p-6 text-center hover:border-[#ff8600] transition-all hover:transform hover:scale-105"
              >
                <div className="bg-[#ff8600]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-[#ff8600]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-[#dddddd] text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Scegli il tuo <span className="text-[#ff8600]">servizio</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-black/40 backdrop-blur-sm border border-[#ff8600]/20 rounded-3xl p-8 hover:border-[#ff8600] transition-all hover:transform hover:scale-105">
              <Briefcase className="w-16 h-16 text-[#ff8600] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-center mb-4">Noleggio per Eventi</h3>
              <p className="text-[#dddddd] text-center mb-6">
                Photobooth completo e operatore dedicato per il tuo evento speciale. Servizio chiavi in mano con tutta l'attrezzatura inclusa.
              </p>
              <div className="space-y-2 text-[#dddddd] text-sm mb-6">
                <p>✓ Operatore dedicato</p>
                <p>✓ Stampa immediata</p>
                <p>✓ Layout personalizzato</p>
                <p>✓ Cartella foto finale</p>
              </div>
              <button
                onClick={() => onNavigate('prenota')}
                className="w-full bg-[#ff8600] text-white py-3 rounded-full font-semibold hover:bg-[#ff9920] transition-all"
              >
                Prenota evento
              </button>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-[#ff8600]/20 rounded-3xl p-8 hover:border-[#ff8600] transition-all hover:transform hover:scale-105">
              <Camera className="w-16 h-16 text-[#ff8600] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-center mb-4">Noleggio Privato Attrezzatura</h3>
              <p className="text-[#dddddd] text-center mb-6">
                Noleggia la nostra attrezzatura professionali per gestire in autonomia il photobooth del tuo evento.
              </p>
              <div className="space-y-2 text-[#dddddd] text-sm mb-6">
                <p>✓ Attrezzatura completa</p>
                <p>✓ Software incluso</p>
                <p>✓ QR Code assistenza</p>
                <p>✓ Supporto durante l'evento</p>
              </div>
              <button
                onClick={() => onNavigate('prenota')}
                className="w-full bg-white/10 text-white py-3 rounded-full font-semibold hover:bg-[#ff8600] transition-all"
              >
                Richiedi informazioni
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#ff8600]/20 to-transparent border border-[#ff8600]/30 rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <Sparkles className="w-16 h-16 text-[#ff8600] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto per rendere il tuo evento <span className="text-[#ff8600]">indimenticabile</span>?
            </h2>
            <p className="text-[#dddddd] text-xl mb-8">
              Prenota ora il tuo photobooth cinematografico
            </p>
            <button
              onClick={() => onNavigate('prenota')}
              className="bg-[#ff8600] text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-[#ff9920] transition-all transform hover:scale-105 shadow-lg shadow-[#ff8600]/50"
            >
              Prenota ora
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
