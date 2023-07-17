import React from "react";
import style from './Card.module.css'
import { useNavigate } from 'react-router-dom'


const Card = ( {id, name, status, species, gender, origin, image, onClose } ) => {
   const navigate = useNavigate;
   const handleNavigate = () => {
      navigate(`/detail/${id}`)
   }
   return (
      <div className={style.container} key={id} onClick={handleNavigate}>
         <button onClick={onClose} className={style.btn}>X</button>
         <img src={image} alt='' className={style.image}></img>
         <h2>{name}</h2>
         <div className={style.containerData}>
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h2>{origin?.name}</h2>
         </div>
      </div>
   );
}

export default Card