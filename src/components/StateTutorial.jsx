import React, { useState } from 'react'

// Here we will begin with out UseState Hook
// We make a basic counter  mechanism
//Now, even if we make a function inicrement 
//To do the +1 to the counter the value of counter
//will not change. This is because the 
//page will not rerender every time the counter changes it's value.
//Hence we use useState hook to deal with non-rerendering
//This will cause page to rerender everytime
//we trigger any event based on the functions...








// Example 1
/*function StateTutorial() {
    const [counter, setCounter] = useState(0)
    /*const increment = () => {
        console.log("Incremented"); //this line won't be executed as it's inside an
        counter = counter + 1;
        console.log(counter);
    }*/
//     return (
//         <>
//             <div >{counter}</div>
//             {/* <button onClick={increment}>Increment</button> */}
//             <button onClick={(e) => setCounter(counter + 1)}>Increment</button>
//             {/* We can  also put setCounter in increment function as well*/}
//         </>

//     )
// }






//Example-2

function StateTutorial() {
    const [inputvalue, setInputValue] = useState("Darshan")

    const changeName = (e) => {
        return (
            setInputValue(e.target.value)
        );
    }
    return (
        <div className="container">
            <input type="text" placeholder='Enter something...' onChange={changeName} />
            {inputvalue}
        </div>
    )
}



export default StateTutorial