

import React from 'react';

const semanaCardStyle = {
  background: '#f8f9fa',
  borderRadius: 12,
  boxShadow: '0 1px 8px rgba(0,0,0,0.07)',
  padding: 20,
  marginBottom: 24,
  borderLeft: '6px solid var(--primary, #007bff)'
};

const PrimeraUnidad = () => (
  <>
    <section style={{maxWidth: 900, margin: '0 auto', padding: 24, background: 'white', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.08)'}}>
      <h2 style={{textAlign: 'center', color: 'var(--primary)', marginBottom: 32}}>Primera Unidad</h2>
      <div style={{display: 'flex', flexDirection: 'column', gap: 0}}>
        {/* Semana 01 */}
        <div className="semana-card semana-glow-unidad1" style={semanaCardStyle}>
          <h3 style={{marginTop: 0, color: 'var(--primary)'}}>Semana 01 – Introducción a las Tecnologías Web</h3>
          <ol>
            <li><b>Descripción de los temas aprendidos</b>
              <p>Durante esta semana se estudiaron los fundamentos de las tecnologías web, comprendiendo las diferencias entre sistema web, aplicación web, sitio web y página web. Se analizó el funcionamiento de la web a nivel conceptual, abordando el rol del DNS, el protocolo TCP/IP y el protocolo HTTP en la comunicación cliente-servidor. Asimismo, se identificaron los principales roles en el desarrollo de aplicaciones para Internet: desarrollador frontend, backend y fullstack. Finalmente, se introdujo el uso del editor Visual Studio Code como herramienta principal de desarrollo.</p>
            </li>
            <li><b>Ejercicios de laboratorio – Resultados</b>
              <p>En el Laboratorio 01A se exploró la interfaz de usuario de Visual Studio Code, identificando sus paneles, menús y funciones principales. Se instalaron extensiones básicas para desarrollo web y se practicaron atajos de teclado, logrando una configuración inicial adecuada del entorno de desarrollo.</p>
            </li>
            <li><b>Reflexión</b>
              <p><b>¿Qué aprendí?</b> Se adquirió una comprensión clara del ecosistema web y de los componentes que intervienen en el desarrollo de aplicaciones web modernas.</p>
              <p><b>¿Cómo aprendí?</b> A través de la explicación teórica del docente y la práctica directa con la herramienta de desarrollo, aplicando aprendizaje basado en problemas.</p>
            </li>
          </ol>
        </div>
        {/* Semana 02 */}
        <div className="semana-card semana-glow-unidad1" style={semanaCardStyle}>
          <h3 style={{marginTop: 0, color: 'var(--primary)'}}>Semana 02 – HTML, XML y CSS</h3>
          <ol>
            <li><b>Descripción de los temas aprendidos</b>
              <p>Se abordaron los lenguajes de marcado HTML y XML, analizando su estructura, etiquetas principales y diferencias. Se estudió el Árbol DOM, el proceso de renderizado y el ciclo de vida de una página web. Asimismo, se introdujeron conceptos de optimización para motores de búsqueda (SEO) y compatibilidad entre navegadores. En CSS3 se trabajó la sintaxis, los tipos de display, unidades de medida, flexbox, grid layout, posicionamiento y diseño web responsivo.</p>
            </li>
            <li><b>Ejercicios de laboratorio – Resultados</b>
              <p>En el Laboratorio 02A se diseñó una página web aplicando flexbox, diseño fluido y técnicas responsivas, logrando una correcta adaptación del contenido a distintos tamaños de pantalla.</p>
            </li>
            <li><b>Reflexión</b>
              <p><b>¿Qué aprendí?</b> Se aprendió a estructurar y diseñar páginas web utilizando estándares modernos.</p>
              <p><b>¿Cómo aprendí?</b> Mediante la integración de teoría con ejercicios prácticos de maquetación y diseño.</p>
            </li>
          </ol>
        </div>
        {/* Semana 03 */}
        <div className="semana-card semana-glow-unidad1" style={semanaCardStyle}>
          <h3 style={{marginTop: 0, color: 'var(--primary)'}}>Semana 03 – Librerías CSS: Bootstrap y Tailwind</h3>
          <ol>
            <li><b>Descripción de los temas aprendidos</b>
              <p>Se desarrollaron interfaces frontend utilizando las librerías CSS Bootstrap y Tailwind. Se trabajaron layouts, componentes, tipografía, flexbox avanzado y elementos de Application UI como botones, formularios, navegación y componentes visuales.</p>
            </li>
            <li><b>Ejercicios de laboratorio – Resultados</b>
              <p>Se desarrolló un sitio web aplicando estilos y componentes de librerías CSS, cumpliendo con criterios de diseño moderno y responsivo.</p>
            </li>
            <li><b>Reflexión</b>
              <p><b>¿Qué aprendí?</b> A optimizar el desarrollo visual mediante el uso de librerías CSS.</p>
              <p><b>¿Cómo aprendí?</b> A través de la práctica guiada y la resolución de una práctica calificada.</p>
            </li>
          </ol>
        </div>
        {/* Semana 04 */}
        <div className="semana-card semana-glow-unidad1" style={semanaCardStyle}>
          <h3 style={{marginTop: 0, color: 'var(--primary)'}}>Semana 04 – JavaScript y TypeScript</h3>
          <ol>
            <li><b>Descripción de los temas aprendidos</b>
              <p>Se estudiaron los fundamentos de JavaScript y TypeScript, incluyendo tipos de datos, operadores, estructuras de control, funciones y closures. Además, se trabajó la manipulación del DOM y el uso de Canvas para animaciones y gráficos.</p>
            </li>
            <li><b>Ejercicios de laboratorio – Resultados</b>
              <p>En el Laboratorio 04 se desarrolló una animación básica utilizando JavaScript y Canvas, demostrando el control de eventos y gráficos.</p>
            </li>
            <li><b>Reflexión</b>
              <p><b>¿Qué aprendí?</b> A dotar de interactividad y dinamismo a una página web.</p>
              <p><b>¿Cómo aprendí?</b> Mediante la programación práctica y el análisis de ejemplos funcionales.</p>
            </li>
          </ol>
        </div>
        {/* Semana 05 */}
        <div className="semana-card semana-glow-unidad1" style={semanaCardStyle}>
          <h3 style={{marginTop: 0, color: 'var(--primary)'}}>Semana 05 – Frameworks JavaScript: Fundamentos</h3>
          <ol>
            <li><b>Descripción de los temas aprendidos</b>
              <p>Se introdujo el uso de frameworks JavaScript, analizando su estructura, gestión de dependencias y desarrollo basado en componentes. Se trabajó el uso de JSX, props y children, así como diferentes estrategias de estilos.</p>
            </li>
            <li><b>Ejercicios de laboratorio – Resultados</b>
              <p>En el Laboratorio 05A se implementó la comunicación entre componentes padre e hijo utilizando props y children.</p>
            </li>
            <li><b>Reflexión</b>
              <p><b>¿Qué aprendí?</b> A construir interfaces modulares y reutilizables.</p>
              <p><b>¿Cómo aprendí?</b> Mediante el desarrollo incremental de componentes y ejercicios guiados.</p>
            </li>
          </ol>
        </div>
        {/* Semana 06 */}
        <div className="semana-card semana-glow-unidad1" style={semanaCardStyle}>
          <h3 style={{marginTop: 0, color: 'var(--primary)'}}>Semana 06 – Eventos y Consumo de APIs</h3>
          <ol>
            <li><b>Descripción de los temas aprendidos</b>
              <p>Se trabajaron eventos, renderizado condicional e iterativo, manejo de formularios, routing y consumo de APIs usando promesas, async/await y Axios.</p>
            </li>
            <li><b>Ejercicios de laboratorio – Resultados</b>
              <p>Se desarrolló una aplicación que consume datos de una API externa y los muestra dinámicamente en la interfaz.</p>
            </li>
            <li><b>Reflexión</b>
              <p><b>¿Qué aprendí?</b> A integrar datos externos en aplicaciones frontend.</p>
              <p><b>¿Cómo aprendí?</b> Aplicando programación práctica orientada a problemas reales.</p>
            </li>
          </ol>
        </div>
        {/* Semana 07 */}
        <div className="semana-card semana-glow-unidad1" style={semanaCardStyle}>
          <h3 style={{marginTop: 0, color: 'var(--primary)'}}>Semana 07 – Hooks</h3>
          <ol>
            <li><b>Descripción de los temas aprendidos</b>
              <p>Se estudiaron los hooks principales: useState, useEffect, useContext, useRef, useReducer, useCallback y useMemo, así como la creación de hooks personalizados.</p>
            </li>
            <li><b>Ejercicios de laboratorio – Resultados</b>
              <p>Se implementaron hooks para gestionar estados, efectos y lógica reutilizable en una aplicación.</p>
            </li>
            <li><b>Reflexión</b>
              <p><b>¿Qué aprendí?</b> A manejar el estado y el ciclo de vida de componentes de forma eficiente.</p>
              <p><b>¿Cómo aprendí?</b> Mediante ejercicios prácticos y evaluación de logro.</p>
            </li>
          </ol>
        </div>
        {/* Semana 08 */}
        <div style={semanaCardStyle}>
          <h3 style={{marginTop: 0, color: 'var(--primary)'}}>Semana 08 – Retroalimentación y Consolidación</h3>
          <ol>
            <li><b>Descripción de los temas aprendidos</b>
              <p>Se realizó la revisión de la evaluación de logro y se reforzaron los contenidos de la primera unidad.</p>
            </li>
            <li><b>Ejercicios de laboratorio – Resultados</b>
              <p>Se corrigieron observaciones y se mejoraron los trabajos desarrollados.</p>
            </li>
            <li><b>Reflexión</b>
              <p><b>¿Qué aprendí?</b> A identificar fortalezas y oportunidades de mejora.</p>
              <p><b>¿Cómo aprendí?</b> A través de la retroalimentación académica.</p>
            </li>
          </ol>
        </div>
      </div>
    </section>
    {/* Segundo Consolidado */}
  </>
);

export default PrimeraUnidad;

