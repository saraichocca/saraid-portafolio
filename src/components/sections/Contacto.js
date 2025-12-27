import React from 'react';

const Contacto = () => (
  <section id="contacto" className="animated-section contact-section" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.2rem'}}>
    <h2 style={{
      fontFamily: 'Poppins, Inter, sans-serif',
      fontWeight: 700,
      fontSize: '2rem',
      color: 'var(--primary)',
      letterSpacing: '1px',
      marginBottom: '1.2rem',
      textAlign: 'center'
    }}>
      <span style={{verticalAlign:'middle', fontSize:'1.7rem'}}>✉️</span> Contacto <span style={{verticalAlign:'middle', fontSize:'1.7rem'}}>💬</span>
    </h2>
    <div style={{
      background: 'var(--glass)',
      borderRadius: '1.2rem',
      boxShadow: '0 2px 12px #a78bfa22',
      padding: '2rem 1.5rem',
      maxWidth:'420px',
      margin:'0 auto',
      textAlign:'center',
      border: '1.5px solid #e0e7ffcc',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.3rem',
      alignItems: 'center',
    }}>
      <div className="contacto-email-card">
        <span style={{fontSize:'1.3rem', color:'var(--primary)', verticalAlign:'middle'}}>✉️</span>
        <span style={{fontSize:'1.13rem', color:'var(--text)', fontWeight:600, marginLeft:'0.5rem'}}>Email:</span>
        <a href="mailto:saraichocca99@gmail.com" className="contacto-link contacto-glow" style={{marginLeft:'0.4rem'}}>saraichocca99@gmail.com</a>
      </div>
      <a href="https://wa.me/51924818136" target="_blank" rel="noopener noreferrer" className="contacto-whatsapp-btn contacto-glow">
        <span style={{fontSize:'1.3rem', verticalAlign:'middle', marginRight:'0.5rem'}}>💬</span> Enviar WhatsApp: <span style={{fontWeight:700}}>924818136</span>
      </a>
    </div>
  </section>
);

export default Contacto;
