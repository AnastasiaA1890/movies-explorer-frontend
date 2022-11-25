import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./App.css";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import { useState, useEffect } from "react";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../Movies/SavedMovies/SavedMovies";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import BurgerMenu from "../Header/BurgerMenu/BurgerMenu";
import ProtectedRoute from "../ProtectedRoute";
import { CurrentUserContext } from "../../context/CurrentUserContext";

import * as SiteAuth from "../../utils/SiteAuth";
import { moviesApi } from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isNavOpened, setIsNavOpened] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [listOfMovies, setListOfMovies] = useState([]);
  const [filteredItem, setFilteredItem] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  function handleToken() {
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
      SiteAuth
      .checkToken(jwt)
      .then((res) => {
        if (res) {
          setIsUserLoggedIn(true)
          setEmail(res.email)
          navigate('/movies')
        }
      })
    }
  }

  useEffect(() => {
    handleToken();
  }, []); 

  const handleNavigationOpen = () => {
    setIsNavOpened(true);
  };

  useEffect(() => {
    if (!isUserLoggedIn) {
      return
    }
    mainApi
      .getUserData(localStorage.getItem('jwt'))
        .then((res) => {
          setCurrentUser(res)
        })
        .catch((err) => {
          console.log(err)
        });
  }, [isUserLoggedIn])


  /* useEffect(() => {
    if (!isUserLoggedIn) {
      return
    }
    moviesApi
      .getMovies(localStorage.getItem('jwt'))
      .then((res) => {
        setListOfMovies(res)
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [isUserLoggedIn]) */

  const handleNavigationClose = () => {
    setIsNavOpened(false);
  };

  function handleUpdateUser(data) {
    mainApi
      .editProfile(data, localStorage.getItem('jwt'))
        .then((res) => {
          setCurrentUser(res)
        })
        .catch((err) => {
          console.log(err)
        })
  }

  function handleFilterMovies(data) {
    moviesApi
      .getMovies(localStorage.getItem('jwt'))
      .then((res) => {
        setListOfMovies(res)
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
    setFilteredItem(data)
  }

  function handleShortMovies(data) {
    console.log(data)
  }

  const handleRegister = ({ name, email, password }) => {
    SiteAuth
      .register({ name, email, password })
      .then((res) => {
        setIsSuccessful(true);
        navigate('/signin')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleLogin = ({ email, password }) => {
    SiteAuth
    .login({ email, password })
    .then((res) => {
      if(res.token) {
        localStorage.setItem('jwt', res.token);
        handleToken();
        navigate('/movies');
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }


  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    navigate('/signin');
    setIsUserLoggedIn(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route exact path="/"
            element={
              <>
                <Header isUserLoggedIn={isUserLoggedIn} onNavOpen={handleNavigationOpen} />
                <Main />
                <Footer />
              </>
            }
          />
          <Route exact path="/movies/*" element={
            <ProtectedRoute path='' isUserLoggedIn={isUserLoggedIn}>
              <Header isUserLoggedIn={isUserLoggedIn} onNavOpen={handleNavigationOpen} />
              <Movies listOfMovies={listOfMovies} filteredItem={filteredItem} onFilterMovies={handleFilterMovies} onShortMovies={handleShortMovies}/>
              <Footer />
            </ProtectedRoute>
          }>
          </Route>
          <Route exact path="/saved-movies/*" element={
            <ProtectedRoute path='' isUserLoggedIn={isUserLoggedIn}>
              <Header isUserLoggedIn={isUserLoggedIn} onNavOpen={handleNavigationOpen} />
              <SavedMovies />
              <Footer />
            </ProtectedRoute> 
          }>
          </Route>
          <Route path="signup" element={<Register handleRegister={handleRegister} />} />
          <Route path="signin" element={<Login handleLogin={handleLogin} />} />
          <Route exact path="/profile/*" element={
            <ProtectedRoute path='' isUserLoggedIn={isUserLoggedIn}>
              <Header isUserLoggedIn={isUserLoggedIn} onNavOpen={handleNavigationOpen} />
              <Profile onUpdateUser={handleUpdateUser} handleSignOut={handleSignOut} name={name} email={email} />
            </ProtectedRoute>
          }>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <BurgerMenu isNavOpened={isNavOpened} onNavClose={handleNavigationClose} />
    </CurrentUserContext.Provider>
  );
}

export default App;
