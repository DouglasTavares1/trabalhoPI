import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import History from './components/History';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import Confirmation from './components/Confirmation';
import Footer from './components/Footer';
import type { Appointment } from './types/appointment';

function App() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmedAppointment, setConfirmedAppointment] = useState<Appointment | null>(null);

  const handleBookingSuccess = (appointment: Appointment) => {
    setConfirmedAppointment(appointment);
    setShowConfirmation(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewBooking = () => {
    setShowConfirmation(false);
    setConfirmedAppointment(null);
    setTimeout(() => {
      const bookingSection = document.getElementById('agendamento');
      bookingSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('agendamento');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  if (showConfirmation && confirmedAppointment) {
    return (
      <>
        <Header onBookingClick={handleNewBooking} />
        <Confirmation appointment={confirmedAppointment} onNewBooking={handleNewBooking} />
        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Header onBookingClick={scrollToBooking} />
      <Hero onBookingClick={scrollToBooking} />
      <History />
      <Services />
      <BookingForm onSuccess={handleBookingSuccess} />
      <Footer />
    </div>
  );
}

export default App;
