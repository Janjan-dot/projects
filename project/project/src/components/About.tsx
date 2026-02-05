import { Printer } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 -left-96 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 rounded-full filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              Sobre a{' '}
              <span className="gradient-text">
                L & J Personalizados
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Somos uma empresa local especializada em impressão 3D personalizada, dedicada a transformar suas ideias em realidade com precisão e qualidade.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Com foco em qualidade, agilidade e personalização total, criamos peças únicas que atendem perfeitamente às suas necessidades e expectativas.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              Cada projeto é tratado com atenção aos detalhes, garantindo acabamento profissional e resultados que superam expectativas em todos os aspectos.
            </p>
          </div>

          <div className="relative order-1 md:order-2">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-red-600 rounded-3xl filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-red-600 rounded-3xl transform -rotate-6"></div>
            <div className="relative glass-effect rounded-3xl p-12 flex items-center justify-center backdrop-blur-xl">
              <Printer className="w-40 h-40 text-purple-400 group-hover:scale-110 transition-transform" strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
