import { DateTime } from 'luxon';
import { useEffect, useState } from 'react'

function CurrentTime() {

    const [timeNow, setTimeNow] = useState();

    useEffect(()=>{
        
            let secTimer = setInterval( () => {
                setTimeNow(DateTime.now().toLocaleString(DateTime.TIME_WITH_SECONDS));
            }, 100)
        
            return () => clearInterval(secTimer);
        },[]);
        
    
    return(
        <p>Current Time: {timeNow} </p>
    )
}

export default CurrentTime;