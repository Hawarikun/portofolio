import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage.jsx";
import CodeSnippetPage from "./components/pages/CodeSnippet.jsx";
import PortofolioPage from "./components/pages/Portofolio.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portofolio" element={<PortofolioPage />} />
        <Route path="/codeSnippet" element={<CodeSnippetPage />} />
      </Routes>
    </div>
  );
}

export default App;
