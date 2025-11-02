'use client';

import { CONTACT_INFO } from '@/config/data';
import type { Theme } from '@/types/theme';
import Icon from '@/components/Icon';
import { Mail, Send, CheckCircle2, XCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function ContactCommandClient({ theme }: { theme: Theme }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '824b7f9c-bcc2-479b-a728-467acb13926e',
          name: String(formData.get('name') || ''),
          email: String(formData.get('email') || ''),
          message: String(formData.get('message') || ''),
          subject: 'New Contact Form Submission from Portfolio'
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setMessage('Message sent successfully! I\'ll get back to you soon.');
        form.reset();
        
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to send message. Please try again or email me directly.');
      console.error('Contact form error:', error);
      
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
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

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full sm:w-auto px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.background,
              boxShadow: `0 8px 30px ${theme.colors.primary}22`,
            }}
          >
            {status === 'loading' ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={16} />
                Send Message
              </>
            )}
          </button>

          {/* Status Messages */}
          {status === 'success' && (
            <div 
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium animate-fadeIn"
              style={{
                backgroundColor: `${theme.colors.success}20`,
                border: `1px solid ${theme.colors.success}50`,
                color: theme.colors.success
              }}
            >
              <CheckCircle2 size={16} />
              {message}
            </div>
          )}

          {status === 'error' && (
            <div 
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium animate-fadeIn"
              style={{
                backgroundColor: `${theme.colors.error}20`,
                border: `1px solid ${theme.colors.error}50`,
                color: theme.colors.error
              }}
            >
              <XCircle size={16} />
              {message}
            </div>
          )}
        </div>
      </form>

      {/* Info note */}
      <div 
        className="mt-4 p-3 rounded-lg text-xs"
        style={{
          backgroundColor: `${theme.colors.border}10`,
          border: `1px solid ${theme.colors.border}20`,
          color: theme.colors.text
        }}
      >
        <p className="opacity-70">
          💡 Your message will be sent directly to my email. I typically respond within 24 hours.
        </p>
      </div>
    </div>
  );
}
