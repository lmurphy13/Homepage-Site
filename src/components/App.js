// Copyright (c) 2023 Liam M. Murphy

import React from "react";
import { Routes, Route } from "react-router-dom";
import PageContainer from "../containers/PageContainer";
class App extends React.Component {

  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={ <PageContainer page="home"/> } />
          <Route path="/about" element={ <PageContainer page="about"/> } />
          <Route path="/research" element={ <PageContainer page="research"/> } />
          <Route path="/projects" element={ <PageContainer page="projects"/> } />
          <Route path="/resume" element={ <PageContainer page="resume"/> } />
          <Route path="/contact" element={ <PageContainer page="contact"/> } />
          {/* Wildcard path is for unknown routes. Routing to a PageContainer without a prop defaults to the 404 page */}
          <Route path="*" element={ <PageContainer />} />
        </Routes>
      </div>
    );
  }
}

export default App;
