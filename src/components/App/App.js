import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import {useState} from "react";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true)

  return (
    <div className="app">
      <div className='app__container'>
       <Routes>
         <Route path='/' element={
          <>
            <Header isUserLoggedIn={isUserLoggedIn} />
            <Main />
            <Footer />
          </>
        }/>
         <Route path='/movies' element={
           <>
             <Header isUserLoggedIn={isUserLoggedIn} />
             <Movies />
           </>
         }
         />
         <Route path='signup' element={<Register />} />
         <Route path='signin' element={<Login />} />
         <Route path='profile' element={<Profile />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
