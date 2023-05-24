export const getGifs = async (category) =>{
    const url = "https://api.giphy.com/v1/gifs/search?api_key=kAKfkpUgNtXYygNmZYpOuxBMqLKE3fwj&q="+category 
    const response = await fetch(url);
    const {data} = await response.json();
    
    const gifs = data.map(img => ({
      id:img.id,
      title: img.title,
      url : img.images.downsized_medium.url
    }))
  

    return gifs
   }