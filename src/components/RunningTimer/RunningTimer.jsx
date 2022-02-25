import { Interval, DateTime, Duration } from 'luxon';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';


function RunningTimer() {

    const dispatch = useDispatch();

    const [elapsedTime, setElapsedTime] = useState();

    //grab timestamp of open run
    
    // console.log('startTime: ', startTime);
        const currentRun = useSelector(store=>store.currentRun)
        const startTime = DateTime.fromISO(currentRun.start_timestamp);
        // console.log('startTime: ', startTime);

        useEffect(()=> {
            let secTimer = setInterval( () => {
                const endTime = DateTime.now();

                setElapsedTime(Duration.fromObject({milliseconds:endTime.minus(startTime.toMillis())}).toFormat('hh:mm:ss'))
        }, 100)
        return () => clearInterval(secTimer);
        dispatch({type: 'FETCH_CURRENT_RUN'})

        },[])

    return(
        <p>Timer: {elapsedTime}</p>
    )
}

export default RunningTimer;