import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import resumeData from './resumeData';

class App extends Component {
  componentDidMount(){
    document.title = "Portfolio OUARHOU lhoussaine"
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <ContactMe resumeData={resumeData} />
      </div>
    );
  }
}
export default App;