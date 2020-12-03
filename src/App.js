import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/resume/Resume';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import resumeData from './resumeData';

export default function App() {

  useEffect(() => {
    document.title = "Portfolio OUARHOU lhoussaine"
    return () => {
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <About resumeData={resumeData} />
      <Resume resumeData={resumeData} />
      <Portfolio resumeData={resumeData} />
      <ContactMe resumeData={resumeData} />
    </div>
  );

}
