# useState
Tenemos que en los useState podemos guardar información de objetos cómo ejemplo:
``` Javascript
  const [counters, setcounter] = useState({
        counter1:10,
        counter2:20,
        counter3:30,
    });   
```
Tenemos casos en los cuales no queremos modificar todo el objeto por lo cual vemos un ejemplo de cómo se haría:
``` Javascript
  const addCounter = (value) => {
        setcounter({
            ...counters,
            counter1:counter1+value
        })   
    }
```

# Custom Hook
1) Recordemos que los custom hooks son funciones que al final devuelven algo
2) De igual forma los custom hooks usan hooks propios de react para funcionar

## useCounter
Recordamos una peculiaridad de los eventos:

1) El siguiente evento es posible invocarlo de esa forma debido a que no recibe nada cómo parametro
``` Javascript
<button className="btn btn-primary" onClick={increment}>+1</button>
```
Función que le corresponde
``` Javascript
 const increment = () =>{
        setcounter(counter+1);
    }
```
2) Ahora si nuestra función recibe algo como parametro e intentamos invocarla de la misma forma en el onclick tendremos problemas debido a que se estará pasando el **EVENTO** del onclick, por lo cual es necesario utilizar la forma completa del método. 

Cuando se invoque la función sería de la siguiente forma:

``` Javascript
<button className="btn btn-primary" onClick={()=> increment()}>+1</button>
```
Función: 
``` Javascript
 const increment = (value=1) =>{
        setcounter(counter+value);
    }
```

## useEffect  -- consejo obtener datos de input 

1)Recordemos quel el useEffect en su forma simple nos ayuda a que no se recarge constanteme un método cuando se redibuje el componente

``` Javascript
   useEffect(() => {
      console.log("hola")
    }, [])
```
2)Del target podemos obtener el name que nos sirve como identificador.

``` Javascript
   const onInputChange = ({target}) =>{
        const {name ,value} = target;
        setformState({
            ...formState,
            [name]:value
        })
    }
```
3) Html de donde viene la información
``` html
 <input type="text"
    className='form-control'
    placeholder="username"
    name='username'
    value={username}
    onChange={onInputChange}
    />
```
4) Podemos pasar "vigilar" el valor de una variable, si esta se modifica se dispara el useEffect, ejemplo: 
``` javascript
 useEffect(() => {
      console.log("soy el username")
    }, [username])


        useEffect(() => {
      console.log("soy el email")
    }, [email])
    
```
## Limpiar useEffect
1) Es importante limpiar el useEffect, cuando tengamos un componente que aparece y desaparece, aunque este desaparezca los eventos del mismo se siguen mostrando, ejemplo:

Lugar donde se invoca 
``` jsx
{(username==='strider2') &&  <Message/> }
```
Código de Message
``` javascript
import { useEffect } from "react"

export const Message = () => {
    useEffect(() => {
        window.addEventListener('mousemove',(event)=>{
            console.log("xdxdxd");
        })
      
        /*
        return () => {
          console.log("message unmounted")
        }
        */
      }, [])
  return (
   <>
   
    <h3>Usuario ya existe</h3>
   
   </>
  )
}
```
2) Podemos ver que es un condicional, aunque el componente se destruya el evento de addEventListener se **sigue ejecutando** y peor se hace un **stack** del evento ya que no se elimina, para limpiar el evento tenemos que utilizar el removeEventListener: 

``` javascript
import { useEffect } from "react"

export const Message = () => {
    useEffect(() => {
       const onMouseMove = ({x,y}) =>{
        const coords = {x,y}
        console.log(coords)
       }
      window.addEventListener('mousemove', onMouseMove)
        
        return () => {
        window.removeEventListener('mousemove', onMouseMove)
        }
        
      }, [])
  return (
   <>
   
    <h3>Usuario ya existe</h3>
   
   </>
  )
}
```
3) Al momento de manejar de igual forma useState de un componente el cual no puedes manejar un estado debido a que no existe en el dom, ejemplo:

``` javascript
import { useEffect, useState } from "react"

export const Message = () => {
    const [coords, setCoords] = useState({x:0,y:0});
    useEffect(() => {
       const onMouseMove = ({x,y}) =>{
        setCoords({x,y})
       }
      window.addEventListener('mousemove', onMouseMove)
       /* 
        return () => {
        window.removeEventListener('mousemove', onMouseMove)
        }
        */
        
      }, [])
  return (
   <>
   
    <h3>Usuario ya existe</h3>
    {JSON.stringify(coords)}
   
   </>
  )
}
```
4) La forma de solucionarlo es basicamente lo mismo. 

# Custom Hooks Form (FORM WITH CUSTOM HOOK)
Durante esta sección se ven hooks relacionados a los form, de igual forma se muestran implementaciones interestantes 
1) Un ejemplo aquí es que podemos exponer los métodos y objetos
## Use Form
``` javascript
import React, { useState } from 'react'

export const useForm = (initialForm = {}) => {
    const [formState, setformState] = useState(initialForm)

   
    const onInputChange = ({target}) =>{
        const {name ,value} = target;
        setformState({
            ...formState,
            [name]:value
        })
    }
  return {
    formState,
    onInputChange,
    ...formState
  }
}
```