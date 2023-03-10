import React, { useRef, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'


interface Data {
  input: string
  output: string
}

function MyForm() {
  const { register, handleSubmit } = useForm()
  let searchLink = useRef<string>("")
  let shortLink = useRef<string>("")
  const [data, setData] = useState<Data[]>([])

  // useEffect(() => {
  //   window.localStorage.getItem("SEARCH_LINK")
  // }, [shortLink])

    useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  function setStore() {
      window.localStorage.setItem("SEARCH_LINK", JSON.stringify(searchLink.current))
      window.localStorage.setItem("SHORT_LINK", JSON.stringify(shortLink.current))
  }


  return (

    <>
    <form onSubmit={handleSubmit(async (data) => {
        
        try {
          const resp = await axios.post(`https://api.shrtco.de/v2/shorten?url=${data.text}`);
          searchLink.current = data.text
          shortLink.current = resp.data.result.short_link
          setData([])
      } catch (error: any) {
        console.log(error)
      }
    })}> 
      <input {...register("text") } placeholder="Shorten a link here" />
        <button type='submit' onClick={setStore}>Shorten It!</button>
      </form>


      {data && 
      
          <p>{shortLink.current}</p>  
      }
      {searchLink.current && 
        <p>{ searchLink.current }</p>
      }
    </>
  )
}

export default MyForm