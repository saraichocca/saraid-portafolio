
import React from 'react';
import '../styles/style.css';

const footerLinks = [
  { label: 'GitHub', url: 'https://github.com/saraichocca', color: 'var(--btn2)' },
  { label: 'Portafolio', url: '#portada', color: 'var(--btn3)' },
  { label: 'Contacto', url: '#contacto', color: 'var(--btn4)' }
];

const Footer = () => (
  <footer className="footer-modern animated-section" style={{ width: '100%', padding: '1.2rem 0', background: 'var(--pastel-lavender)', boxShadow: '0 -2px 12px #a78bfa22' }}>
    <div className="footer-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.7rem', width: '100%' }}>
      <div className="footer-links" style={{ display: 'flex', flexDirection: 'row', gap: '1.2rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginBottom: '0.5rem' }}>
        {footerLinks.map(link => (
          <a
            key={link.label}
            href={link.url}
            className="footer-btn color-btn animated-link"
            style={{ background: link.color, color: '#fff', borderRadius: '1.2rem', fontWeight: 600, fontSize: '1.08rem', padding: '0.7rem 1.3rem', boxShadow: '0 2px 8px #a78bfa22', transition: 'background 0.18s, color 0.18s, transform 0.13s, box-shadow 0.18s', margin: '0.2rem 0.1rem' }}
            target={link.url.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="footer-copy animated-desc" style={{ color: '#7e57c2', fontWeight: 500, fontSize: '1rem', textAlign: 'center' }}>
        © {new Date().getFullYear()} Saraid Chocca. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
