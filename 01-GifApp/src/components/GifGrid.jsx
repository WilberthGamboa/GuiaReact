import React from 'react'

export const GifGrid = ({category}) => {
    const getGifs = async () =>{
        const url = "https://api.giphy.com/v1/gifs/search?api_key=qGBaLhCZfXXrcw6IK63NpV7AySfCUcp6&q="+category 
        const response = await fetch(url);
        console.log(response)
       }
    getGifs();
  return (
    <>
    <h3>{category}</h3>
    <p>Hola mundo</p>
    </>
  )
}
