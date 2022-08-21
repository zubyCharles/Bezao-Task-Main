import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Menu from './components/Menu';
import BlogPosts from './components/BlogPosts';
import Footer from './components/Footer';

function App() {
  const [showSideBar, setSideBar] = useState(false);

  useEffect(() => {
    if (showSideBar) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [showSideBar]);

  return (
    <main className="">
      <Header showSideBar={showSideBar} setSideBar={setSideBar} />
      <Nav showSideBar={showSideBar} setSideBar={setSideBar} />
      <Intro />
      <Menu />
      <BlogPosts />
      <Footer />
    </main>
  );
}

export default App;
