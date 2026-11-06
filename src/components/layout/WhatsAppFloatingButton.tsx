import { business } from '../../data/business';
import { getWhatsAppHref } from '../../lib/whatsapp';
import WhatsAppIcon from '../common/WhatsAppIcon';

export default function WhatsAppFloatingButton() {
  return (
    <a
      className="whatsapp-button"
      href={getWhatsAppHref()}
      target="_blank"
      rel="noopener noreferrer"
      title={`Hubungi ${business.brandName} melalui WhatsApp`}
      aria-label={`Hubungi ${business.brandName} melalui WhatsApp`}
    >
      <span className="whatsapp-button__mark"><WhatsAppIcon /></span>
      <span className="whatsapp-button__label">Chat via WhatsApp</span>
    </a>
  );
}