import { business } from '../data/business';

export function getWhatsAppHref() {
  return `${business.whatsappUrl}?text=${encodeURIComponent(business.whatsappMessage)}`;
}