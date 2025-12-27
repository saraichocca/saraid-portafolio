import React from 'react';

const Reflexion = () => {
  return (
    <section id="reflexion" className="animated-section reflexion-section" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.2rem'}}>
      <h2 style={{
        fontFamily: 'Poppins, Inter, sans-serif',
        fontWeight: 700,
        fontSize: '2rem',
        color: 'var(--accent)',
        letterSpacing: '1px',
        marginBottom: '1.2rem',
        textAlign: 'center'
      }}>
        <span style={{verticalAlign:'middle', fontSize:'2.1rem'}}>🌱</span> Reflexión Final <span style={{verticalAlign:'middle', fontSize:'2.1rem'}}>🌸</span>
      </h2>
      <div style={{
        background: 'var(--glass)',
        borderRadius: '1.2rem',
        boxShadow: '0 2px 12px #a78bfa22',
        padding: '2.2rem 2rem',
        fontSize: '1.15rem',
        borderLeft: '6px solid var(--accent)',
        maxWidth: '700px',
        width: '100%',
        color: 'var(--text)',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.2rem',
      }}>
        <div style={{textAlign:'center', marginBottom:'1.2rem'}}>
          <span style={{fontSize:'1.5rem', color:'var(--primary)', fontWeight:700, letterSpacing:'0.5px'}}>Reflexión Metacognitiva</span>
        </div>
        <p><span style={{fontSize:'1.3rem', verticalAlign:'middle'}}>✨</span> Esta asignatura representó una experiencia profundamente enriquecedora, permitiéndome consolidar y expandir mis conocimientos en el diseño y desarrollo de páginas web. No solo comprendí la estructura y el estilo visual, sino que también descubrí la importancia de crear experiencias funcionales, atractivas y accesibles para los usuarios.</p>
        <p><span style={{fontSize:'1.2rem', verticalAlign:'middle'}}>🤝</span> A lo largo del proceso, fortalecí mis habilidades técnicas y colaborativas. Aprender a trabajar en equipo y utilizar herramientas profesionales como <b>GitHub</b> fue esencial para el control de versiones y la gestión eficiente de proyectos compartidos.</p>
        <div style={{margin:'2.2rem 0 1.2rem 0', textAlign:'center'}}>
          <span style={{display:'inline-block', background:'var(--pastel-blue)', color:'var(--text)', padding:'0.5rem 1.2rem', borderRadius:'1.2rem', fontSize:'1.15rem', fontWeight:600, boxShadow:'0 2px 12px #bae6fd55'}}>¿Qué aprendí?</span>
        </div>
        <p><span style={{fontSize:'1.2rem', verticalAlign:'middle'}}>💡</span> Aprendí a aplicar de manera práctica los lenguajes <b>HTML</b>, <b>CSS</b> y <b>JavaScript</b> en el desarrollo de proyectos reales, comprendiendo su integración y buenas prácticas. Además, exploré el uso de frameworks utilitarios como <b>Tailwind CSS</b> para optimizar el diseño y los fundamentos de <b>React</b> y <b>TypeScript</b>, ampliando mi perspectiva hacia el desarrollo de aplicaciones web modernas y escalables.</p>
        <p><span style={{fontSize:'1.2rem', verticalAlign:'middle'}}>🔗</span> Este aprendizaje fue posible gracias a la combinación de teoría y práctica, donde cada nuevo reto se convirtió en una oportunidad para crecer y perfeccionar mis habilidades.</p>
        <div style={{margin:'2.2rem 0 1.2rem 0', textAlign:'center'}}>
          <span style={{display:'inline-block', background:'var(--pastel-green)', color:'var(--text)', padding:'0.5rem 1.2rem', borderRadius:'1.2rem', fontSize:'1.15rem', fontWeight:600, boxShadow:'0 2px 12px #bbf7d055'}}>¿Cómo aprendí?</span>
        </div>
        <p><span style={{fontSize:'1.2rem', verticalAlign:'middle'}}>🛠️</span> Aprendí a través de la <b>práctica constante</b>, la experimentación y la resolución de desafíos. Cada actividad reforzó mi aprendizaje mediante la creación de proyectos funcionales, el análisis de errores y la mejora continua.</p>
        <p><span style={{fontSize:'1.2rem', verticalAlign:'middle'}}>💬</span> Compartir ideas con mis compañeros y recibir retroalimentación potenció mi capacidad de trabajo colaborativo y mi autogestión del aprendizaje.</p>
        <p style={{marginBottom:'0.5rem', textAlign:'center', fontSize:'1.13rem', color:'var(--primary)', fontWeight:600}}>
          En resumen, este viaje académico no solo me brindó conocimientos técnicos, sino también valiosas lecciones sobre el trabajo en equipo, la perseverancia y la pasión por el aprendizaje continuo.
        </p>
        <div style={{textAlign:'center', marginTop:'1.5rem'}}>
          <span style={{fontSize:'1.5rem'}}>🌟</span>
        </div>
      </div>
    </section>
  );
};

export default Reflexion;
