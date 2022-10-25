import React from 'react';
import './NotFoundPage.css';
import {useNavigate} from "react-router-dom";


function NotFoundPage(props) {
const navigate = useNavigate();

  return (
    <section className='notfoundpage'>
      <h2 className='notfoundpage__title'>404</h2>
      <p className='notfoundpage__subtitle'>Page not found</p>
      <button className='notfoundpage__goback-button' onClick={() => navigate(-1)}>Go back</button>
    </section>
  );
}

export default NotFoundPage;
