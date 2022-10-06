import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className='app__container'>
       <Routes>
         <Route path='/' element={
          <>
            <Header />
            <Main />
          </>
        }/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
