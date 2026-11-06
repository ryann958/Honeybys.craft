type WhatsAppIconProps = {
  className?: string;
};

export default function WhatsAppIcon({ className = '' }: WhatsAppIconProps) {
  return (
    <svg
      className={`whatsapp-icon ${className}`.trim()}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16 3.5a12.1 12.1 0 0 0-10.4 18.3l-1.1 6 6.2-1.6A12.1 12.1 0 1 0 16 3.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M11.1 9.2c-.4 0-.8.2-1.1.6-.4.4-.9 1.1-.9 2.1s.7 2.3.9 2.5c.1.2 1.6 2.7 4.1 3.8.6.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.3-.6.3-1.2.2-1.4-.1-.1-.3-.2-.6-.4l-1.8-.9c-.2-.1-.4-.1-.6.2l-.8 1c-.2.2-.3.2-.6.1-.3-.1-1.1-.4-2-1.2-.7-.6-1.2-1.4-1.4-1.7-.1-.3 0-.4.1-.5l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.8-1.9c-.2-.4-.4-.4-.6-.4h-.5Z"
        fill="currentColor"
      />
    </svg>
  );
}