import React from "react";
import Card from "./Card";

import image1 from "../assets/image1.jpeg";
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpeg';
import image7 from '../assets/image7.png';
import image8 from '../assets/image8.jpeg';
import image9 from '../assets/image9.jpeg';
import circuitoscomplejos from '../assets/circuitoscomplejos.png';
import ejercicios2 from '../assets/ejercicios2.png';
import circuit1 from '../assets/circuit1.png';
import valoracion from '../assets/valoracion.jpg';


const cards = [
  {
    id: 1,
    title: "Componentes Básicos",
    image: image1,
    url: "",
    customText: "En esta sección, nos embarcaremos en un emocionante viaje para explorar los componentes básicos de la electrónica. Aprenderemos sobre su definición, función, simbología y mucho más. Los componentes que cubriremos incluyen resistencias, capacitores, diodos, transistores y circuitos integrados.",
  },
  {
    id: 2,
    title: "Ley de Ohm",
    image: image2,
    url: "",
    customText: "En esta sección, nos adentraremos en el corazón de la electrónica al explorar la Ley de Ohm, una ley fundamental que rige el mundo de los circuitos eléctricos. Aprenderemos sobre su definición, su función en el análisis y diseño de circuitos, su simbología y cómo se aplica en situaciones prácticas. ",
  },
  {
    id: 3,
    title: "Circuitos I",
    image: image3,
    url: "",
    customText: "En esta sección, daremos nuestros primeros pasos en el mundo de los circuitos eléctricos. Aprenderemos sobre su definición, los componentes básicos que los conforman, cómo se representan a través de diagramas y cómo funcionan en la práctica. ",
  },
  {
    id: 4,
    title: "Consejos I",
    image: image5,
    url: "",
    customText: "En esta sección, te daremos consejos y tips para que tengas en cuanta a la hora de realizar un ejercicio o practica de circuitos.",
  },
  {
    id: 5,
    title: "Ejercicios de Circuitos I",
    image: image4,
    url: "",
    customText: "En esta sección, vamos a poner a prueba todo lo que hemos aprendido hasta ahora. Es hora de aplicar nuestros conocimientos sobre componentes electrónicos, la Ley de Ohm y los circuitos eléctricos para resolver ejercicios prácticos."
  },
  {
    id: 6,
    title: "Delta-Estrella y Estrella-Delta",
    image: image7,
    url: "",
    customText: "En esta sección, aprenderemos un nuevo tipo de circuitos, donde aprenderemos a saber cómo se resuelven y cómo se incorporan con otros circuitos.",
  },
  {
    id: 7,
    title: "¿Cómo resolver circuitos grandes/complejos?",
    image: circuitoscomplejos,
    url: "",
    customText: "En esta sección, aprenderás a identificar cuales resistencias estan en serie, paralelo, estrella-delta o delta estrella en un circuito."
  },
  {
    id: 8,
    title: "Consejos II",
    image: image5,
    url: "",
    customText: "En esta sección, te daremos más consejos y tips para que tengas en cuanta a la hora de realizar un ejercicio o practica de circuitos.",
  },
  {
    id: 9,
    title: "Ejercicios de Circuitos II",
    image: ejercicios2,
    url: "",
    customText: "En esta sección, vamos a poner a prueba todos los nuevos conceptos que aprendimos. Veremos qué tanto hemos aprendido practicando ejercicios un poco más complejos."
  },
  {
    id: 10,
    title: "Codigo de color de las Resistencias",
    image: image8,
    url:"",
    customText: "Uso de la tabla de código de Colores y Nemotecnia como de manera didáctica y fácil conocer, como a partir de los colores de la resistencia, identificar el valor en ohmios de las mismas."
  },
  {
    id: 11,
    title: "Cómo se usa la Protoboard",
    image: image9,
    url:"",
    customText: "Se presenta la configuración de conexión del Protoboard o placa de pruebas, para utilizarlo en nuestros talleres y/o laboratorios prácticos."
  },
  {
    id: 12,
    title: "Circuitos básicos en la Protoboard",
    image: circuit1,
    url:"",
    customText: "Aprenderemos a armar nuestros primeros circuitos en la Protoboard para ir aprendiendo a construir circuitos en la protoboard. "
  },
  {
    id: 13,
    title: "Consejos III",
    image: image5,
    url:"",
    customText: "En esta sección, te daremos algunos consejos y tips para que tengas en cuenta a la hora de construir un circuito en una Protoboard;para que no cometas errores que llegen a dañar tus componentes. "
  },
  {
    id: 14,
    title: "Explora electrónica avanzada",
    image:image6,
    url:"",
    customText: "Si crees que ya estas preparado para aprender cosas más avanzadas, en esta sección pondrás a rpueba tus conocimientos previos de manera más avanzada."
  },
  {
    id: 15,
    title: "Califica nuestro curso",
    image: valoracion,
    url: "",
    customText: "Te invitamos a que valores nuestro curso de electrónica básica y nos dejes tus comentarios en que te pareció bien, si aprendiste algo y en qué crees que podríamos mejorar. "
  },

];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id, customText }, index) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} customText={customText} />
            {index === 2 && <div className="mb-3 d-md-none"></div>} {/* Agrega espacio después de la tercera tarjeta solo en dispositivos móviles */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;