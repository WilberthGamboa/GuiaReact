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
El useState se refiere básicamente al estado (la información que tiene nuestros componentes), es importante destacar que este estado se cambia NO se muta.
```Javascript 
 const [categories, setCategories] = useState(['Valorant','Team Heretics'])
```
