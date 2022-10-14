import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";

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
         <Route path='sign-up' element={<Register />} />
         <Route path='sign-in' element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
