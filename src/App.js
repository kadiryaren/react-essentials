import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';


function App() {

  const [theme, setTheme] = useState('dark');

  useEffect(() => {

    document.body.className = theme;

  },[theme]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home theme={theme} setTheme={setTheme} />} />
        <Route path='/about' element={<About theme={theme} setTheme={setTheme} />} />
        <Route path='/contact' element={<Contact theme={theme} setTheme={setTheme} />} />
      </Routes>
    </>
  );
}

export default App;
