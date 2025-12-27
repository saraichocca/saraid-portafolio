

const cardStyle = {
  background: '#fff',
  borderRadius: 18,
  boxShadow: '0 4px 18px rgba(0,0,0,0.10)',
  padding: '2.2rem 1.7rem',
  minWidth: 280,
  maxWidth: 370,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.9rem',
  borderLeft: '7px solid var(--primary, #007bff)',
  marginBottom: 0,
  transition: 'box-shadow 0.2s',
};

const Proyectos = () => (
  <section id="proyectos" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.2rem', scrollMarginTop: 90}}>
        <h2 style={{
          fontFamily: 'Poppins, Inter, sans-serif',
          fontWeight: 900,
          fontSize: '2.5rem',
          color: 'var(--primary)',
          letterSpacing: '1.2px',
          marginBottom: '1.7rem',
          textAlign: 'center',
          textShadow: '0 2px 12px #a78bfa22'
        }}>Proyectos Concluidos</h2>
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '2.5rem',
      width: '100%',
      maxWidth: '1100px',
      margin: '0 auto',
      justifyContent: 'center',
    }}>
      {/* Proyecto 1 */}
          <div style={{background:'linear-gradient(120deg,#f3e8ff 60%,#e0e7ff 100%)',borderRadius:'1.5rem',boxShadow:'0 2px 18px #a78bfa22',padding:'2.3rem 1.7rem',minWidth:280,maxWidth:370,display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'1.1rem',borderLeft:'7px solid var(--primary, #007bff)',marginBottom:0,transition:'box-shadow 0.2s'}}>
            <h3 style={{margin: 0, fontSize: '2rem', color: 'var(--primary)', fontWeight: 800, letterSpacing: '1.2px',textShadow:'0 2px 8px #a78bfa22'}}>📱 Sistema de Asistencia Escolar</h3>
            <div style={{fontWeight: 700, color: '#333',fontSize:'1.13rem'}}>Descripción:</div>
            <div style={{fontWeight: 500, color: '#444', marginBottom: 6}}>Sistema con detección facial e integración web para mejorar la asistencia de estudiantes.</div>
            <div style={{fontWeight: 700, color: '#333',fontSize:'1.13rem'}}>Tecnologías:</div>
            <div style={{fontWeight: 500, color: '#444', marginBottom: 6}}>Python, Flask, MySQL, HTML, CSS</div>
            <div style={{fontWeight: 700, color: '#333',fontSize:'1.13rem'}}>Fecha:</div>
            <div style={{fontWeight: 500, color: '#444'}}>Septiembre 2024</div>
          </div>
      {/* Proyecto 2 */}
      <div style={cardStyle}>
        <h3 style={{margin: 0, fontSize: 24, color: 'var(--primary)', fontWeight: 700, letterSpacing: 1}}>🛒 E-commerce Agroindustrial</h3>
        <div style={{fontWeight: 600, color: '#333'}}>Descripción:</div>
        <div style={{fontWeight: 400, color: '#444', marginBottom: 6}}>Plataforma web para venta de productos agrícolas.</div>
        <div style={{fontWeight: 600, color: '#333'}}>Tecnologías:</div>
        <div style={{fontWeight: 400, color: '#444', marginBottom: 6}}>HTML, CSS, JavaScript, PHP</div>
        <div style={{fontWeight: 600, color: '#333'}}>Fecha:</div>
        <div style={{fontWeight: 400, color: '#444'}}>Julio 2024</div>
      </div>
      {/* Proyecto 3 */}
      <div style={cardStyle}>
        <h3 style={{margin: 0, fontSize: 24, color: 'var(--primary)', fontWeight: 700, letterSpacing: 1}}>🏥 Sistema Médico</h3>
        <div style={{fontWeight: 600, color: '#333'}}>Descripción:</div>
        <div style={{fontWeight: 400, color: '#444', marginBottom: 6}}>Aplicación para registro y control de pacientes y citas médicas.</div>
        <div style={{fontWeight: 600, color: '#333'}}>Tecnologías:</div>
        <div style={{fontWeight: 400, color: '#444', marginBottom: 6}}>Java, Spring Boot</div>
        <div style={{fontWeight: 600, color: '#333'}}>Fecha:</div>
        <div style={{fontWeight: 400, color: '#444'}}>Junio 2024</div>
      </div>
    </div>
  </section>
);

export default Proyectos;
