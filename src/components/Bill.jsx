import { Printer, Download, ArrowLeft, CheckCircle2 } from 'lucide-react';

export const Bill = ({ data, onReset }) => {
  const billNumber = `INV-${Math.floor(100000 + Math.random() * 900000)}`;
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bill-container animate-fade-in">
      <div className="success-header">
        <CheckCircle2 color="#22C55E" size={48} />
        <h2>Request Successful!</h2>
        <p>Your delivery request has been sent and your bill has been generated below.</p>
      </div>

      {/* The Actual Bill Card */}
      <div className="bill-card" id="printable-bill">
        <div className="bill-header">
          <div className="brand">
            <h1 className="bill-logo">HAMBRE SUCKS</h1>
            <p className="bill-tagline">Premium Logistics & Delivery</p>
          </div>
          <div className="bill-meta">
            <div className="meta-item">
              <span className="label">Invoice No:</span>
              <span className="value">{billNumber}</span>
            </div>
            <div className="meta-item">
              <span className="label">Date:</span>
              <span className="value">{today}</span>
            </div>
          </div>
        </div>

        <div className="bill-body">
          <div className="bill-row">
            <div className="bill-col">
              <h3>Sender Information</h3>
              <p><strong>{data.senderName}</strong></p>
              <p><strong>Merchant A/C:</strong> {data.merchantAccountNumber}</p>
              <p><strong>Driver number:</strong> {data.driverNumber}</p>
              <p>{data.senderPhone}</p>
              <p className="address-text">{data.senderAddress}</p>
            </div>
            <div className="bill-col">
              <h3>Recipient Information</h3>
              <p><strong>{data.recipientName}</strong></p>
              <p>{data.recipientPhone}</p>
              <p className="address-text">{data.recipientAddress}</p>
            </div>
          </div>

          <div className="bill-divider"></div>

          <div className="bill-section">
            <h3>Pickup & Delivery Schedule</h3>
            <div className="detail-row">
              <span className="label">Pickup Type:</span>
              <span className="value" style={{ color: data.pickupType === 'now' ? '#DC2626' : 'inherit', fontWeight: 'bold' }}>
                {data.pickupType === 'now' ? 'IMMEDIATE / NOW' : 'SCHEDULED'}
              </span>
            </div>
            <div className="detail-row">
              <span className="label">Description:</span>
              <span className="value">{data.description}</span>
            </div>
            {data.pickupType === 'scheduled' && (
              <>
                <div className="detail-row">
                  <span className="label">Scheduled Date:</span>
                  <span className="value">{data.deliveryDate}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Scheduled Time:</span>
                  <span className="value">{data.deliveryTime}</span>
                </div>
              </>
            )}
          </div>

          <div className="bill-divider"></div>

          <div className="bill-footer-details">
            <div className="pricing-table">
              <div className="price-row header">
                <span>Description</span>
                <span>Amount</span>
              </div>
              <div className="price-row">
                <span>Standard Delivery Service</span>
                <span>$25.00</span>
              </div>
              <div className="price-row grand-total">
                <span>Total Amount</span>
                <span>$25.00</span>
              </div>
            </div>
            
            <div className="qr-section">
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${billNumber}`} 
                alt="QR Code" 
                className="bill-qr"
              />
              <p>Scan to track your package</p>
            </div>
          </div>
        </div>

        <div className="bill-disclaimer">
          <p>This is a computer-generated document. No signature required.</p>
          <p>© 2024 HAMBRE SUCKS Logistics. All rights reserved.</p>
        </div>
      </div>

      <div className="bill-actions">
        <button className="btn btn-secondary" onClick={onReset}>
          <ArrowLeft size={18} />
          Back to Form
        </button>
        <button className="btn btn-primary" onClick={handlePrint}>
          <Printer size={18} />
          Print / Save PDF
        </button>
      </div>
    </div>
  );
};
