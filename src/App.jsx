import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import PersonalInfo from "./Components/PersonalInfo";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<PersonalInfo />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/personal-info" element={<PersonalInfo />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
