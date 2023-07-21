import React from 'react';
import { useSelector } from "react-redux"
import Card from "../Card"

export default function Favorites() {
  
  const favs = useSelector(state => state.favs)

  return (
    <div>
      {favs?.map(character => <Card key={character.id} character={character} />)}
    </div>
  )
}

  
