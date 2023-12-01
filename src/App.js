import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { route } from './routes/route';
import Header from './layouts/header';
import Footer from './layouts/footer';
function App() {
  const [currentScrollPos, setCurrentScrollPos] = useState(window.scrollY);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isColor, setIsColor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollPos = window.scrollY;
      setPrevScrollPos(currentScrollPos);
      setCurrentScrollPos(newScrollPos);
      if (newScrollPos <= prevScrollPos) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }

      if (newScrollPos > 400) {
        setIsColor(true);
      } else {
        setIsColor(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentScrollPos, prevScrollPos]);

  return (
    <Router>
      <>
        {isHeaderVisible && <Header isColor={isColor} />}

        <Routes>
          <Route path={route.homepage.path} element={route.homepage.element} />
          <Route path={route.home.path} element={route.home.element} />
          <Route path={route.notFound.path} element={route.notFound.element} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;