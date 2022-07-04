import Header from './components/Header/Header';
import './scss/main.scss';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Course from './components/Course/Course';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Testimonials from './components/Testimonials/Testimonials';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <About />
      <Course />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
