import { useState } from 'react';
import { DeliveryForm } from './components/DeliveryForm';
import './index.css';

function App() {
  const [isRedirecting, setIsRedirecting] = useState(false);

  return (
    <>
      <div className={`loader-wrapper ${isRedirecting ? 'active' : ''}`}>
        <div className="spinner"></div>
      </div>

      <div className="container animate-fade-in">
        <h1 className="title delay-1">Delivery Request</h1>
        <p className="subtitle delay-2">
          Please complete the details below to schedule your delivery.
        </p>

        <DeliveryForm />
      </div>
    </>
  );
}

export default App;
