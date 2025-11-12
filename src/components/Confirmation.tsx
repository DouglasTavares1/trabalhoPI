import { CheckCircle, Calendar, Clock, User, Phone, Scissors } from 'lucide-react';
import type { Appointment } from '../types/appointment';

interface ConfirmationProps {
  appointment: Appointment;
  onNewBooking: () => void;
}

export default function Confirmation({ appointment, onNewBooking }: ConfirmationProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-2xl w-full">
        <div className="bg-gray-900 border border-yellow-600/30 rounded-lg p-8 md:p-12 text-center">
          <div className="mb-6 flex justify-center">
            <div className="bg-green-500/10 rounded-full p-4 border-4 border-green-500">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Agendamento Confirmado!
          </h2>

          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>

          <p className="text-lg text-gray-300 mb-10">
            Seu agendamento foi concluído com sucesso para o dia{' '}
            <span className="font-bold text-yellow-500">{formatDate(appointment.appointment_date)}</span>
            {' '}às{' '}
            <span className="font-bold text-yellow-500">{appointment.appointment_time}</span>.
          </p>

          <div className="bg-black/50 border border-yellow-600/20 rounded-lg p-6 mb-8 text-left">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Detalhes do Agendamento</h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <User className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Nome</p>
                  <p className="text-white font-semibold">{appointment.client_name}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Telefone</p>
                  <p className="text-white font-semibold">{appointment.client_phone}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Scissors className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Serviço</p>
                  <p className="text-white font-semibold">{appointment.service}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Calendar className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Data</p>
                  <p className="text-white font-semibold">{formatDate(appointment.appointment_date)}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Horário</p>
                  <p className="text-white font-semibold">{appointment.appointment_time}</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-2xl font-bold text-yellow-500 mb-8">
            Agradecemos por escolher a Barbearia do Seu Zé!
          </p>

          <div className="space-y-4">
            <p className="text-gray-400 text-sm">
              Guarde este horário! Caso precise reagendar, entre em contato conosco.
            </p>

            <button
              onClick={onNewBooking}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded transition-all transform hover:scale-105"
            >
              Fazer Novo Agendamento
            </button>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Dúvidas? Entre em contato pelo telefone (00) 0000-0000
          </p>
        </div>
      </div>
    </section>
  );
}
