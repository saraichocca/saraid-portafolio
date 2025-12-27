import React from 'react';
import { Link } from 'react-router-dom';


const Cuaderno = () => (
  <section id="cuaderno" className="animated-section cuaderno-section" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.2rem', width:'100%'}}>
    <div style={{
        background: 'rgba(255,255,255,0.85)',
        borderRadius: '1.5rem',
        boxShadow: '0 2px 18px #a78bfa22',
        padding: '2.1rem 1.7rem',
        color: 'var(--primary)',
        fontWeight: 700,
        fontSize: '1.23rem',
        textAlign: 'center',
        marginBottom: '1.2rem',
        maxWidth: '600px',
        width: '100%',
        border: '2px solid #e0e7ff',
        backdropFilter: 'blur(6px)',
      }}>
        Explora el mapa de ruta de la asignatura. Selecciona una unidad para ver el contenido correspondiente.
      </div>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      maxWidth: '900px',
      margin: '0 auto',
      gap: '2.2rem',
      flexWrap: 'wrap',
    }}>
      <Link
        to="/primera-unidad"
        className="animated-btn unidad-glow"
        style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.7rem',
          background: 'linear-gradient(120deg, #f8fafc 60%, #e0e7ff 100%)',
          borderRadius: '1.5rem',
          boxShadow: '0 8px 32px #a78bfa33',
          padding: '2.3rem 2vw 2rem 2vw',
          minWidth: 0,
          width: '260px',
          border: '2px solid #e0e7ff',
          transition: 'box-shadow 0.18s, transform 0.18s',
          boxSizing: 'border-box',
          backdropFilter: 'blur(6px)',
          position: 'relative',
          overflow: 'hidden',
          margin: '0 auto',
          textAlign: 'center',
          cursor: 'pointer',
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <span style={{fontSize: '2.7rem'}}>📗</span>
        <span style={{fontWeight: 800, fontSize: '1.23rem', color: 'var(--primary)'}}>Primera Unidad</span>
      </Link>
      <Link
        to="/segunda-unidad"
        className="animated-btn unidad-glow"
        style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.7rem',
          background: 'linear-gradient(120deg, #e0e7ff 60%, #f8fafc 100%)',
          borderRadius: '1.5rem',
          boxShadow: '0 8px 32px #a78bfa33',
          padding: '2.3rem 2vw 2rem 2vw',
          minWidth: 0,
          width: '260px',
          border: '2px solid #e0e7ff',
          transition: 'box-shadow 0.18s, transform 0.18s',
          boxSizing: 'border-box',
          backdropFilter: 'blur(6px)',
          position: 'relative',
          overflow: 'hidden',
          margin: '0 auto',
          textAlign: 'center',
          cursor: 'pointer',
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <span style={{fontSize: '2.7rem'}}>📙</span>
        <span style={{fontWeight: 800, fontSize: '1.23rem', color: 'var(--primary)'}}>Segunda Unidad</span>
      </Link>
    </div>
  </section>
);

export default Cuaderno;
