import React from "react";
import { Routes, Route } from "react-router-dom";
import PageContainer from "../containers/PageContainer";

class App extends React.Component {

  render() {
    return (
      <Routes>
        <Route path="/" element={ <PageContainer page="home"/> } />
        <Route path="/about" element={ <PageContainer page="about"/> } />
        <Route path="/research" element={ <PageContainer page="research"/> } />
        <Route path="/projects" element={ <PageContainer page="projects"/> } />
        <Route path="/resume" element={ <PageContainer page="resume"/> } />
        <Route path="/contact" element={ <PageContainer page="contact"/> } />
      </Routes>
    );
  }
}

export default App;
