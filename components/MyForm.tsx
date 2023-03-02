import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'


function MyForm() {
  const { register, handleSubmit } = useForm()
  let searchLink = useRef<undefined>()
  let shortLink = useRef<null>()

  return (
    <>
    <form onSubmit={handleSubmit(async (data) => {
        
        try {
          const resp = await axios.post(`https://api.shrtco.de/v2/shorten?url=${data.text}`);
          searchLink.current = data.text
          shortLink.current = resp.data.result.short_link
      } catch (error: any) {
        console.log(error)
      }
    })}> 
      <input {...register("text") } placeholder="Shorten a link here" />
      <button type='submit'>Shorten It!</button>
      </form>
      
      {shortLink.current && 
      
          <p>{shortLink.current}</p>  
      }
      {searchLink.current && 
        <p>{ searchLink.current }</p>
      }
    </>
  )
}

export default MyForm