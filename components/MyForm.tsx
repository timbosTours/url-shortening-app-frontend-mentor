import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function MyForm() {
  const { register, handleSubmit } = useForm()
  const shortLink = useRef<undefined>()

  return (
    <>
    <form onSubmit={handleSubmit(async (data) => {
        
        try {
          const resp = await axios.post(`https://api.shrtco.de/v2/shorten?url=${data.text}`);
          shortLink.current = resp.data.result.short_link
      } catch (error: any) {
        console.log(error)
      }
    })}> 
      <input {...register("text") } placeholder="Shorten a link here" />
      <button type='submit'>Shorten It!</button>
      </form>
      {shortLink.current && 
        <p>{ shortLink.current }</p> 
      }
    </>
  )
}

export default MyForm