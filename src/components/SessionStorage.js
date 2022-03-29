import React, { useEffect, useState } from 'react'

const SessionStorage = () => {
    // States 
    const [count, setCount] = useState(0);

    useEffect(() => {
        var viewCount = sessionStorage.getItem('viewCount');
        if(viewCount == null){
            viewCount = 1;
        }else{
            // increment count
            viewCount = Number(viewCount) + 1;
        }
        sessionStorage.setItem('viewCount', viewCount);
        setCount(viewCount)
    }, [])
    return (
        <div>
            <h1>Page View is: </h1>
            <h1>{count}</h1>
        </div>
    )
}

export default SessionStorage

