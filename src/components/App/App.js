import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="app">
      <div className='app__container'>
       <Routes>
         <Route path='/' element={
          <>
            <Header />
            <Main />
            <Footer />
          </>
        }/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
