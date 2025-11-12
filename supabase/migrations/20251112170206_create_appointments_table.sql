/*
  # Criação da tabela de agendamentos da Barbearia do Seu Zé

  1. Nova Tabela
    - `appointments`
      - `id` (uuid, chave primária) - Identificador único do agendamento
      - `client_name` (text) - Nome completo do cliente
      - `client_phone` (text) - Telefone do cliente para contato
      - `service` (text) - Serviço escolhido (corte, barba, combo, etc)
      - `appointment_date` (date) - Data do agendamento
      - `appointment_time` (text) - Horário do agendamento
      - `created_at` (timestamptz) - Data e hora de criação do registro
      - `status` (text) - Status do agendamento (confirmado, cancelado, concluído)

  2. Segurança
    - Habilita RLS na tabela `appointments`
    - Permite que usuários anônimos possam inserir novos agendamentos (para o formulário público)
    - Permite que todos possam ler os agendamentos (para verificação de horários disponíveis)

  3. Notas Importantes
    - A tabela é configurada para permitir agendamentos públicos
    - O campo status tem valor padrão 'confirmado'
    - Timestamps automáticos para rastreamento
*/

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_phone text NOT NULL,
  service text NOT NULL,
  appointment_date date NOT NULL,
  appointment_time text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'confirmado'
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Permitir inserção pública de agendamentos"
  ON appointments
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Permitir leitura pública de agendamentos"
  ON appointments
  FOR SELECT
  TO anon
  USING (true);

CREATE INDEX IF NOT EXISTS idx_appointments_date_time 
  ON appointments(appointment_date, appointment_time);