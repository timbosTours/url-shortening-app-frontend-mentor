import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function MyForm() {
  const { register, handleSubmit } = useForm()

  return (
    <form onSubmit={handleSubmit(async (data) => {
        
        try {
          const resp = await axios.post(`https://api.shrtco.de/v2/shorten?url=${data.text}`);
        console.log(resp)
      } catch (error: any) {
        console.log(error)
      }
    })}> 
      <input {...register("text") } placeholder="Shorten a link here" />
      <button>Shorten It!</button>
    </form>
  )
}

export default MyForm