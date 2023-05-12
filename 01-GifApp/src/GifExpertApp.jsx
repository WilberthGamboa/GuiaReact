import React, { useState } from 'react'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Valorant','Team Heretics'])
  return (
    <>
    {/* título */}
    <h1>GifExpertApp</h1>
    {/* Input */}
    {/* Listado de gif */}
    <ol>
      {categories.map(category =>{
        return <li key={category}>{category}</li>
      })}
    </ol>
    {/* título */}
    </>
  )
}
