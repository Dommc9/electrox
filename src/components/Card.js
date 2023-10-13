import React from "react";
import PropTypes from "prop-types";
import "./cards.css";
import {BrowserRouter, Link, Route} from 'react-router-dom';

const inlineStyle = {
  padding: 5
}

const App =() => {
  const [page, setPage] = useState(() => {
    const { pathname } = window. location
    const page = pathname.slice(1)
    return page
  })

  const toPage = page => () => {
    setPage(page)
  }
}


function Card({ imageSource, title, text, url, customText }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <BrowserRouter className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {customText ? customText : text ? text : ""}
        </p>
        <Link to={url ? url : "#"} onClick={toPage('Ir a ')} target="_blank" className="btn btn-outline-secondary border-0" rel="noreferrer" style={inlineStyle}>
          Ir a {title}
        </Link>
        <Route path='/'>
          
        </Route>
      </BrowserRouter>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  customText: PropTypes.string
};

export default Card;
