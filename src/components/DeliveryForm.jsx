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
        <h3 className="section-title"><User size={18} /> Sender Information</h3>
        <div className="input-group">
          <label htmlFor="merchantAccountNumber">Merchant Account Number</label>
          <div className="input-with-icon">
            <CreditCard size={16} className="field-icon" />
            <input
              type="text"
              id="merchantAccountNumber"
              name="merchantAccountNumber"
              placeholder="Enter the merchant's account number"
              value={formData.merchantAccountNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="driverNumber">Driver number</label>
          <div className="input-with-icon">
            <User size={16} className="field-icon" />
            <input
              type="text"
              id="driverNumber"
              name="driverNumber"
              placeholder="ID of assigned driver"
              value={formData.driverNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="senderName">Full Name</label>
          <input
            type="text"
            id="senderName"
            name="senderName"
            placeholder="Enter the sender's name"
            value={formData.senderName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="senderPhone">Phone number</label>
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
          <label htmlFor="senderAddress">Address</label>
          <textarea
            id="senderAddress"
            name="senderAddress"
            placeholder="Street, City, State, Zip Code"
            value={formData.senderAddress}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-section">
        <h3 className="section-title"><MapPin size={18} /> Recipient Information</h3>
        <div className="input-group">
          <label htmlFor="recipientName">Full Name</label>
          <input
            type="text"
            id="recipientName"
            name="recipientName"
            placeholder="Enter the recipient's name"
            value={formData.recipientName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="recipientPhone">Phone number</label>
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
          <label htmlFor="recipientAddress">Address</label>
          <textarea
            id="recipientAddress"
            name="recipientAddress"
            placeholder="Street, City, State, Zip Code"
            value={formData.recipientAddress}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-section">
        <h3 className="section-title"><FileText size={18} /> Delivery Details</h3>
        
        <div className="input-group">
          <label htmlFor="description">Package Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="What are we picking up and delivering?"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>When should we start the pickup?</label>
          <div className="pickup-toggle-group">
            <button
              type="button"
              className={`toggle-btn ${formData.pickupType === 'now' ? 'active' : ''}`}
              onClick={() => setFormData(prev => ({ ...prev, pickupType: 'now' }))}
            >
              <Zap size={16} /> Pickup NOW
            </button>
            <button
              type="button"
              className={`toggle-btn ${formData.pickupType === 'scheduled' ? 'active' : ''}`}
              onClick={() => setFormData(prev => ({ ...prev, pickupType: 'scheduled' }))}
            >
              <Calendar size={16} /> Schedule for Later
            </button>
          </div>
        </div>

        {formData.pickupType === 'scheduled' && (
          <div className="input-row split animate-slide-down">
            <div className="input-group">
              <label htmlFor="deliveryDate">Preferred Date</label>
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
              <label htmlFor="deliveryTime">Preferred Time</label>
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
          <span>Need help or want to cancel? Call Support: <strong>+1 (800) HAMBRE-SUCKS</strong></span>
        </div>
      </div>

      <button type="submit" className="btn btn-primary submit-btn start-pickup-btn">
        <Truck size={20} />
        {formData.pickupType === 'now' ? 'Start Pickup NOW' : 'Schedule Pickup'}
      </button>
    </form>
  );
};
