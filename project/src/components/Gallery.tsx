import { Box } from 'lucide-react';

const projects = [
  {
    title: 'Chaveiros Personalizados',
    category: 'Chaveiros',
    color: 'from-purple-500 to-purple-700'
  },
  {
    title: 'Placas Decorativas',
    category: 'Placas',
    color: 'from-red-500 to-red-700'
  },
  {
    title: 'Topo de Bolo',
    category: 'Festas',
    color: 'from-purple-600 to-red-600'
  },
  {
    title: 'Peças Exclusivas',
    category: 'Sob Medida',
    color: 'from-red-600 to-purple-600'
  },
  {
    title: 'Miniaturas',
    category: 'Decoração',
    color: 'from-purple-700 to-red-500'
  },
  {
    title: 'Protótipos',
    category: 'Profissional',
    color: 'from-red-700 to-purple-500'
  }
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Exemplos do que podemos criar para você
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-purple-500"
            >
              <div className={`aspect-square bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full filter blur-2xl"></div>
                  <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full filter blur-2xl"></div>
                </div>
                <Box className="w-24 h-24 text-white relative z-10" strokeWidth={1.5} />
              </div>

              <div className="p-6">
                <div className="text-sm text-purple-400 font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
