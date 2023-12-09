import { render } from 'react-dom';
import App from './App.js';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import Mission from './components/Mission.js';
import About from './components/About.js';
import NoPage from './components/NoPage.js';
import './index.css';


export default function AppDefault() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="mission" element={<Mission />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppDefault />);