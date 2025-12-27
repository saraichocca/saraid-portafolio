import React, { useState } from 'react';

const semanas = [
  { num: 9, label: 'Semana 9', color: '#f87171' },
  { num: 10, label: 'Semana 10', color: '#34d399' },
  { num: 11, label: 'Semana 11', color: '#facc15' },
  { num: 12, label: 'Semana 12', color: '#60a5fa' },
  { num: 13, label: 'Semana 13', color: '#f472b6' },
  { num: 14, label: 'Semana 14', color: '#a3e635' },
  { num: 15, label: 'Semana 15', color: '#fbbf24' },
  { num: 16, label: 'Semana 16', color: '#818cf8' }
];

const Unidad2 = () => {
  const [activeWeek, setActiveWeek] = useState(null);

  return (
    <div className="main">
      <button className="back-btn" onClick={() => window.history.back()}>&larr; Volver al Portafolio</button>
      <h1>Cuaderno Semanal - Unidad 2<br /><span style={{fontSize:'1.1rem',fontWeight:400}}>Semanas 9 a 16</span></h1>
      <div className="weeks-list">
        {semanas.map((sem, idx) => (
          <button
            key={sem.num}
            className={`week-link${activeWeek === idx ? ' active' : ''}`}
            style={activeWeek === idx ? {background: `linear-gradient(90deg, ${sem.color} 70%, #fff 100%)`, color: '#fff'} : {}}
            onClick={() => setActiveWeek(idx)}
          >
            {sem.label}
          </button>
        ))}
      </div>
      <div
        id="week-content"
        style={{
          display: activeWeek !== null ? 'block' : 'none',
          background: activeWeek !== null ? semanas[activeWeek].color : '#fff',
          borderColor: activeWeek !== null ? semanas[activeWeek].color : '#f3e8ff',
          minHeight: '120px',
          boxShadow: '0 2px 12px rgba(124,58,237,0.06)',
          borderRadius: '1.1rem',
          marginTop: '1.2rem',
          padding: '1.2rem',
          border: '2px solid',
          transition: 'background 0.5s, border-color 0.5s'
        }}
      >
        {activeWeek !== null ? (
          <span>Contenido de la semana {semanas[activeWeek].num} aquí...</span>
        ) : null}
      </div>
    </div>
  );
};

export default Unidad2;
