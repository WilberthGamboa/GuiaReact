# Guía React
## Llaves e identificador
En las llaves es posible insertar código de javascript, por ejemplo:
```Javascript 
  <ol>
      {categories.map(category =>{
        return <li key={category}>{category}</li>
      })}
    </ol>
```
De igual forma podemos apreciar los li tienen cómo propiedad un key, esto lo debe llevar y debe ser único.
## UseState 
El useState se refiere básicamente al estado (la información que tiene nuestros componentes), es importante destacar que este estado se cambia NO se muta. De igual forma lo useState no pueden ir dentro de condicionales ya que react pierde la lógica los mismos.
```Javascript 
 const [categories, setCategories] = useState(['Valorant','Team Heretics'])
```
### UseState crear nuevo estado 
```Javascript 
 const onAddCategory =  () =>{
    setCategories(['League of legends'],...categories)
  }
 ```

### UseState crear nuevo estado (callbacks)
```Javascript 
 const onAddCategory =  () =>{
    setCategories(cat => ['League of Legend'],...cat)
  }
 ```
## Eventos
Sintaxis corta de un evento 
### Llamada a la función
```Javascript 
 <button onClick={onAddCategory}> Agregar </button>
 ```
### Función que se invoca
```Javascript 
 const onAddCategory =  () =>{
    console.log('soy el valorant');
  }
 ```
Recordemos que la forma completa es la siguiente 
### Llamada a la función
```Javascript 
 <button onClick={(e)=> onAddCategory(e)}> Agregar </button>
 ```
### Función que se invoca
```Javascript 
 const onAddCategory =  (e) =>{
    console.log('soy el valorant');
}
```
## Comunicación entre componentes 
Es importante tener en cuenta es que el elemento hijo debe encargase de las validaciones, el elemento padre es aquel que cambia el estado. 
## Padre e hijo 
Consiste en mandar variables cómo funciones de un componente a otro 

### Elemento padre 
```Javascript 
   <AddCategory setCategories={setCategories} />
```
### Elemento hijo 
1) Recoredemos que estamos usando la destructuración de objetos en el hijo, estamos destructurando propertys, si no lo hicieramos tendríamos que invocar a la función cómo property.setCategories();

2) La función category tiene el estado actual por lo que no es necesario pasarlo al hijo.

``` Javascript
export const AddCategory = ({setCategories}) => {
  /*Definimos el useState del inputValue, recordemos que
  react funciona con estados así que si queremos modificar
  el estado de un componente debemos manejarlo con el useState*/
  const [inputValue, setinputValue] = useState("Valorant");
  const onInputChange = ({target}) =>{
    setinputValue(target.value);
  }
  const onSubmit = (e) =>{
    e.preventDefault();
    setCategories(categories =>[inputValue,...categories]);
  }
 
  //Input donde escribimos para agregar a la lista
  return (
    <form onSubmit={onSubmit} >
   <input onChange={onInputChange}
    type='text'
    placeholder="Buscar gifs"
    value={inputValue}
   >
   
   </input>
   </form>
  )
}
```
## Emitir evento al padre 
Se refiere a pasar un evento del padre cómo parametro al hijo, el hijo procesa lo que se deba verificar y una vez hecho, se invoca al padre y se le pasa el valor, para que este cambie el estado del componente

1) El evento se crea en el padre en este caso onAddCategory

``` Javascript
 const [categories, setCategories] = useState(['Valorant','Team Heretics'])
  const onAddCategory =  (newCategory) =>{
    setCategories([newCategory,...categories]);         
  }
```

2) Se le pasa el evento al hijo
``` Javascript
 <AddCategory onNewCategory={onAddCategory} />
```

3) En un evento hijo se invoca al evento padre 

``` Javascript
  const onSubmit = (e) =>{
    e.preventDefault();
    if(inputValue.trim().length<=1) return;
    onNewCategory(inputValue.trim());
    setinputValue('');
  }
  //...
   return (
    <form onSubmit={onSubmit} >
   <input onChange={onInputChange}
    type='text'
    placeholder="Buscar gifs"
    value={inputValue}
   >
   
   </input>
   </form>
  )

```
## Peticiones Api

Al hacer una petición es buena idea que esta se encuentre fuera del componente, para que esta no se esté redibujando.

### Dentro del componente
``` Javascript
 import React from 'react'

export const GifGrid = ({category}) => {
  
  /*
  Para que la función getGifs no se esté redibujando cada vez que cambia el estado*/
    const getGifs = async () =>{
        const url = "https://api.giphy.com/v1/gifs/search?api_key=kAKfkpUgNtXYygNmZYpOuxBMqLKE3fwj&q="+category 
        const response = await fetch(url);
        const {data} = await response.json();
        
        const gifs = data.map(img => ({
          id:img.id,
          title: img.title,
          url : img.images.downsized_medium.url
        }))

        console.log(gifs);

       }
    getGifs();
  return (
    <>
    <h3>{category}</h3>
    <p>Hola mundo</p>
    </>
  )
}
```
### Fuera del componente
``` Javascript
import React from 'react'
const getGifs = async (category) =>{
  const url = "https://api.giphy.com/v1/gifs/search?api_key=kAKfkpUgNtXYygNmZYpOuxBMqLKE3fwj&q="+category 
  const response = await fetch(url);
  const {data} = await response.json();
  
  const gifs = data.map(img => ({
    id:img.id,
    title: img.title,
    url : img.images.downsized_medium.url
  }))

  console.log(gifs);

 }

export const GifGrid = ({category}) => {
   
    getGifs(category);
  return (
    <>
    <h3>{category}</h3>
    <p>Hola mundo</p>
    </>
  )
}
```

## UseEffect
El problema de lo anterior es que al invocar la función directamente en el componente, se llama varias veces (cuando ocurre un cambio de estado )

1) Lo utilizamos cuando queremos que se ejecute cómo acción secundaria de algún evento
  a) Cuando se CONSTRUYA por primera vez el componente
  b) Cuando se cambie el estado de algo

2) Es importante que useEffect evita que cuando cambiemos estado del componente, una función se vuelva a ejecutar,
pero si el componente es creado desde 0 entonces sí se ejecuta otra vez

3) Los useEffect no puede retorar promesas por lo que no pueden ser asincrónos
Ejemplo 

En este caso tenemos un componente que se genera con un map, tenemos que ver que cada vez que se CONSTRUYA el componente se va a invocar esa función.
``` Javascript
  useEffect(()=>{
    getGifs(category);
  },[])
    
```
## Custom Hooks
1)Recordemos que los Hooks son funciones que regresa algo, en este caso un custom hook regresa lo que nosotros necesitemos
2)Basicamente te ayuda a reducir la logica de tus componentes para que luego lo exportes.
``` Javascript
 export const useFetchGifs = () => {
  return {
    images:[],
    isLoading:false
  }
}
   
```


