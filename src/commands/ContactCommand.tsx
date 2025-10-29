import { CONTACT_INFO } from '@/config/data';
import type { Theme } from '@/types/theme';
import Icon from '@/components/Icon';
import { Mail, Send } from 'lucide-react';

export default function ContactCommand({ theme }: { theme: Theme }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get('name') || '');
    const email = String(formData.get('email') || '');
    const message = String(formData.get('message') || '');

    // Using mailto as a simple solution (opens email client)
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\r\nEmail: ${email}\r\n\r\nMessage:\r\n${message}`;
    // Ensure the entire body is URI encoded to avoid breaking the mailto URL
    const mailto = `mailto:jhaabhinesh977@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <div className="space-y-4 animate-fadeIn">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex-1">
          <p className="font-semibold text-lg flex items-center gap-2" style={{ color: theme.colors.primary }}>
            <Mail size={24} />
            Get In Touch
          </p>
        </div>
        
        {/* Social Links - Responsive */}
        <div className="flex items-center gap-2 flex-wrap">
          <p className="text-xs font-semibold mr-1 hidden sm:inline" style={{ color: theme.colors.accent }}>
            Connect:
          </p>
          {CONTACT_INFO.map((contact, idx) => (
            <a
              key={contact.label}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${contact.label}: ${contact.value} — opens in new tab`}
              title={`${contact.label}: ${contact.value}`}
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg transition-all hover:scale-110"
              style={{ 
                animationDelay: `${idx * 0.05}s`,
                background: `linear-gradient(135deg, ${theme.effects.cardBg}, ${theme.colors.background}80)`,
                border: `1px solid ${theme.colors.border}30`,
              }}
            >
              <Icon name={contact.icon} size={16} />
            </a>
          ))}
        </div>
      </div>

      {/* Contact Form - Full Width */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div 
              className="p-4 rounded-lg"
              style={{
                background: `linear-gradient(135deg, ${theme.effects.cardBg}, ${theme.colors.background}80)`,
                border: `1px solid ${theme.colors.border}40`,
              }}
            >
            <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.text }}>
              Name
            </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-md text-sm outline-none placeholder:opacity-60"
                style={{
                  backgroundColor: `${theme.colors.background}80`,
                  border: `1px solid ${theme.colors.border}30`,
                  color: theme.colors.text,
                  transition: 'box-shadow 150ms ease, transform 150ms ease'
                }}
                placeholder="Your name"
                onKeyDown={(e) => e.stopPropagation()}
                onKeyUp={(e) => e.stopPropagation()}
                onKeyPress={(e) => e.stopPropagation()}
                onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.boxShadow = `0 0 0 3px ${theme.colors.accent}22`; }}
                onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.boxShadow = 'none'; }}
              />
          </div>

            <div 
              className="p-4 rounded-lg"
              style={{
                background: `linear-gradient(135deg, ${theme.effects.cardBg}, ${theme.colors.background}80)`,
                border: `1px solid ${theme.colors.border}40`,
              }}
            >
            <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.text }}>
              Email
            </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-md text-sm outline-none placeholder:opacity-60"
                style={{
                  backgroundColor: `${theme.colors.background}80`,
                  border: `1px solid ${theme.colors.border}30`,
                  color: theme.colors.text,
                  transition: 'box-shadow 150ms ease, transform 150ms ease'
                }}
                placeholder="your.email@example.com"
                onKeyDown={(e) => e.stopPropagation()}
                onKeyUp={(e) => e.stopPropagation()}
                onKeyPress={(e) => e.stopPropagation()}
                onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.boxShadow = `0 0 0 3px ${theme.colors.accent}22`; }}
                onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.boxShadow = 'none'; }}
              />
          </div>
        </div>

        <div 
          className="p-4 rounded-lg"
          style={{
            background: `linear-gradient(135deg, ${theme.effects.cardBg}, ${theme.colors.background}80)`,
            border: `1px solid ${theme.colors.border}40`,
          }}
        >
          <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.text }}>
            Message
          </label>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full px-4 py-3 rounded-md text-sm outline-none resize-none placeholder:opacity-60"
            style={{
              backgroundColor: `${theme.colors.background}80`,
              border: `1px solid ${theme.colors.border}30`,
              color: theme.colors.text,
              transition: 'box-shadow 150ms ease, transform 150ms ease'
            }}
            placeholder="Your message..."
            onKeyDown={(e) => e.stopPropagation()}
            onKeyUp={(e) => e.stopPropagation()}
            onKeyPress={(e) => e.stopPropagation()}
            onFocus={(e) => { (e.currentTarget as HTMLTextAreaElement).style.boxShadow = `0 0 0 3px ${theme.colors.accent}22`; }}
            onBlur={(e) => { (e.currentTarget as HTMLTextAreaElement).style.boxShadow = 'none'; }}
          />
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
          style={{
            backgroundColor: theme.colors.primary,
            color: theme.colors.background,
            boxShadow: `0 8px 30px ${theme.colors.primary}22`,
          }}
        >
          <Send size={16} />
          Send Message
        </button>
      </form>
    </div>
  );
}
