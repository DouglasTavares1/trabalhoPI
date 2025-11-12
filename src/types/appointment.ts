export interface Appointment {
  id?: string;
  client_name: string;
  client_phone: string;
  service: string;
  appointment_date: string;
  appointment_time: string;
  created_at?: string;
  status?: string;
}
