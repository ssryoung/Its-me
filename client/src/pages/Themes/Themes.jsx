import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { postPortfolios } from '../../utils/api';

import './Themes.css';
import Header from '../../components/Header';

const Themes = () => {
  return (
    <div className="ThemesWrap">
      <div
        className="MainBG"
        style={{ height: '10vh', position: 'relative' }}
      ></div>
      <Header />
      <div className="ThemesWrap2">
        <h1>디자인을 선택하세요.</h1>
        <div className="Themes">
          <Link to="/edit">
            <img src="https://images.template.net/wp-content/uploads/2017/04/Design-Portfolio-Template.jpg" />
            <span id="1">THEME 1</span>
          </Link>
          <Link to="/edit">
            <img src="https://images.template.net/wp-content/uploads/2017/04/Design-Portfolio-Template.jpg" />
            <span id="2">THEME 2</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Themes;
