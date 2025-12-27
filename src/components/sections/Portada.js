
import React from 'react';
import portadaImg from '../../assets/img/saraiduno.jpeg';


const Portada = () => (
  <section id="portada" className="animated-section portada-section" style={{
    minHeight: '70vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(120deg, #f3e8ff 60%, #fce7f3 100%)',
    borderRadius: '2.2rem',
    boxShadow: '0 8px 32px 0 rgba(124,58,237,0.08)',
    margin: '2.5rem 0 2.5rem 0',
    padding: '2.5rem 1.5rem',
    position: 'relative',
    overflow: 'hidden'
  }}>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2.2rem',
      width: '100%'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.2rem'
      }}>
        <div style={{
          background: 'var(--gradient-accent)',
          borderRadius: '50%',
          padding: '0.4rem',
          boxShadow: '0 4px 24px #f472b655',
          width: '160px',
          height: '160px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
            <img src={portadaImg} alt="Saraid Chocca Aroni" style={{
            width: '148px',
            height: '148px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '4px solid #fff',
            boxShadow: '0 2px 12px #a78bfa33'
          }} />
        </div>
        <h1 style={{
          fontFamily: 'Poppins, Inter, sans-serif',
          fontWeight: 700,
          fontSize: '2.3rem',
          color: 'var(--primary)',
          letterSpacing: '1.2px',
          textAlign: 'center',
          margin: 0
        }}>Saraid Chocca Aroni</h1>
        <h2 style={{
          fontFamily: 'Inter, Poppins, sans-serif',
          fontWeight: 600,
          fontSize: '1.25rem',
          color: 'var(--accent)',
          margin: 0,
          textAlign: 'center',
          letterSpacing: '0.5px'
        }}>Ingeniería de Sistemas | UNCP</h2>
      </div>
      <div style={{
        maxWidth: '600px',
        textAlign: 'center',
        color: 'var(--text)',
        fontSize: '1.13rem',
        fontWeight: 500,
        lineHeight: 1.7
      }}>
        <p>Motivada por la tecnología y el desarrollo web, combino creatividad, análisis y programación para transformar ideas en experiencias digitales eficientes e inspiradoras.</p>
        <p style={{marginTop: '0.7rem'}}>📋 En este espacio documento mi aprendizaje en la asignatura <b>Desarrollo de Aplicaciones Web</b>.</p>
      </div>
      <a href="#proyectos" className="cta-btn">Ver mis proyectos 🚀</a>
    </div>
  </section>
);

export default Portada;
