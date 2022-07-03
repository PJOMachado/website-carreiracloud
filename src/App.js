import Header from './components/Header/Header';
import './scss/main.scss';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Course from './components/Course/Course';
import About from './components/About/About';

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <About />
      <Course />
      <Footer />
    </div>
  );
}

export default App;
