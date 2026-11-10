import React, { useEffect, useState } from 'react';
import Auth from './Auth.jsx';
import './index.css';
const features = [
  { icon: '▤', title: 'CBT Practice', text: 'Prepare with timed quizzes, exam-style questions and instant results.', tag: 'EXAM READY' },
  { icon: '▧', title: 'Learning Library', text: 'Explore clear notes, topic summaries and useful study resources.', tag: 'STUDY SMART' },
  { icon: '✦', title: 'AI Tutor', text: 'Get concepts explained step by step, with examples you can understand.', tag: 'LEARN MORE' },
  { icon: '♜', title: 'IQ Battle', text: 'Challenge yourself with friendly knowledge competitions.', tag: 'TEST YOURSELF' },
];

const subjects = ['Mathematics', 'English Language', 'Biology', 'Chemistry', 'Physics', 'Economics'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState('');

  const showDemoNotice = (name) => {
    setNotice(`${name} is part of the Charllz IQ plan. We are building this feature next.`);
    window.setTimeout(() => setNotice(''), 4500);
  };

  return (
    <div className="site-shell">
      <Auth/>
      <header className="topbar">
        <a className="brand" href="#" aria-label="Charllz IQ home">
          <span className="brand-mark">C<span>✦</span></span>
          <span className="brand-name">Charllz <b>IQ</b><small>LEARN · PRACTICE · EXCEL</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#subjects" onClick={() => setMenuOpen(false)}>Subjects</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <button className="nav-login" onClick={() => showDemoNotice('Student sign in')}>Log in</button>
          <button className="button button-small" onClick={() => showDemoNotice('Student registration')}>Get started <span>↗</span></button>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot"></span> YOUR LEARNING JOURNEY STARTS HERE</div>
            <h1>Unlock your<br /><em>academic potential.</em></h1>
            <p className="hero-text">A smarter way for Nigerian secondary school students to learn, practise and prepare for success.</p>
            <div className="hero-actions">
              <button className="button" onClick={() => showDemoNotice('Getting started')}>Start learning <span>→</span></button>
              <a className="text-link" href="#features">Explore features <span>↘</span></a>
            </div>
            <div className="hero-proof">
              <div className="proof-icon">✓</div>
              <span>Built for JSS and SSS learners</span>
              <i></i>
              <span>Made for mobile and desktop</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Illustration of books and learning">
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="spark spark-one">✦</div><div className="spark spark-two">✧</div>
            <div className="book-stack">
              <div className="book book-back"><span>KNOWLEDGE</span></div>
              <div className="book book-mid"><span>DISCOVER</span></div>
              <div className="book book-front"><div className="book-seal">C</div><strong>YOUR<br/>FUTURE</strong><small>STARTS HERE</small></div>
              <div className="cap"><div className="cap-top"></div><div className="cap-base"></div><div className="tassel"></div></div>
            </div>
            <div className="art-caption"><b>01 / LEARN WITH PURPOSE</b><span>Knowledge opens doors.</span></div>
          </div>
          <div className="hero-bottom"><span>01</span><span className="bottom-line"></span><span>LEARN · GROW · EXCEL</span></div>
        </section>

        <section className="intro-strip" id="about">
          <div><span className="section-kicker">THE CHARLLZ IQ APPROACH</span><h2>Everything you need to<br /><em>move forward.</em></h2></div>
          <p>From understanding difficult topics to building exam confidence, Charllz IQ brings essential learning tools together in one student-friendly place.</p>
        </section>

        <section className="features-section" id="features">
          <div className="section-heading"><div><span className="section-kicker">YOUR LEARNING TOOLKIT</span><h2>Learn your way.</h2></div><span className="heading-note">DESIGNED FOR SECONDARY SCHOOL</span></div>
          <div className="feature-grid">
            {features.map((feature, i) => <article className="feature-card" key={feature.title}>
              <div className="feature-top"><span className="feature-icon">{feature.icon}</span><span className="feature-number">0{i + 1}</span></div>
              <span className="feature-tag">{feature.tag}</span>
              <h3>{feature.title}</h3><p>{feature.text}</p>
              <button className="card-link" onClick={() => showDemoNotice(feature.title)}>Explore feature <span>↗</span></button>
            </article>)}
          </div>
        </section>

        <section className="subjects-section" id="subjects">
          <div className="subjects-copy"><span className="section-kicker">BUILD A STRONG FOUNDATION</span><h2>Your subjects.<br /><em>Your progress.</em></h2><p>Start with the subjects that matter to your class and learning goals. More topics and resources will be added as the platform grows.</p><button className="button button-dark" onClick={() => showDemoNotice('Subject explorer')}>Explore subjects <span>→</span></button></div>
          <div className="subject-list">{subjects.map((subject, i) => <button key={subject} className="subject-row" onClick={() => showDemoNotice(subject)}><span className="subject-index">0{i + 1}</span><b>{subject}</b><span className="subject-arrow">↗</span></button>)}</div>
        </section>

        <section className="cta-section">
          <div className="cta-star">✦</div><span className="section-kicker">YOUR NEXT CHAPTER STARTS NOW</span>
          <h2>Small steps today.<br /><em>Brighter possibilities tomorrow.</em></h2>
          <p>Build good study habits, strengthen your understanding and keep moving forward.</p>
          <button className="button" onClick={() => showDemoNotice('Student registration')}>Join the learning journey <span>→</span></button>
        </section>
      </main>

      <footer className="footer"><a className="brand footer-brand" href="#"><span className="brand-mark">C<span>✦</span></span><span className="brand-name">Charllz <b>IQ</b><small>LEARN · PRACTICE · EXCEL</small></span></a><span>© {new Date().getFullYear()} Charllz IQ. Learning for a brighter future.</span><a href="#about">Back to top ↑</a></footer>
      {notice && <div className="notice" role="status">{notice}</div>}
    </div>
  );
}

export default App;
