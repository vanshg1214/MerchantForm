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
        <h2>¡Solicitud Exitosa!</h2>
        <p>Su solicitud de entrega ha sido enviada y su factura se ha generado a continuación.</p>
      </div>

      {/* The Actual Bill Card */}
      <div className="bill-card" id="printable-bill">
        <div className="bill-header">
          <div className="brand">
            <h1 className="bill-logo">HAMBRE SUCKS</h1>
            <p className="bill-tagline">Logística y Entrega Premium</p>
          </div>
          <div className="bill-meta">
            <div className="meta-item">
              <span className="label">Nº de Factura:</span>
              <span className="value">{billNumber}</span>
            </div>
            <div className="meta-item">
              <span className="label">Fecha:</span>
              <span className="value">{today}</span>
            </div>
          </div>
        </div>

        <div className="bill-body">
          <div className="bill-row">
            <div className="bill-col">
              <h3>Información del Remitente</h3>
              <p><strong>{data.senderName}</strong></p>
              <p><strong>Cta. del Comerciante:</strong> {data.merchantAccountNumber}</p>
              <p><strong>Número del Conductor:</strong> {data.driverNumber}</p>
              <p>{data.senderPhone}</p>
              <p className="address-text">{data.senderAddress}</p>
            </div>
            <div className="bill-col">
              <h3>Información del Destinatario</h3>
              <p><strong>{data.recipientName}</strong></p>
              <p>{data.recipientPhone}</p>
              <p className="address-text">{data.recipientAddress}</p>
            </div>
          </div>

          <div className="bill-divider"></div>

          <div className="bill-section">
            <h3>Horario de Recolección y Entrega</h3>
            <div className="detail-row">
              <span className="label">Tipo de Recolección:</span>
              <span className="value" style={{ color: data.pickupType === 'now' ? '#DC2626' : 'inherit', fontWeight: 'bold' }}>
                {data.pickupType === 'now' ? 'INMEDIATO / AHORA' : 'PROGRAMADO'}
              </span>
            </div>
            <div className="detail-row">
              <span className="label">Descripción:</span>
              <span className="value">{data.description}</span>
            </div>
            {data.pickupType === 'scheduled' && (
              <>
                <div className="detail-row">
                  <span className="label">Fecha Programada:</span>
                  <span className="value">{data.deliveryDate}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Hora Programada:</span>
                  <span className="value">{data.deliveryTime}</span>
                </div>
              </>
            )}
          </div>

          <div className="bill-divider"></div>

          <div className="bill-footer-details">
            <div className="pricing-table">
              <div className="price-row header">
                <span>Descripción</span>
                <span>Monto</span>
              </div>
              <div className="price-row">
                <span>Servicio de Entrega Estándar</span>
                <span>$25.00</span>
              </div>
              <div className="price-row grand-total">
                <span>Monto Total</span>
                <span>$25.00</span>
              </div>
            </div>
            
            <div className="qr-section">
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${billNumber}`} 
                alt="QR Code" 
                className="bill-qr"
              />
              <p>Escanee para rastrear su paquete</p>
            </div>
          </div>
        </div>

        <div className="bill-disclaimer">
          <p>Este es un documento generado por computadora. No requiere firma.</p>
          <p>© 2024 HAMBRE SUCKS Logistics. Todos los derechos reservados.</p>
        </div>
      </div>

      <div className="bill-actions">
        <button className="btn btn-secondary" onClick={onReset}>
          <ArrowLeft size={18} />
          Volver al Formulario
        </button>
        <button className="btn btn-primary" onClick={handlePrint}>
          <Printer size={18} />
          Imprimir / Guardar PDF
        </button>
      </div>
    </div>
  );
};
