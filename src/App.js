
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/style.css';

import Portada from './components/sections/Portada';
import SobreMi from './components/sections/SobreMi';
import Stack from './components/sections/Stack';
import Cuaderno from './components/sections/Cuaderno';
import Reflexion from './components/sections/Reflexion';
import Bibliografia from './components/sections/Bibliografia';
import Contacto from './components/sections/Contacto';

const linkStyle = {
  background: '#f7f7fa',
  borderRadius: '12px',
  boxShadow: '0 2px 8px #a78bfa22',
  padding: '12px 18px',
  margin: '8px 0',
  fontWeight: 600,
  fontSize: '1.08rem',
  color: '#1a237e',
  textDecoration: 'none',
  border: '2px solid #e0e0e0',
  transition: 'transform 0.2s, box-shadow 0.2s',
  display: 'block',
  width: '100%',
  textAlign: 'center',
};

              const scrollToSection = (id) => {
                const section = document.getElementById(id);
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              };

              const App = () => {
                return (
                  <div className="app-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f7f7fa' }}>
                    <Header onNavClick={scrollToSection} />
                    <main className="main-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                      <div className="container" style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2.5rem' }}>
                        <Portada />
                        <SobreMi />
                        <Stack />
                        {/* Proyectos Concluidos */}
                        <section id="proyectos" className="proyectos-section animated-section" style={{ width: '100%', margin: '48px 0 0 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <h2 className="animated-title" style={{
                            fontFamily: 'Poppins, Inter, sans-serif',
                            fontWeight: 800,
                            fontSize: '2.2rem',
                            color: '#26c6da',
                            letterSpacing: '1px',
                            marginBottom: '1.5rem',
                            textAlign: 'center',
                            textShadow: '0 2px 8px #26c6da22'
                          }}>Proyectos Concluidos</h2>
                          <div className="proyectos-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '2.2rem', width: '100%', maxWidth: '1100px', justifyContent: 'center' }}>
                            {/* Proyecto 1 */}
                            <div className="proyecto-card proyecto1-card animated-card" style={{ background: '#fff', borderRadius: '18px', boxShadow: '0 0 16px 2px #7e57c2, 0 4px 24px rgba(0,0,0,0.10)', padding: '32px 28px', maxWidth: '340px', minWidth: '260px', flex: '1 1 300px', transition: 'transform 0.2s', border: '2px solid #e0e0e0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', animation: 'glow 2.5s linear infinite' }}>
                              <span className="animated-icon" style={{ fontSize: '2.2rem', marginBottom: '10px' }}>📱</span>
                              <h3 className="proyecto-title animated-title" style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '10px', color: '#1a237e' }}>Sistema de Asistencia Escolar</h3>
                              <div className="proyecto-desc animated-desc" style={{ marginBottom: '10px', color: '#444' }}><b>Descripción:</b><br/>Sistema con detección facial e integración web para mejorar la asistencia de estudiantes.</div>
                              <div className="proyecto-stack animated-stack" style={{ marginBottom: '10px', color: '#444' }}><b>Tecnologías:</b><br/>Python, Flask, MySQL, HTML, CSS</div>
                              <div className="proyecto-date animated-date" style={{ color: '#888', fontSize: '0.95rem' }}><b>Fecha:</b> Septiembre 2024</div>
                            </div>
                            {/* Proyecto 2 */}
                            <div className="proyecto-card proyecto2-card animated-card" style={{ background: '#fff', borderRadius: '18px', boxShadow: '0 0 16px 2px #42a5f5, 0 4px 24px rgba(0,0,0,0.10)', padding: '32px 28px', maxWidth: '340px', minWidth: '260px', flex: '1 1 300px', transition: 'transform 0.2s', border: '2px solid #e0e0e0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', animation: 'glow 2.5s linear infinite' }}>
                              <span className="animated-icon" style={{ fontSize: '2.2rem', marginBottom: '10px' }}>🛒</span>
                              <h3 className="proyecto-title animated-title" style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '10px', color: '#1a237e' }}>E-commerce Agroindustrial</h3>
                              <div className="proyecto-desc animated-desc" style={{ marginBottom: '10px', color: '#444' }}><b>Descripción:</b><br/>Plataforma web para venta de productos agrícolas.</div>
                              <div className="proyecto-stack animated-stack" style={{ marginBottom: '10px', color: '#444' }}><b>Tecnologías:</b><br/>HTML, CSS, JavaScript, PHP</div>
                              <div className="proyecto-date animated-date" style={{ color: '#888', fontSize: '0.95rem' }}><b>Fecha:</b> Julio 2024</div>
                            </div>
                            {/* Proyecto 3 */}
                            <div className="proyecto-card proyecto3-card animated-card" style={{ background: '#fff', borderRadius: '18px', boxShadow: '0 0 16px 2px #26c6da, 0 4px 24px rgba(0,0,0,0.10)', padding: '32px 28px', maxWidth: '340px', minWidth: '260px', flex: '1 1 300px', transition: 'transform 0.2s', border: '2px solid #e0e0e0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', animation: 'glow 2.5s linear infinite' }}>
                              <span className="animated-icon" style={{ fontSize: '2.2rem', marginBottom: '10px' }}>🏥</span>
                              <h3 className="proyecto-title animated-title" style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '10px', color: '#1a237e' }}>Sistema Médico</h3>
                              <div className="proyecto-desc animated-desc" style={{ marginBottom: '10px', color: '#444' }}><b>Descripción:</b><br/>Aplicación para registro y control de pacientes y citas médicas.</div>
                              <div className="proyecto-stack animated-stack" style={{ marginBottom: '10px', color: '#444' }}><b>Tecnologías:</b><br/>Java, Spring Boot</div>
                              <div className="proyecto-date animated-date" style={{ color: '#888', fontSize: '0.95rem' }}><b>Fecha:</b> Junio 2024</div>
                            </div>
                          </div>
                        </section>
                        <Cuaderno />
                        <Reflexion />
                        <Bibliografia />
                        <Contacto />
                        {/* Tareas del semestre Unidad I y II juntas */}
                        <section id="tareas-unidades" className="tareas-section animated-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.2rem', margin: '48px 0 0 0', width: '100%' }}>
                          <h2 className="animated-title" style={{
                            fontFamily: 'Poppins, Inter, sans-serif',
                            fontWeight: 800,
                            fontSize: '2.2rem',
                            color: 'var(--primary)',
                            letterSpacing: '1px',
                            marginBottom: '1.5rem',
                            textAlign: 'center',
                            textShadow: '0 2px 8px #a78bfa22'
                          }}>Tareas del semestre</h2>
                          <div className="tareas-list" style={{ display: 'flex', flexDirection: 'row', gap: '3rem', width: '100%', justifyContent: 'center', flexWrap: 'wrap' }}>
                            {/* Unidad I */}
                            <div className="tarea-card animated-card" style={{ flex: '1 1 400px', minWidth: '320px', maxWidth: '480px', background: '#fff', borderRadius: '18px', boxShadow: '0 0 16px 2px #42a5f522', padding: '32px 24px', marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                              <h3 className="animated-title animated-btn" style={{ fontWeight: 700, fontSize: '1.5rem', color: '#42a5f5', marginBottom: '1.2rem', textAlign: 'center' }}>Unidad I <span role="img" aria-label="libro">📙</span></h3>
                              <a href="https://github.com/daysy111/Practica2" target="_blank" rel="noopener noreferrer" className="animated-link animated-btn tarea-glow" style={{ ...linkStyle }}>📝 Tarea 1</a>
                              <a href="https://github.com/machaparionaangelyoelver-web/Practica02" target="_blank" rel="noopener noreferrer" className="animated-link animated-btn tarea-glow" style={{ ...linkStyle }}>📝 Tarea 2</a>
                              <a href="https://github.com/giannunezdelzo-prog/Practica-3" target="_blank" rel="noopener noreferrer" className="animated-link animated-btn tarea-glow" style={{ ...linkStyle }}>📝 Tarea 3</a>
                              <a href="https://github.com/sayles1309/Parcial" target="_blank" rel="noopener noreferrer" className="animated-link animated-btn tarea-glow" style={{ ...linkStyle }}>📝 Parcial</a>
                            </div>
                            {/* Unidad II */}
                            <div className="tarea-card animated-card" style={{ flex: '1 1 400px', minWidth: '320px', maxWidth: '480px', background: '#fff', borderRadius: '18px', boxShadow: '0 0 16px 2px #7e57c222', padding: '32px 24px', marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                              <h3 className="animated-title animated-btn" style={{ fontWeight: 700, fontSize: '1.5rem', color: '#7e57c2', marginBottom: '1.2rem', textAlign: 'center' }}>Unidad II</h3>
                              <a href="https://github.com/saraichocca/gestiondocentesproject" target="_blank" rel="noopener noreferrer" className="animated-link animated-btn tarea-glow" style={{ ...linkStyle }}>📝 CRUD DOCENTES</a>
                              <a href="https://github.com/saraichocca/estudiantes-app" target="_blank" rel="noopener noreferrer" className="animated-link animated-btn tarea-glow" style={{ ...linkStyle }}>📝 CRUD ESTUDIANTES PHP</a>
                              <a href="https://github.com/saraichocca/EJER01_INICIOSESI-NPYTHON" target="_blank" rel="noopener noreferrer" className="animated-link animated-btn tarea-glow" style={{ ...linkStyle }}>📝 Ejercicio Laboratorio Python 1</a>
                              <a href="https://github.com/saraichocca/Herencia-Python-ejercicio-02" target="_blank" rel="noopener noreferrer" className="animated-link animated-btn tarea-glow" style={{ ...linkStyle }}>📝 Ejercicio Laboratorio Python 2</a>
                              <a href="https://github.com/saraichocca/modelo-ia" target="_blank" rel="noopener noreferrer" className="animated-link animated-btn tarea-glow" style={{ ...linkStyle }}>📝 Modelo IA</a>
                            </div>
                          </div>
                        </section>
                      </div>
                    </main>
                    <Footer />
                  </div>
                );
              };


export default App;
