import { Scissors } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-yellow-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scissors className="w-6 h-6 text-yellow-500" />
              <h3 className="text-xl font-bold text-white">Barbearia do Seu Zé</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tradição e excelência desde 2009. Onde cada cliente recebe o melhor atendimento
              e sai com um visual impecável.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Horário de Funcionamento</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-400">
                <span>Segunda a Sexta:</span>
                <span className="text-white">09:00 - 19:00</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Sábado:</span>
                <span className="text-white">09:00 - 17:00</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Domingo:</span>
                <span className="text-white">Fechado</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-yellow-600/20">
          <p className="text-center text-gray-400 text-sm">
            © 2009–{currentYear} Barbearia do Seu Zé – Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
