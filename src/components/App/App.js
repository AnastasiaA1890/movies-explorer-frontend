import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./App.css";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import { useState } from "react";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../Movies/SavedMovies/SavedMovies";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import BurgerMenu from "../Header/BurgerMenu/BurgerMenu";
import ProtectedRoute from "../ProtectedRoute";

import * as SiteAuth from "../../utils/SiteAuth";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isNavOpened, setIsNavOpened] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false)

  const handleNavigationOpen = () => {
    setIsNavOpened(true);
  };

  const handleNavigationClose = () => {
    setIsNavOpened(false);
  };

  const handleRegister = ({ name, email, password }) => {
    SiteAuth
      .register({ name, email, password })
      .then((res) => {
        console.log(res)
        setIsSuccessful(true)
      })
  }

  return (
    <>
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
              <Movies />
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
          <Route path="signin" element={<Login />} />
          <Route exact path="/profile/*" element={
            <ProtectedRoute path='' isUserLoggedIn={isUserLoggedIn}>
              <Header isUserLoggedIn={isUserLoggedIn} onNavOpen={handleNavigationOpen} />
              <Profile />
            </ProtectedRoute>
          }>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <BurgerMenu isNavOpened={isNavOpened} onNavClose={handleNavigationClose} />
    </>
  );
}

export default App;
