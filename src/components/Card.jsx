import React from "react";
import style from './Card.module.css'


export default function Card(props) {
   const { name, status, species, gender, origin, image, onClose } = props;

   return (
      <div className={style.container}>
         <button onClick={() => { onClose() }} className={style.btn}>X</button>
         <img src={image} alt='' className={style.image}></img>
         <h2>{name}</h2>
         <div className={style.containerData}>
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h2>{origin}</h2>
         </div>
      </div>
   );
}
