import React, { useState } from 'react';

const semanas = [
  { num: 1, label: 'Semana 1', color: '#f9a8d4' },
  { num: 2, label: 'Semana 2', color: '#fbbf24' },
  { num: 3, label: 'Semana 3', color: '#6ee7b7' },
  { num: 4, label: 'Semana 4', color: '#a5b4fc' },
  { num: 5, label: 'Semana 5', color: '#fdba74' },
  { num: 6, label: 'Semana 6', color: '#f472b6' },
  { num: 7, label: 'Semana 7', color: '#38bdf8' },
  { num: 8, label: 'Semana 8', color: '#c4b5fd' }
];

const Unidad1 = () => {
  const [activeWeek, setActiveWeek] = useState(null);

  return (
    <div className="main">
      <button className="back-btn" onClick={() => window.history.back()}>&larr; Volver al Portafolio</button>
      <h1>Cuaderno Semanal - Unidad 1<br /><span style={{fontSize:'1.1rem',fontWeight:400}}>Semanas 1 a 8</span></h1>
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

export default Unidad1;
