

import React from 'react';
import '../styles/style.css';

const navItems = [
  { label: 'Inicio', id: 'portada', color: 'var(--btn1)' },
  { label: 'Sobre mí', id: 'sobremi', color: 'var(--btn2)' },
  { label: 'Stack', id: 'stack', color: 'var(--btn3)' },
  { label: 'Proyectos', id: 'proyectos', color: 'var(--btn4)' },
  { label: 'Cuaderno', id: 'cuaderno', color: 'var(--btn5)' },
  { label: 'Reflexión', id: 'reflexion', color: 'var(--btn6)' },
  { label: 'Bibliografía', id: 'bibliografia', color: 'var(--btn7)' },
  { label: 'Contacto', id: 'contacto', color: 'var(--btn8)' }
];

const navIcons = [
  '🏠',
  '👤',
  '💻',
  '📁',
  '📓',
  '📝',
  '📚',
  '✉️'
];

const Header = ({ onNavClick }) => (
  <header className="main-header glassy-header animated-section">
    <div className="header-content" style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', padding: '0.5rem 1.2rem' }}>
      <div className="logo-title animated-title" style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
        <span className="logo animated-icon" title="Saraid Chocca">🌸</span>
        <span className="logo-text" style={{ fontWeight: 700, fontSize: '1.25rem', color: '#7e57c2' }}>Saraid Chocca</span>
      </div>
      <nav className="main-nav" style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'flex-end', alignItems: 'center', width: '100%' }}>
        {navItems.map(({ label, id, color }, idx) => (
          <button
            key={id}
            className={`nav-btn color-btn nav-btn-anim nav-btn-${id} animated-card`}
            style={{ background: `linear-gradient(90deg, ${color} 80%, var(--accent) 100%)`, color: '#fff', boxShadow: '0 2px 8px #a78bfa22', minWidth: '110px', fontSize: '1.08rem', margin: '0.2rem 0.1rem' }}
            onClick={() => onNavClick(id)}
          >
            <span className="nav-btn-icon animated-icon" aria-hidden="true" style={{marginRight: '0.5em'}}>{navIcons[idx]}</span>
            {label}
          </button>
        ))}
      </nav>
    </div>
  </header>
);

export default Header;
