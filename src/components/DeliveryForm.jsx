import { useState } from 'react';
import { User, MapPin, Phone, FileText, Calendar, Clock, Send } from 'lucide-react';
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
          <label htmlFor="senderName">Full Name</label>
          <input
            type="text"
            id="senderName"
            name="senderName"
            placeholder="Enter sender's name"
            value={formData.senderName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="senderPhone">Phone Number</label>
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
            placeholder="Street, City, State, ZIP"
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
            placeholder="Enter recipient's name"
            value={formData.recipientName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="recipientPhone">Phone Number</label>
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
            placeholder="Street, City, State, ZIP"
            value={formData.recipientAddress}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-section">
        <h3 className="section-title"><FileText size={18} /> Delivery Details</h3>
        <div className="input-group">
          <label htmlFor="description">Parcel Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="What are you sending?"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-row split">
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
                required
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
                required
              />
            </div>
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary submit-btn">
        <Send size={18} />
        Generate Bill
      </button>
    </form>
  );
};
