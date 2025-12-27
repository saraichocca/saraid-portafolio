import React from 'react';


const Stack = () => (
  <section id="stack" className="animated-section stack-section" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.2rem'}}>
      <h2 style={{
        fontFamily: 'Poppins, Inter, sans-serif',
        fontWeight: 900,
        fontSize: '2.3rem',
        color: 'var(--primary)',
        letterSpacing: '1.2px',
        marginBottom: '1.2rem',
        textAlign: 'center',
        textShadow: '0 2px 12px #a78bfa22'
      }}>Stack de Tecnologías</h2>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
      gap: '2rem',
      width: '100%',
      maxWidth: '700px',
      margin: '0 auto',
      justifyItems: 'center',
    }}>
      {/* HTML5 */}
        <div className="stack-card stack-html" style={{background:'linear-gradient(120deg,#f3e8ff 60%,#e0e7ff 100%)',borderRadius:'1.3rem',boxShadow:'0 2px 12px #a78bfa22',padding:'2rem 1.2rem',display:'flex',flexDirection:'column',alignItems:'center',gap:'1.1rem',transition:'box-shadow 0.2s'}}>
          <span title="HTML5" className="stack-icon" style={{fontSize:'3.2rem'}}>
            <svg width="64" height="64" viewBox="0 0 48 48"><path fill="#E44D26" d="M9 3l3.6 40.2L24 45l11.4-1.8L39 3z"/><path fill="#F16529" d="M24 41.1V6h12.6l-3.3 36.9z"/><path fill="#EBEBEB" d="M24 20.1h-5.1l-.3-3.3H24V13.5h-8.7l.1 1.2.8 9.3H24zm0 8.1h-4.2l-.3-3.3H24v-3.3h-7.2l.1 1.2.8 9.3H24z"/><path fill="#FFF" d="M24 20.1v3.3h4.8l-.5 5.4H24v3.3h7.2l.1-1.2.8-9.3H24zm0-6.6v3.3h4.5l-.3 3.3H24v3.3h7.2l.1-1.2.8-9.3H24z"/></svg>
          </span>
          <span className="stack-title" style={{fontWeight:700,fontSize:'1.18rem',color:'var(--primary)'}}>HTML5</span>
        </div>
      {/* CSS3 */}
      <div className="stack-card stack-css">
        <span title="CSS3" className="stack-icon">
          <svg width="56" height="56" viewBox="0 0 48 48"><path fill="#1572B6" d="M9 3l3.6 40.2L24 45l11.4-1.8L39 3z"/><path fill="#33A9DC" d="M24 41.1V6h12.6l-3.3 36.9z"/><path fill="#fff" d="M24 20.1h-5.1l-.3-3.3H24V13.5h-8.7l.1 1.2.8 9.3H24zm0 8.1h-4.2l-.3-3.3H24v-3.3h-7.2l.1 1.2.8 9.3H24z"/><path fill="#EBEBEB" d="M24 20.1v3.3h4.8l-.5 5.4H24v3.3h7.2l.1-1.2.8-9.3H24zm0-6.6v3.3h4.5l-.3 3.3H24v3.3h7.2l.1-1.2.8-9.3H24z"/></svg>
        </span>
        <span className="stack-title">CSS3</span>
      </div>
      {/* JavaScript */}
      <div className="stack-card stack-js">
        <span title="JavaScript" className="stack-icon">
          <svg width="56" height="56" viewBox="0 0 48 48"><rect width="48" height="48" rx="8" fill="#F7DF1E"/><path d="M31.7 36.2c.7 1.2 1.6 2.1 3.2 2.1 1.3 0 2.1-.6 2.1-1.5 0-1-0.8-1.4-2.3-2l-.8-.3c-2.3-.8-3.8-1.8-3.8-4 0-2 1.5-3.5 3.9-3.5 1.7 0 2.9.6 3.8 2.1l-2.1 1.3c-.5-.9-1-1.2-1.7-1.2-.8 0-1.3.5-1.3 1.2 0 .8.5 1.1 1.8 1.6l.8.3c2.7 1 4.2 1.9 4.2 4.2 0 2.4-1.9 3.7-4.5 3.7-2.5 0-4.1-1.2-4.9-2.7zm-10.7.2c.4.7.8 1.3 1.7 1.3.9 0 1.5-.3 1.5-1.7v-7.7h2.7v7.8c0 2.8-1.6 4-4 4-2.1 0-3.3-1.1-3.9-2.4z" fill="#22223b"/></svg>
        </span>
        <span className="stack-title">JavaScript</span>
      </div>
      {/* Git */}
      <div className="stack-card stack-git">
        <span title="Git" className="stack-icon">
          <svg width="56" height="56" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="#F05133"/><path d="M35.7 22.3l-10-10a2.1 2.1 0 0 0-3 0l-2.2 2.2 3.2 3.2a2.1 2.1 0 0 1 2.6 2.6l3.1 3.1a2.1 2.1 0 1 1-1.5 1.5l-3.1-3.1a2.1 2.1 0 0 1-2.6-2.6l-3.2-3.2-5.2 5.2a2.1 2.1 0 0 0 0 3l10 10a2.1 2.1 0 0 0 3 0l5.2-5.2a2.1 2.1 0 0 0 0-3z" fill="#fff"/></svg>
        </span>
        <span className="stack-title">Git</span>
      </div>
      {/* GitHub */}
      <div className="stack-card stack-github">
        <span title="GitHub" className="stack-icon">
          <svg width="56" height="56" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="#22223b"/><path d="M24 12c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6-.7 1.8-1 .1-.7.4-1.1.7-1.3-2.7-.3-5.5-1.3-5.5-5.7 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.4-2.8 5.4-5.5 5.7.4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 36 24c0-6.6-5.4-12-12-12z" fill="#fff"/></svg>
        </span>
        <span className="stack-title">GitHub</span>
      </div>
      {/* VS Code */}
      <div className="stack-card stack-vscode">
        <span title="VS Code" className="stack-icon">
          <svg width="56" height="56" viewBox="0 0 48 48"><rect width="48" height="48" rx="8" fill="#3C99D4"/><path d="M14.7 32.6l-4.2-4.2a1.2 1.2 0 0 1 0-1.7l4.2-4.2a1.2 1.2 0 0 1 1.7 0l2.7 2.7 10.2-10.2a1.2 1.2 0 0 1 1.7 0l4.2 4.2a1.2 1.2 0 0 1 0 1.7l-4.2 4.2a1.2 1.2 0 0 1-1.7 0l-2.7-2.7-10.2 10.2a1.2 1.2 0 0 1-1.7 0z" fill="#fff"/></svg>
        </span>
        <span className="stack-title">VS Code</span>
      </div>
    </div>
  </section>
);

export default Stack;
