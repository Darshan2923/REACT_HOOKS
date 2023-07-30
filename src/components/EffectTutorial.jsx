import React, { useEffect, useState } from 'react'
import axios from 'axios'

//Extremely used hook
//It will be called after the page rerenders
//This will be called every single time the state has been changed
//Mostly used to handle api calls
//It is called twice first for rendering the page and seconf when the state is changed 

//How to make it call once?
//useEffect allows us to pass an array 
//of states we want useEffect call whenevr that state changes. useEffect just listen to that changes 

function EffectTutorial() {
    const [count, setCount] = useState(0);

    const [data, setData] = useState("");
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => { setData(response.data[0].email) });
        console.log("API was called");
    }, [count]);
    // Above now, whenever the state of count will be changned, the useEffect will rerender everytime and 
    //console.log("API was called") will be run number of times as counter+2
    return (
        <>
            <div className="useEffect-container">
                Hello World!!
                {data}
            </div>
            <div className="counter">
                {count}
                <button onClick={() => setCount(count + 1)}>Increase</button>
            </div>
        </>
    )
}

export default EffectTutorial