import React from 'react';
import Card from './Card';
import style from './Cards.module.css'

export default function Cards({characters, onSearch, onClose}) {
   if(!characters && characters.length < 1) return null;
   return (
      <div className={style.container}>
         {characters.map((character) => (
            
            <Card
               key={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin}
               image={character.image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
            />
         ))};            
      </div>
   )
}
