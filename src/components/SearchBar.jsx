import style from './SearchBar.module.css'

import { useState } from 'react'

export default function SearchBar(props) {
   let [input, setInput] = useState("")

   const handleChange = (event) => {
      setInput(event.target.value)
   } 

   const handleSearch = (event) => {
      // event.preventDefault()

      props.onSearch(input)
      setInput("")
   }
   return (
      <div style={style.container}>
            <input className={style.input} onChange={handleChange} value={input} type='search' placeholder="Id"/>
            <button className={style.btn} onClick={handleSearch}>Agregar</button>
      </div>
   );
}
