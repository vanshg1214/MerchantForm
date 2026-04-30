import { useState } from 'react';
import { User, MapPin, Phone, FileText, Calendar, Clock, Send, CreditCard, Zap, Truck, Headphones, Package } from 'lucide-react';
import { Bill } from './Bill';

export const DeliveryForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    senderName: '',
    senderPhone: '',
    senderAddress: '',
    recipientName: '',
    recipientPhone: '',
    recipientAddress: '',
    description: '',
    deliveryDate: '',
    deliveryTime: '',
    merchantAccountNumber: '',
    driverNumber: '',
    pickupType: 'now', // 'now' or 'scheduled'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      senderName: '',
      senderPhone: '',
      senderAddress: '',
      recipientName: '',
      recipientPhone: '',
      recipientAddress: '',
      description: '',
      deliveryDate: '',
      deliveryTime: '',
      merchantAccountNumber: '',
      driverNumber: '',
      pickupType: 'now',
    });
  };

  if (submitted) {
    return <Bill data={formData} onReset={handleReset} />;
  }

  return (
    <form className="delivery-form animate-fade-in" onSubmit={handleSubmit}>
      <div className="form-section">
        <h3 className="section-title"><User size={18} /> Información del Remitente</h3>
        <div className="input-group">
          <label htmlFor="merchantAccountNumber">Número de Cuenta del Comerciante</label>
          <div className="input-with-icon">
            <CreditCard size={16} className="field-icon" />
            <input
              type="text"
              id="merchantAccountNumber"
              name="merchantAccountNumber"
              placeholder="Ingrese el número de cuenta del comerciante"
              value={formData.merchantAccountNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="driverNumber">Número del Conductor</label>
          <div className="input-with-icon">
            <User size={16} className="field-icon" />
            <input
              type="text"
              id="driverNumber"
              name="driverNumber"
              placeholder="ID del conductor asignado"
              value={formData.driverNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="senderName">Nombre Completo</label>
          <input
            type="text"
            id="senderName"
            name="senderName"
            placeholder="Ingrese el nombre del remitente"
            value={formData.senderName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="senderPhone">Número de Teléfono</label>
          <div className="input-with-icon">
            <Phone size={16} className="field-icon" />
            <input
              type="tel"
              id="senderPhone"
              name="senderPhone"
              placeholder="(000) 000-0000"
              value={formData.senderPhone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="senderAddress">Dirección</label>
          <textarea
            id="senderAddress"
            name="senderAddress"
            placeholder="Calle, Ciudad, Estado, Código Postal"
            value={formData.senderAddress}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-section">
        <h3 className="section-title"><MapPin size={18} /> Información del Destinatario</h3>
        <div className="input-group">
          <label htmlFor="recipientName">Nombre Completo</label>
          <input
            type="text"
            id="recipientName"
            name="recipientName"
            placeholder="Ingrese el nombre del destinatario"
            value={formData.recipientName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="recipientPhone">Número de Teléfono</label>
          <div className="input-with-icon">
            <Phone size={16} className="field-icon" />
            <input
              type="tel"
              id="recipientPhone"
              name="recipientPhone"
              placeholder="(000) 000-0000"
              value={formData.recipientPhone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="recipientAddress">Dirección</label>
          <textarea
            id="recipientAddress"
            name="recipientAddress"
            placeholder="Calle, Ciudad, Estado, Código Postal"
            value={formData.recipientAddress}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-section">
        <h3 className="section-title"><FileText size={18} /> Detalles de Entrega</h3>
        
        <div className="input-group">
          <label htmlFor="description">Descripción del Paquete</label>
          <textarea
            id="description"
            name="description"
            placeholder="¿Qué vamos a recoger y entregar?"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>¿Cuándo debemos iniciar la recolección?</label>
          <div className="pickup-toggle-group">
            <button
              type="button"
              className={`toggle-btn ${formData.pickupType === 'now' ? 'active' : ''}`}
              onClick={() => setFormData(prev => ({ ...prev, pickupType: 'now' }))}
            >
              <Zap size={16} /> Recoger AHORA
            </button>
            <button
              type="button"
              className={`toggle-btn ${formData.pickupType === 'scheduled' ? 'active' : ''}`}
              onClick={() => setFormData(prev => ({ ...prev, pickupType: 'scheduled' }))}
            >
              <Calendar size={16} /> Programar para Más Tarde
            </button>
          </div>
        </div>

        {formData.pickupType === 'scheduled' && (
          <div className="input-row split animate-slide-down">
            <div className="input-group">
              <label htmlFor="deliveryDate">Fecha Preferida</label>
              <div className="input-with-icon">
                <Calendar size={16} className="field-icon" />
                <input
                  type="date"
                  id="deliveryDate"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                  required={formData.pickupType === 'scheduled'}
                />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="deliveryTime">Hora Preferida</label>
              <div className="input-with-icon">
                <Clock size={16} className="field-icon" />
                <input
                  type="time"
                  id="deliveryTime"
                  name="deliveryTime"
                  value={formData.deliveryTime}
                  onChange={handleChange}
                  required={formData.pickupType === 'scheduled'}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="form-footer-info">
        <div className="contact-support">
          <Headphones size={18} />
          <span>¿Necesita ayuda o desea cancelar? Llame a Soporte: <strong>+1 (800) HAMBRE-SUCKS</strong></span>
        </div>
      </div>

      <button type="submit" className="btn btn-primary submit-btn start-pickup-btn">
        <Truck size={20} />
        {formData.pickupType === 'now' ? 'Iniciar Recolección AHORA' : 'Programar Recolección'}
      </button>
    </form>
  );
};
