import React from 'react';
import { MapPin, Clock, Phone, Mail, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('');
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus(''), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Entre em Contato</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-all duration-200 hover:scale-105 transform flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </button>
              {formStatus && (
                <p className="text-teal-600 text-center font-medium animate-fade-in">{formStatus}</p>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start group">
                  <MapPin className="w-5 h-5 text-teal-600 mt-1 mr-3 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-gray-900 font-medium">Localização</p>
                    <p className="text-gray-600">Praça Antônio Salvo Moreira, 312, Itamarandiba - MG</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <Clock className="w-5 h-5 text-teal-600 mt-1 mr-3 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-gray-900 font-medium">Horário de Funcionamento</p>
                    <p className="text-gray-600">Segunda - Sexta: 08:00 - 17:00</p>
                    <p className="text-gray-600">Sábado: 08:00 - 13:00</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <Phone className="w-5 h-5 text-teal-600 mt-1 mr-3 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-gray-900 font-medium">Telefone</p>
                    <a href="tel:+5538998850203" className="text-gray-600 hover:text-teal-600 transition-colors">
                      (38) 9 9885-0202
                    </a>
                  </div>
                </div>
                <div className="flex items-start group">
                  <Mail className="w-5 h-5 text-teal-600 mt-1 mr-3 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-gray-900 font-medium">E-mail</p>
                    <a 
                      href="mailto:mariaexcursoeseturismo@gmail.com" 
                      className="text-gray-600 hover:text-teal-600 transition-colors"
                    >
                      mariaexcursoeseturismo@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Precisa de Ajuda Rápida?</h3>
              <p className="text-gray-600 mb-4">
                Nossa equipe está pronta para ajudar você com qualquer dúvida sobre nossos pacotes
                ou processo de reserva.
              </p>
              <a
                href="https://wa.me/5538998850202"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-all duration-200 hover:scale-105 transform inline-flex items-center"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Conversar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;