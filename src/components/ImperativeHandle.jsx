import React, { useRef } from 'react'
import Button from './Button'

function ImperativeHandle() {
    const buttonRef = useRef();
    return (
        <div className='useImperativeHandle-container'>
            <button onClick={() => buttonRef.current.alterToggle()}>Button From Parent</button>
            <Button ref={buttonRef} />
        </div>
    )
}

export default ImperativeHandle