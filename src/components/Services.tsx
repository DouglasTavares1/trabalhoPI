import { Scissors, Sparkles, Droplet, Star } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Scissors,
      title: 'Corte Clássico',
      description: 'Cortes tradicionais e modernos executados com precisão e técnica refinada.',
      price: 'R$ 40,00',
    },
    {
      icon: Sparkles,
      title: 'Barba Completa',
      description: 'Aparar, desenhar e finalizar sua barba com navalha para um acabamento impecável.',
      price: 'R$ 35,00',
    },
    {
      icon: Droplet,
      title: 'Hidratação',
      description: 'Tratamento capilar com produtos premium para revitalizar e fortalecer os fios.',
      price: 'R$ 30,00',
    },
    {
      icon: Star,
      title: 'Combo Premium',
      description: 'Corte + Barba + Hidratação. O pacote completo para o cavalheiro moderno.',
      price: 'R$ 90,00',
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Nossos Serviços</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para cuidar do seu visual com maestria
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-yellow-600/20 rounded-lg p-8 hover:border-yellow-500 transition-all transform hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-500/10"
            >
              <service.icon className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              <div className="pt-4 border-t border-yellow-600/20">
                <p className="text-2xl font-bold text-yellow-500">{service.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            * Valores sujeitos a alteração. Consulte-nos para promoções especiais.
          </p>
        </div>
      </div>
    </section>
  );
}
