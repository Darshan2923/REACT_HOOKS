import React, { useRef } from 'react'

//useRef hook is used to easiest way to 
//access and manipulate DOM elements
//same as document.getElementById
//React uses virtual DOM which
//removes the necessity to access individual 
//elements cause state manages the whole component at once

//So here we'll say our browser to focus on the 
//input made below...

//.current mat bhulna!!!

function RefTutorial() {
    const inputRef = useRef(null);

    const onClick = () => {
        inputRef.current.focus();
        //This will focus towards input even if you click on the button
        console.log(inputRef.current.value);
        // the inputRef.current is same as e.target.value
        inputRef.current.value = "";
        //Will clear the input whenever you click the button
    }


    return (
        <div>
            <h1>Darshan</h1>
            <input type="text" placeholder='Example...' ref={inputRef} />
            <button onClick={onClick}>Change Name</button>
        </div>
    );
}

export default RefTutorial