
import './App.css';
import Welcome from './components/header/header';
import Skills from './components/skills/skills';
import Project1 from './components/projects/project1';
import Project2 from './components/projects/project2';
import About from './components/about/about';
import Form from './components/form/form';
import Navbar from './components/navbar/navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Welcome/>
      <Skills/>
      <Project1/>
      <Project2/>
      <About/>
      <Form/>
    </div>
  );
}

export default App;
