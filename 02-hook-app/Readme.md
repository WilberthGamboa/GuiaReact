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