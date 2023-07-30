import React, { createContext } from 'react'
import Login from './Login'
import User from './User'

//This will work but state management becomes headache when states increase in number
//so instead we'll not pass props and make a context to be globally accessible to the Login and User components...

//I am making the context here in this file only

export const AppContext = createContext(null);



function ContextTutorial() {
    const [username, setUsername] = React.useState('');
    return (
        <>
            {/* <Login setUsername={setUsername} />
            <User username={username} /> */}

            <AppContext.Provider value={{ username, setUsername }}>
                <Login />
                <User />
            </AppContext.Provider>
        </>
    )
}

export default ContextTutorial