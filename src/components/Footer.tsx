import { MessageCircle, Box } from 'lucide-react';

export default function Footer() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5538998935897', '_blank');
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-purple-500/20 py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600 rounded-full filter blur-3xl opacity-5"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-red-600 rounded-xl blur-lg opacity-30"></div>
              <div className="relative bg-black p-2 rounded-xl border border-purple-500/30">
                <Box className="w-6 h-6 text-purple-400" />
              </div>
            </div>
            <div>
              <div className="text-2xl font-black bg-gradient-to-r from-purple-400 to-red-500 bg-clip-text text-transparent">
                L & J Personalizados
              </div>
              <div className="text-gray-400 text-sm mt-1">
                Impressão 3D sob medida
              </div>
            </div>
          </div>

          <button
            onClick={handleWhatsApp}
            className="group relative flex items-center gap-2 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-red-600 rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-red-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative flex items-center gap-2 group-hover:scale-105 transition-transform">
              <MessageCircle className="w-5 h-5" />
              Fale Conosco
            </div>
          </button>
        </div>

        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <a href="#suporte" className="text-gray-400 hover:text-white transition-colors">Suporte</a>
            <a href="#galeria" className="text-gray-400 hover:text-white transition-colors">Galeria</a>
            <a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre</a>
            <a href="#servicos" className="text-gray-400 hover:text-white transition-colors">Serviços</a>
          </div>
          <div className="text-center text-gray-400 text-sm font-light">
            © {new Date().getFullYear()} L & J Personalizados. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
