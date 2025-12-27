import React from 'react';
import foto1 from '../../assets/img/Foto1.png';


const SobreMi = () => (
  <section id="sobremi" className="animated-section sobremi-section" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.2rem', width: '100%'}}>
    <h2 style={{
      fontFamily: 'Poppins, Inter, sans-serif',
      fontWeight: 900,
      fontSize: '2.3rem',
      color: 'var(--primary)',
      letterSpacing: '1.2px',
      marginBottom: '1.2rem',
      textAlign: 'center',
      textShadow: '0 2px 12px #a78bfa22'
    }}>Sobre Mí</h2>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.7rem', width: '100%'}}>
      <div style={{
        background: 'linear-gradient(135deg, #a78bfa 0%, #f472b6 100%)',
        borderRadius: '2rem',
        padding: '0.6rem',
        boxShadow: '0 4px 24px #f472b655',
        width: '170px',
        height: '170px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <img src={foto1} alt="Saraid Chocca Aroni" style={{
          width: '150px',
          height: '150px',
          borderRadius: '2rem',
          objectFit: 'cover',
          border: '5px solid #fff',
          boxShadow: '0 2px 18px #a78bfa33',
          transition: 'transform 0.3s',
          filter: 'brightness(1.08) saturate(1.1)',
        }} />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.7rem'}}>
        <div className="badge-row" style={{display:'flex',gap:'0.7rem',marginBottom:'0.5rem'}}>
          <span className="badge badge-blue" style={{background:'#e0e7ff',color:'#22223b',padding:'0.3rem 1rem',borderRadius:'1rem',fontWeight:700}}>Ingeniería de Sistemas</span>
          <span className="badge badge-green" style={{background:'#bbf7d0',color:'#22223b',padding:'0.3rem 1rem',borderRadius:'1rem',fontWeight:700}}>UNCP</span>
          <span className="badge badge-yellow" style={{background:'#fef9c3',color:'#22223b',padding:'0.3rem 1rem',borderRadius:'1rem',fontWeight:700}}>Ciclo IX</span>
        </div>
        <span style={{color: 'var(--accent)', fontWeight: 700, fontSize: '1.18rem', marginTop: '0.5rem'}}>CHOCCA ARONI SARAID</span>
        <a
          href="mailto:saraichocca99@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{color: 'var(--primary)', fontWeight: 700, fontSize: '1.13rem', textDecoration: 'none', background:'#e0e7ff',padding:'0.2rem 0.7rem',borderRadius:'0.7rem',marginTop:'0.3rem'}}
        >
          saraichocca99@gmail.com
        </a>
      </div>
      <div style={{maxWidth: '650px', textAlign: 'center', color: 'var(--text)', fontSize: '1.18rem', fontWeight: 500, lineHeight: 1.7, marginTop: '1.2rem', background:'rgba(255,255,255,0.85)',borderRadius:'1.2rem',boxShadow:'0 2px 12px #a78bfa22',padding:'1.5rem 1.2rem',border:'2px solid #e0e7ff'}}>
        <h3 style={{color: 'var(--accent)', fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.7rem'}}>✨ Presentación</h3>
        <p>A lo largo de mi formación profesional he fortalecido competencias en análisis y creatividad aplicada, orientadas a la solución efectiva de problemáticas tecnológicas.</p>
        <p>Aquí presento una muestra de mi progreso académico, los logros alcanzados y el compromiso profesional con el que enfrento cada nuevo desafío en el campo del desarrollo web.</p>
      </div>
    </div>
  </section>
);

export default SobreMi;
