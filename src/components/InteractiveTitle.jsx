import React from 'react';
import './InteractiveTitle.css';
import protoboard from '../assets/protoboard.jpg';  // Ruta a tu imagen
import fondotrs from '../assets/fondotrs.png';

const InteractiveTitle = () => {
  return (
    <div className="interactive-title">
      <svg viewBox="0 0 960 300">
        <symbol id="s-text">
          <text textAnchor="middle" x="50%" y="80%">
            Electro X
          </text>
        </symbol>

        <g className="g-ants">
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
        </g>
      </svg>
      <p className="description">
        Bienvenido a Electro X, tu plataforma interactiva para aprender electrónica.
      </p>
      <img src={protoboard} alt="protoboard" className="protoboard" />
      <img src={fondotrs} alt="fondotrs" className="fondotrs" />
    </div>
  );
}

export default InteractiveTitle;
