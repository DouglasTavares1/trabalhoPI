import { Scissors } from 'lucide-react';

interface HeaderProps {
  onBookingClick: () => void;
}

export default function Header({ onBookingClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-yellow-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <Scissors className="w-8 h-8 text-yellow-500" />
            <div>
              <h1 className="text-2xl font-bold text-white">Barbearia do Seu Zé</h1>
              <p className="text-xs text-yellow-500">Tradição desde 2009</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-yellow-500 transition-colors">Início</a>
            <a href="#historia" className="text-gray-300 hover:text-yellow-500 transition-colors">História</a>
            <a href="#servicos" className="text-gray-300 hover:text-yellow-500 transition-colors">Serviços</a>
            <a href="#agendamento" className="text-gray-300 hover:text-yellow-500 transition-colors">Agendamento</a>
          </nav>

          <button
            onClick={onBookingClick}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2.5 rounded transition-all transform hover:scale-105"
          >
            Agendar Agora
          </button>
        </div>
      </div>
    </header>
  );
}
