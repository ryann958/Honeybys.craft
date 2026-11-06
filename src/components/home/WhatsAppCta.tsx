import type { ReactNode } from 'react';
import { business } from '../../data/business';
import { getWhatsAppHref } from '../../lib/whatsapp';
import WhatsAppIcon from '../common/WhatsAppIcon';

type WhatsAppCtaProps = {
  children: ReactNode;
  className?: string;
};

export default function WhatsAppCta({ children, className = '' }: WhatsAppCtaProps) {
  const href = getWhatsAppHref();
  const classNames = `home-button home-button--primary ${className}`.trim();

  return (
    <div className="home-whatsapp-cta">
      <a
        className={classNames}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${children} melalui WhatsApp ${business.brandName}`}
      >
        <WhatsAppIcon />
        {children}
      </a>
    </div>
  );
}