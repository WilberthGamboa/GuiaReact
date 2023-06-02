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
