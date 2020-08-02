import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"

// state es el objeto puede cambair el nombre de state a cualquiera objeto gifs lo q sea
export const useFetchGifs = ( category ) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  })

  useEffect(() => {

    getGifs(category)
    .then(gifs => {
      setstate({
        data: gifs,
        loading: false
      });
    })

  }, [  category  ])

  return state; //{data:[],loading:true}
}
