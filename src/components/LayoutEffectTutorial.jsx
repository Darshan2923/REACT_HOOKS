import React, { useEffect, useLayoutEffect } from 'react'

//Similar to useEffect Hook.
//

function LayoutEffectTutorial() {
    useEffect(() => {
        // Code Here Will Run After Component Has Been Mounted To The Screen And Updates Inside
        console.log('useEffect');
    }, []);
    useLayoutEffect(() => {
        //Code here will run after the component has been rendered on screen and layout is updated in DOM
        console.log("useLayout Effect");
    }, []);
    //Above one will be called before useEffect cause it is called before any thing is printed to the screen and after rendering of return
    return (
        <div></div>
    )
}

export default LayoutEffectTutorial