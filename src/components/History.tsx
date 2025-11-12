import { Clock, Award, Users } from 'lucide-react';

export default function History() {
  return (
    <section id="historia" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Nossa História</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-black/50 rounded-lg border border-yellow-600/20 hover:border-yellow-500/50 transition-colors">
            <Clock className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">16 Anos</h3>
            <p className="text-gray-400">de tradição e excelência</p>
          </div>

          <div className="text-center p-6 bg-black/50 rounded-lg border border-yellow-600/20 hover:border-yellow-500/50 transition-colors">
            <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Qualidade</h3>
            <p className="text-gray-400">atendimento de excelência</p>
          </div>

          <div className="text-center p-6 bg-black/50 rounded-lg border border-yellow-600/20 hover:border-yellow-500/50 transition-colors">
            <Users className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Confiança</h3>
            <p className="text-gray-400">milhares de clientes satisfeitos</p>
          </div>
        </div>

        <div className="bg-black/30 border border-yellow-600/20 rounded-lg p-8 md:p-12">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6 text-justify">
              A Barbearia do Seu Zé foi fundada em 2009, com o objetivo de oferecer um atendimento
              de excelência, aliado à tradição e ao estilo clássico da barbearia raiz. Desde sua
              inauguração, a barbearia vem conquistando clientes pela qualidade dos serviços, pelo
              ambiente acolhedor e pela atenção aos detalhes.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed text-justify">
              Hoje, em 2025, a Barbearia do Seu Zé mantém seu compromisso com o cuidado, a elegância
              e a inovação, unindo tradição e tecnologia para facilitar o agendamento dos clientes de
              forma online e prática.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-yellow-600/20">
            <p className="text-yellow-500 text-center font-semibold text-lg">
              "Onde cada corte conta uma história e cada cliente é parte da nossa tradição."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
