import { MessageCircle, Box } from 'lucide-react';

export default function Hero() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5538998935897?text=Olá! Gostaria de solicitar um orçamento para impressão 3D personalizada.', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-red-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="flex justify-center mb-6">
          <Box className="w-20 h-20 text-purple-400" strokeWidth={1.5} />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Impressão 3D Personalizada
          <span className="block bg-gradient-to-r from-purple-400 to-red-500 bg-clip-text text-transparent mt-2">
            sob Medida
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Criamos chaveiros, placas, topo de bolo e peças exclusivas com rapidez e acabamento profissional.
        </p>

        <button
          onClick={handleWhatsApp}
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/50"
        >
          <MessageCircle className="w-6 h-6" />
          Solicitar Orçamento no WhatsApp
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-red-500 bg-clip-text text-transparent">100%</div>
            <div className="text-gray-400 text-sm mt-1">Personalizado</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-red-500 bg-clip-text text-transparent">24h</div>
            <div className="text-gray-400 text-sm mt-1">Entrega Rápida</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-red-500 bg-clip-text text-transparent">+500</div>
            <div className="text-gray-400 text-sm mt-1">Projetos</div>
          </div>
        </div>
      </div>
    </section>
  );
}
