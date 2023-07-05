import React from 'react';
import Card from './Card';
import style from './Cards.module.css'

export default function Cards(props) {
   const characters = props.characters;
   return (
      <div className={style.container}>
         {characters.map((elem) => (
            <Card
               key={elem.id}
               name={elem.name}
               status={elem.status}
               species={elem.species}
               gender={elem.gender}
               origin={elem.origin}
               image={elem.image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
            />
         ))};            
      </div>
   )
}
