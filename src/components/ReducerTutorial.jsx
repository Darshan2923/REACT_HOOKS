import React, { useReducer, useState } from 'react'

//So the things happening her are: counter is incresed everytime and value of showText is flinking true to false and viceversa...
// useReducer is alternative to uaseState hook. Now let's see the use of this hook

//So now we are using two different state changes by one click.. for this kind of purpose, we can use useReducer hook when two or more states are changed...Single mechanism can be used instead of useState

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1, showText: state.showText }
        case "toggleShowText":
            return { count: state.count, showText: !state.showText }
        default:
            return state
    }
};

function ReducerTutorial() {
    // const [count, setCount] = useState(0);
    // const [showText, setShowText] = useState(true);
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: 0 })
    return (

        <div className="useReducer-container">
            <h1>{state.count}</h1>
            <button
                onClick={() => {
                    dispatch({ type: "increment" });
                    dispatch({ type: "toggleShowText" })
                }}
            >
                Click
            </button>

            {state.showText && <p>This is a text</p>}
        </div>
    )
}

export default ReducerTutorial