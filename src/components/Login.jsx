import React, { useContext } from 'react'
import { AppContext } from './ContextTutorial'

function Login() {
    const { setUsername } = useContext(AppContext)
    return (
        <input type="text"
            onChange={(e) => {
                setUsername(e.target.value);
            }}
        />
    )
}

export default Login;