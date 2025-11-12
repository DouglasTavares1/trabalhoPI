import { useState } from 'react';
import { Calendar, Clock, User, Phone, Scissors } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Appointment } from '../types/appointment';

interface BookingFormProps {
  onSuccess: (appointment: Appointment) => void;
}

export default function BookingForm({ onSuccess }: BookingFormProps) {
  const [formData, setFormData] = useState({
    client_name: '',
    client_phone: '',
    service: '',
    appointment_date: '',
    appointment_time: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const services = [
    'Corte Clássico',
    'Barba Completa',
    'Hidratação',
    'Combo Premium',
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!formData.client_name || !formData.client_phone || !formData.service || !formData.appointment_date || !formData.appointment_time) {
      setError('Por favor, preencha todos os campos.');
      setLoading(false);
      return;
    }

    try {
      const { data, error: supabaseError } = await supabase
        .from('appointments')
        .insert([formData])
        .select()
        .single();

      if (supabaseError) throw supabaseError;

      if (data) {
        onSuccess(data);
      }
    } catch (err) {
      console.error('Erro ao criar agendamento:', err);
      setError('Erro ao criar agendamento. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="agendamento" className="py-20 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Agende seu Horário</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">
            Escolha o melhor horário para você e garanta seu atendimento
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-black border border-yellow-600/20 rounded-lg p-8 md:p-10">
          {error && (
            <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded text-red-200 text-sm">
              {error}
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label className="flex items-center text-white font-semibold mb-2">
                <User className="w-5 h-5 mr-2 text-yellow-500" />
                Nome Completo
              </label>
              <input
                type="text"
                name="client_name"
                value={formData.client_name}
                onChange={handleChange}
                placeholder="Digite seu nome completo"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
                required
              />
            </div>

            <div>
              <label className="flex items-center text-white font-semibold mb-2">
                <Phone className="w-5 h-5 mr-2 text-yellow-500" />
                Telefone
              </label>
              <input
                type="tel"
                name="client_phone"
                value={formData.client_phone}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
                required
              />
            </div>

            <div>
              <label className="flex items-center text-white font-semibold mb-2">
                <Scissors className="w-5 h-5 mr-2 text-yellow-500" />
                Serviço Desejado
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded text-white focus:outline-none focus:border-yellow-500 transition-colors"
                required
              >
                <option value="">Selecione um serviço</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-center text-white font-semibold mb-2">
                <Calendar className="w-5 h-5 mr-2 text-yellow-500" />
                Data do Agendamento
              </label>
              <input
                type="date"
                name="appointment_date"
                value={formData.appointment_date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded text-white focus:outline-none focus:border-yellow-500 transition-colors"
                required
              />
            </div>

            <div>
              <label className="flex items-center text-white font-semibold mb-2">
                <Clock className="w-5 h-5 mr-2 text-yellow-500" />
                Horário
              </label>
              <select
                name="appointment_time"
                value={formData.appointment_time}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded text-white focus:outline-none focus:border-yellow-500 transition-colors"
                required
              >
                <option value="">Selecione um horário</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-8 bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-700 disabled:cursor-not-allowed text-black disabled:text-gray-400 font-bold text-lg py-4 rounded transition-all transform hover:scale-105 disabled:transform-none"
          >
            {loading ? 'Agendando...' : 'Confirmar Agendamento'}
          </button>
        </form>
      </div>
    </section>
  );
}
