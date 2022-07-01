import Header from './components/Header/Header';
import './scss/main.scss';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
