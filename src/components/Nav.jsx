import React from "react";
import { useNavigate } from 'react-router-dom'


const Nav = ({logOut}) => {
    const navigate = useNavigate()
    return (
        <nav>
            <div>
                <h3>PT-14A</h3>
            </div> 
            <div>
                <button onClick={() => navigate("/home")}>Home</button>
                <button onClick={() => navigate("/about")}>About</button>
                <button onClick={() => navigate(-1)}>Back</button>
                <button onClick={() => logOut()}>LogOut</button>
                <button onClick={() => navigate("/favorites")}>Favorites</button>
            </div>
        </nav>
    )
}

export default Nav