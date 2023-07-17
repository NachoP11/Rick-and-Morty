import React, {useState} from "react";
import { useNavigate } from 'react-router-dom'
import style from './Login.module.css'


const Login = ({setLogin}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const miEmail = "hola@gmail.com"
    const miPass = "Hola123"
    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault(); 
        if ( username== miEmail && password == miPass) {
            setError("")
            setLogin(true)
            navigate("/home")
        }else{setError("nacho puto")}

        
    }


    return (
        <div className={style.container}>
            <h2 className={style.container.h2}>Iniciar sesión</h2>
            <form onSubmit={handleLogin}>
                <div className={style.labelContainer}>
                    <input type="text" name="username" placeholder="Usuario" value={username} onChange={e => setUsername(e.target.value)}/>
                </div>
                <br />
                <div className={style.labelContainer}>
                    <input type="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                {error && (
                    <p style={{color: "red"}}>{error}</p>
                )}
                <button className={style.btn} type="submit">Ingresar</button>
            </form>
        </div>
    )
}

export default Login;