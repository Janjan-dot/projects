import React from 'react';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, url: 'https://www.facebook.com/mariaexcursoeseturismo', label: 'Facebook' },
    { icon: Instagram, url: 'https://www.instagram.com/mariaexcursoeseturismo/', label: 'Instagram' },
  ];

  const quickLinks = [
    { path: '/destinos', label: 'Destinos' },
    { path: '/sobre', label: 'Sobre Nós' },
    { path: '/contato', label: 'Contato' },
    { path: '/avaliacoes', label: 'Avaliações' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Informações da Empresa */}
          <div>
            <h3 className="text-xl font-bold mb-4">Maria Excursões e Turismo</h3>
            <p className="text-gray-400 mb-4">
              Criando experiências de viagem inesquecíveis e memórias que duram para sempre.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ path, label }) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform inline-flex duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informações de Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin className="w-5 h-5 text-teal-400 mt-1 mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400 group-hover:text-white transition-colors">
                  Rua das Viagens, 123, São Paulo - SP
                </span>
              </li>
              <li className="flex items-center group">
                <Phone className="w-5 h-5 text-teal-400 mr-3 group-hover:scale-110 transition-transform" />
                <a 
                  href="tel:+551145678900"
                  className="text-gray-400 group-hover:text-white transition-colors"
                >
                  (11) 4567-8900
                </a>
              </li>
              <li className="flex items-center group">
                <Mail className="w-5 h-5 text-teal-400 mr-3 group-hover:scale-110 transition-transform" />
                <a 
                  href="mailto:contato@mariaexcursoes.com.br"
                  className="text-gray-400 group-hover:text-white transition-colors"
                >
                  contato@mariaexcursoes.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Inscreva-se para receber dicas de viagem e ofertas exclusivas.
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200"
              />
              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 hover:scale-105 transform"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} Maria Excursões e Turismo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;