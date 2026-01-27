import { Printer } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sobre a{' '}
              <span className="bg-gradient-to-r from-purple-400 to-red-500 bg-clip-text text-transparent">
                L & J Personalizados
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Somos uma empresa local especializada em impressão 3D personalizada, dedicada a transformar suas ideias em realidade.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Com foco em qualidade, agilidade e personalização total, criamos peças únicas que atendem perfeitamente às suas necessidades.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Cada projeto é tratado com atenção aos detalhes, garantindo acabamento profissional e resultados que superam expectativas.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-red-600 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-gray-900 rounded-3xl p-12 flex items-center justify-center">
              <Printer className="w-48 h-48 text-purple-400" strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
