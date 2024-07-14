import React, { useState, useEffect } from 'react';
import styles from './index.module.css'

const Timer = ({hour, minute, day}) => {
    const [Day, setDay] = useState(day);
    const [Hour, setHour] = useState(hour);
    const [Minute, setMinute] = useState(minute);
    
    useEffect(() => {
        setTimeout(() => {
            if (Minute <= 0) {
                setMinute(59);
                if (Hour <= 0) {
                    setHour(23);
                    if (Day > 0)
                        setDay(Day - 1);
                } else { setHour(Hour - 1); }
            } else { setMinute(Minute - 1) }
        }, 1000)
    }, [Minute])

    return (
        <div key={Hour} className={styles.timerWrapper}>
            <span className='me-1'>{Day}D</span>:
            <span className='mx-1'>{Hour}H</span>:
            <span className='ms-1'>{Minute}M</span>
        </div>
    );
}

export default Timer;
