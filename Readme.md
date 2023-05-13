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



