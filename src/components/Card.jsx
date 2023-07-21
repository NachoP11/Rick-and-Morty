import React from "react";
import { connect } from "react-redux"
import style from './Card.module.css'
import { useNavigate } from 'react-router-dom'
import { addCharacter, deleteCharacter } from "../Redux/Action"
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Card = ( {id, name, status, species, gender, origin, image, onClose } ) => {

   const dispatch = useDispatch();

   const favs = useSelector(state => state.favs)

   const navigate = useNavigate;

   const handleNavigate = () => {
      navigate(`/detail/${id}`)
   }

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(!isFav) {
         setIsFav(true)
         dispatch(addCharacter(id))
      } else {
         setIsFav(false)
         dispatch(deleteCharacter(id))
      }
   }

   const favoriteButton = isFav ? (
      <button onClick={handleFavorite}>❤️</button>
    ) : (
      <button onClick={handleFavorite}>🤍</button>
    );

    useEffect(() => {
      
    }, );

   return (
      <div className={style.container} key={id} onClick={handleNavigate}>
         <button onClick={onClose} className={style.btn}>X</button>
         <div>{favoriteButton}</div>
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

export function mapDispatchToProps(dispatch) {
   return {
      addCharacter: (id) => {
         dispatch(addCharacter(id))
      },
      deleteCharacter: (id) => {
         dispatch(deleteCharacter(id))
      },
   }
}

const mapStateToProps = (state) => {
   return {
     favs: state.favs
   };
 };

export default connect(mapStateToProps, mapDispatchToProps)(Card);
