
import React from 'react';

const semanaCardStyle = {
  background: '#f8f9fa',
  borderRadius: 12,
  boxShadow: '0 1px 8px rgba(0,0,0,0.07)',
  padding: 20,
  marginBottom: 24,
  borderLeft: '6px solid var(--primary, #007bff)'
};

const SegundaUnidad = () => (
  <section style={{maxWidth: 900, margin: '0 auto', padding: 24, background: 'white', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.08)'}}>
    <h2 style={{textAlign: 'center', color: 'var(--primary)', marginBottom: 32}}>Segunda Unidad</h2>
    <div style={{display: 'flex', flexDirection: 'column', gap: 0}}>
      {/* Semana 09 */}
      <div className="semana-card semana-glow-unidad2" style={semanaCardStyle}>
        <h3 style={{marginTop: 0, color: 'var(--primary)'}}>Semana 09 – Backend Web</h3>
        <p><b>Descripción de los temas aprendidos:</b> Se estudió la arquitectura de aplicaciones web backend, el funcionamiento del server-side y el desarrollo con PHP y JSP.</p>
        <p><b>Ejercicios de laboratorio – Resultados:</b> Se desplegaron aplicaciones web backend funcionales.</p>
        <p><b>Reflexión:</b> ¿Qué aprendí? A comprender el rol del servidor en una aplicación web. ¿Cómo aprendí? Mediante prácticas de despliegue y análisis arquitectónico.</p>
      </div>
      {/* Semana 10 */}
      <div className="semana-card semana-glow-unidad2" style={semanaCardStyle}>
        <h3 style={{marginTop: 0, color: 'var(--primary)'}}>Semana 10 – Lenguaje Python</h3>
        <p><b>Descripción de los temas aprendidos:</b> Se abordó Python desde la sintaxis básica hasta programación orientada a objetos.</p>
        <p><b>Ejercicios de laboratorio – Resultados:</b> Se desarrolló una aplicación funcional en Python.</p>
        <p><b>Reflexión:</b> ¿Qué aprendí? A programar soluciones backend con Python. ¿Cómo aprendí? A través de ejercicios prácticos progresivos.</p>
      </div>
      {/* Semana 11 */}
      <div className="semana-card semana-glow-unidad2" style={semanaCardStyle}>
        <h3 style={{marginTop: 0, color: 'var(--primary)'}}>Semana 11 – Django: Vistas, Plantillas y Modelos</h3>
        <p><b>Descripción de los temas aprendidos:</b> Se estudió la arquitectura MVC/MTV, vistas, plantillas y modelos en Django.</p>
        <p><b>Ejercicios de laboratorio – Resultados:</b> Se desarrolló una aplicación web con vistas, plantillas y modelos.</p>
        <p><b>Reflexión:</b> ¿Qué aprendí? A estructurar aplicaciones web robustas. ¿Cómo aprendí? Integrando teoría con desarrollo práctico.</p>
      </div>
      {/* Semana 12 */}
      <div className="semana-card semana-glow-unidad2" style={semanaCardStyle}>
        <h3 style={{marginTop: 0, color: 'var(--primary)'}}>Semana 12 – Formularios y Seguridad en Django</h3>
        <p><b>Descripción de los temas aprendidos:</b> Se trabajaron formularios, validaciones, Django Admin, middleware, sesiones y autenticación.</p>
        <p><b>Ejercicios de laboratorio – Resultados:</b> Se desarrolló un sistema web backend completo.</p>
        <p><b>Reflexión:</b> ¿Qué aprendí? A gestionar datos y seguridad en aplicaciones web. ¿Cómo aprendí? Mediante el desarrollo de un sistema funcional.</p>
      </div>
      {/* Semana 13 */}
      <div className="semana-card semana-glow-unidad2" style={semanaCardStyle}>
        <h3 style={{marginTop: 0, color: 'var(--primary)'}}>Semana 13 – APIs RESTful</h3>
        <p><b>Descripción de los temas aprendidos:</b> Se diseñaron APIs RESTful, aplicando serialización, filtrado y paginación.</p>
        <p><b>Ejercicios de laboratorio – Resultados:</b> Se implementó una API backend funcional.</p>
        <p><b>Reflexión:</b> ¿Qué aprendí? A exponer servicios web escalables. ¿Cómo aprendí? Mediante prácticas orientadas a servicios.</p>
      </div>
      {/* Semana 14 */}
      <div className="semana-card semana-glow-unidad2" style={semanaCardStyle}>
        <h3 style={{marginTop: 0, color: 'var(--primary)'}}>Semana 14 – Microservicios</h3>
        <p><b>Descripción de los temas aprendidos:</b> Se abordó la arquitectura de microservicios con Django, Docker y Kubernetes.</p>
        <p><b>Ejercicios de laboratorio – Resultados:</b> Se diseñó y consumió un microservicio.</p>
        <p><b>Reflexión:</b> ¿Qué aprendí? A desarrollar arquitecturas escalables. ¿Cómo aprendí? A través del análisis de arquitecturas modernas.</p>
      </div>
      {/* Semana 15 */}
      <div className="semana-card semana-glow-unidad2" style={semanaCardStyle}>
        <h3 style={{marginTop: 0, color: 'var(--primary)'}}>Semana 15 – Proyecto Final</h3>
        <p><b>Descripción de los temas aprendidos:</b> Se expuso el proyecto integrador de investigación y RSU.</p>
        <p><b>Ejercicios de laboratorio – Resultados:</b> Presentación del proyecto funcional.</p>
        <p><b>Reflexión:</b> ¿Qué aprendí? A integrar frontend y backend en un proyecto real. ¿Cómo aprendí? Aplicando todo lo aprendido durante el curso.</p>
      </div>
      {/* Semana 16 */}
      <div style={semanaCardStyle}>
        <h3 style={{marginTop: 0, color: 'var(--primary)'}}>Semana 16 – Cierre del Curso</h3>
        <p><b>Descripción de los temas aprendidos:</b> Se realizó la retroalimentación final y consolidación de evaluaciones.</p>
        <p><b>Ejercicios de laboratorio – Resultados:</b> Corrección final del portafolio.</p>
        <p><b>Reflexión:</b> ¿Qué aprendí? A evaluar mi progreso académico. ¿Cómo aprendí? Mediante reflexión crítica y retroalimentación final.</p>
      </div>
    </div>

  </section>
);

export default SegundaUnidad;
