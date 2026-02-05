import { Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Chaveiros Personalizados',
    category: 'Chaveiros',
    image: ' \Chaveiros.png'
  },   
  {
    title: 'Placas Decorativas',
    category: 'Placas',
    image: ' \Placas.png'
  },
  {
    title: 'Topo de Bolo',
    category: 'Festas',
    image: ' \Topos.png'
  },
  {
    title: 'Vasos',
    category: 'Decoração',
    image: ' \Vasos.png'
  },
  {
    title: 'Miniaturas',
    category: 'Decoração',
    image: ' \Miniaturas.png'
  },
  {
    title: 'Suportes',
    category: 'Organização',
    image: ' \Suportes.png'
  }
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-teal-600 rounded-full filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-4 h-4 text-blue-300" />
            <span className="text-blue-300 text-sm font-semibold">Galeria de Projetos</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Exemplos do que podemos criar para você com qualidade e precisão
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative h-80 rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl"></div>

              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 rounded-2xl">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-500/80 text-white text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl border border-blue-500/0 group-hover:border-blue-500/50 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
