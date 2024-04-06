/* Copyright (c) 2024 - Liam M. Murphy */

import Page from "./components/Page";
import { Route, Routes } from "react-router-dom";
import "./css/style.css";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Page page="home" />} />
                <Route path="about" element={<Page page="about" />} />
                <Route path="research" element={<Page page="research" />} />
                <Route path="projects">
                    <Route index element={<Page page="projects" />} />
                    <Route path="pc-build" element={<Page page="pc-build" />} />
                </Route>
                <Route path="contact" element={<Page page="contact" />} />
                {/* Wildcard path is for unknown routes. Routing to a Page without a prop defaults to the 404 page */}
                <Route path="*" element={<Page />} />
            </Routes>
        </div>
    );
}

export default App;
