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
import SavedMovies from '../Movies/SavedMovies/SavedMovies';
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import BurgerMenu from "../Header/BurgerMenu/BurgerMenu";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [isNavOpened, setIsNavOpened] = useState(false);

  const handleNavigationOpen = () => {
    setIsNavOpened(true);
  }

  const handleNavigationClose = () => {
    setIsNavOpened(false);
  }


  return (
    <div className="app">
      <div className='app__container'>
       <Routes>
         <Route path='/' element={
          <>
            <Header isUserLoggedIn={isUserLoggedIn} onNavOpen={handleNavigationOpen}/>
            <Main />
            <Footer />
          </>
        }/>
         <Route path='/movies' element={
           <>
             <Header isUserLoggedIn={isUserLoggedIn} onNavOpen={handleNavigationOpen} />
             <Movies />
             <Footer />
           </>
         }
         />
         <Route path='/saved-movies' element={
           <>
             <Header isUserLoggedIn={isUserLoggedIn} onNavOpen={handleNavigationOpen} />
             <SavedMovies />
             <Footer />
           </>
         }
         />
         <Route path='signup' element={<Register />} />
         <Route path='signin' element={<Login />} />
         <Route path='profile' element={
           <>
             <Header isUserLoggedIn={isUserLoggedIn} onNavOpen={handleNavigationOpen} />
             <Profile />
           </>
         }
         />
         <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <BurgerMenu isNavOpened={isNavOpened} onNavClose={handleNavigationClose}/>
      </div>
    </div>
  );
}

export default App;
