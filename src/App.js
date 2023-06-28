import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Blog from './pages/blog/Blog';
import Projects from './pages/projects/Projects';
import Navbar from './components/Navbar';
import Loadingscreen from './components/Loadingscreen/Loadingscreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulating a 2-second loading time. Replace this with your actual loading logic.
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      {isLoading ? (
        <Loadingscreen /> // Render the Loadingscreen component when isLoading is true
      ) : (
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
