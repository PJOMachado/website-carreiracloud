import Header from './components/Header/Header';
import './scss/main.scss';
// eslint-disable-next-line no-unused-vars
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        {/* <Route path='/' element={<Header />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
