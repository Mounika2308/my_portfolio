import { ThemeProvider } from "./context/ThemeContext"; // Assuming this is the file where the context was created
import {NavBar} from './components/NavBar';
import Home from './components/Home/Home';
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Projects from './components/Projects/Project';
import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <ThemeProvider>
    <Router>
      <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<div><Home /></div>}>
        <Route exact path="/project" element={<div><Projects /></div>} />
        <Route exact path="/resume" element={<div><Resume /></div>} />
        </Route>
      </Routes>
      <Footer />
    </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
