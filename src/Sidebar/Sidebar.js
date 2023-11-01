import React from 'react'
import Catagory from './Catagory/Catagory';
import Price from './Price/Price';
import Color from './Color/Color';
import "./Sidebar.css"

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Catagory handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Color handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar