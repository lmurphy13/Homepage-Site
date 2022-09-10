import React from "react";
import { Routes, Route } from "react-router-dom";
import PageContainer from "../containers/PageContainer";
import ScreenSize from "./ScreenSize";
class App extends React.Component {

  render() {
    return (
      <div>
        <ScreenSize />
        <Routes>
          <Route path="/" element={ <PageContainer page="home"/> } />
          <Route path="/about" element={ <PageContainer page="about"/> } />
          <Route path="/research" element={ <PageContainer page="research"/> } />
          <Route path="/projects" element={ <PageContainer page="projects"/> } />
          <Route path="/resume" element={ <PageContainer page="resume"/> } />
          <Route path="/contact" element={ <PageContainer page="contact"/> } />
        </Routes>
      </div>
    );
  }
}

export default App;
