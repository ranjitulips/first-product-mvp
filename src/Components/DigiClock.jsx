import  {useState, useEffect} from "react"

const  DigiClock =()=> {

    const [time, setTime] = useState(new Date());

    useEffect(()=>{

        const intervalId = setInterval(()=>{
            setTime(new Date())
        }, 1000)

       return ()=>clearInterval(intervalId);

    }, [])

   const formatTime=(time)=>{
    return time.toLocaleTimeString()
   } 


    return(
        <div>
            {formatTime(time)}
        </div>
    )
}

export default DigiClock;