import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Full metal alchemist'])
  const onAddCategory =  (newCategory) =>{
    if(categories.includes(newCategory)) return;
    setCategories([newCategory,...categories]);         
  }
  return (
    <>
    {/* título */}
    <h1>GifExpertApp</h1>
    {/* Input */}
    <AddCategory onNewCategory={onAddCategory} />
    {/* Listado de gif */}
    
    <ol>
     {
      categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))
     }
    </ol>
    {/* título */}
    </>
  )
}
