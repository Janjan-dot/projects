import { MessageCircle, Sparkles } from 'lucide-react';

export default function CTA() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5538998935897?text=Olá! Tenho uma ideia e gostaria de um orçamento.', '_blank');
  };

  return (
    <section className="py-24 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-red-600/20 border border-purple-500/30 rounded-full px-6 py-2 mb-8">
          <Sparkles className="w-5 h-5 text-purple-400" />
          <span className="text-purple-300 font-semibold">Transforme sua ideia em realidade</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          <span>Tem uma ideia?</span>
          <span className="block bg-gradient-to-r from-purple-400 to-red-500 bg-clip-text text-transparent mt-3">
            A gente imprime.
          </span>
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Entre em contato agora e receba um orçamento personalizado para o seu projeto. Estamos prontos para dar vida às suas ideias!
        </p>

        <button
          onClick={handleWhatsApp}
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700 text-white px-12 py-6 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/50"
        >
          <MessageCircle className="w-7 h-7" />
          Fale Conosco no WhatsApp
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </section>
  );
}
