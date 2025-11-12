import { Scissors } from 'lucide-react';

interface HeroProps {
  onBookingClick: () => void;
}

export default function Hero({ onBookingClick }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex justify-center">
          <Scissors className="w-20 h-20 text-yellow-500 animate-pulse" />
        </div>

        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Barbearia do <span className="text-yellow-500">Seu Zé</span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          Onde tradição e estilo se encontram
        </p>

        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          Desde 2009 proporcionando a melhor experiência em cortes clássicos e modernos,
          com o atendimento de excelência que você merece.
        </p>

        <button
          onClick={onBookingClick}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-10 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-yellow-500/50"
        >
          Agende seu Horário
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-yellow-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
