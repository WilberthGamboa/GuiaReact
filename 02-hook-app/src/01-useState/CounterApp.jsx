import React, { useState } from 'react'

export const CounterApp = () => {
    const [counters, setcounter] = useState({
        counter1:10,
        counter2:20,
        counter3:30,
    });

    const {counter1, counter2,counter3} = counters;

    const addCounter = (value) => {
        setcounter({
            ...counters,
            counter1:counter1+value
        })
        
    }



  return (
   <>
    <h1>Contador 1: {counter1}</h1>
    <h1>Contador 2: {counter2}</h1>
    <h1>Contador 3: {counter3}</h1>
    <br />
    <button className='btn btn-outline-primary' onClick={() => addCounter(1)}>+1</button>
   
   </>
    
  )
}
