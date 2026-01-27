import { MessageCircle, Box } from 'lucide-react';

export default function Footer() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999999999', '_blank');
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Box className="w-8 h-8 text-purple-400" />
            <div>
              <div className="text-xl font-bold text-white">
                L & J Personalizados
              </div>
              <div className="text-gray-400 text-sm">
                Impressão 3D sob medida
              </div>
            </div>
          </div>

          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} L & J Personalizados. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
