
import React from 'react';


const bibliografia = [
  {
    icon: '🌐',
    title: 'MDN Web Docs.',
    desc: 'HTML y CSS',
    url: 'https://developer.mozilla.org/es/'
  },
  {
    icon: '📖',
    title: 'W3Schools.',
    desc: 'HTML Tutorial',
    url: 'https://www.w3schools.com/html/'
  },
  {
    icon: '📝',
    title: 'DEV Community.',
    desc: 'Advanced HTML Tags & New HTML Tags You Should Know in 2025',
    url: 'https://dev.to/purushoth_26/advanced-html-tags-new-html-tags-you-should-know-in-2025-1lpf'
  },
  {
    icon: '🔴',
    title: 'MDN Web Docs.',
    desc: 'Advanced text features',
    url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features'
  },
  {
    icon: '🎨',
    title: 'LambdaTest.',
    desc: 'Advanced CSS Tutorial: Level Up Your Web Development Skills',
    url: 'https://www.lambdatest.com/blog/advanced-css-tutorial/'
  },
  {
    icon: '💡',
    title: 'Microverse Blog.',
    desc: '10 Advanced HTML and CSS Coding Challenges',
    url: 'https://www.microverse.org/blog/10-advanced-html-css-coding-challenges'
  },
  {
    icon: '🚀',
    title: 'Medium.',
    desc: 'Mastering Advanced Web Development: Techniques, Tools, and Best Practices',
    url: 'https://muhammedcuma.medium.com/mastering-advanced-web-development-techniques-tools-and-best-practices-36376a949914'
  },
  {
    icon: '🛡️',
    title: 'MDN Web Docs.',
    desc: 'Advanced JavaScript objects',
    url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects'
  }
];

const Bibliografia = () => (
  <section id="bibliografia" className="animated-section bibliografia-section">
    <h2 className="bibliografia-title">
      <span className="bibliografia-icon">📚</span> Bibliografía <span className="bibliografia-icon">🔗</span>
    </h2>
    <div className="bibliografia-grid">
      {bibliografia.map((item, idx) => (
        <div className="bibliografia-card" key={idx}>
          <span className="bibliografia-card-icon">{item.icon}</span>
          <div className="bibliografia-card-content">
            <b>{item.title}</b> <span className="bibliografia-card-desc">{item.desc}</span>
            <br/>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="bibliografia-link">{item.url}</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Bibliografia;
