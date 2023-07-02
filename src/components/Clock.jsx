import { useState, useEffect } from 'react';

const Clock = () => {

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
      }, []);
      
    const [date, setDate] = useState(new Date());
  
    function refreshClock() {
      setDate(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
          clearInterval(timerId);
        };
      }, []);

    return ( 
        <div className="bg-zinc-900 text-zinc-300">
            <span>{date.toLocaleDateString()}</span>
            {"  "}
            <span>{date.toLocaleTimeString()}</span>        
        </div>
     );
}

export default Clock;