import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

const Detail = () => {
    const {id} = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        setTimeout(() => {
            axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(({data}) => {
                if (!data.name) {
                    window.alert("No existe un personaje con ese id")
                } else {
                    setCharacter(data)
                }
            })
        }, 2000)
    }, [id])

     
    return (

        <div>SOY UN DETAIL</div>
        
    )
}

export default Detail