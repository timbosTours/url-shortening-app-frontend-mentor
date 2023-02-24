import React from 'react'
import { useForm } from 'react-hook-form'

function MyForm() {
  const {register, handleSubmit} = useForm()

  return (
    <form onSubmit={handleSubmit((data) => {
      console.log(data)
    })}> 
      <input {...register("text") }placeholder="Shorten a link here" />
      <button type="submit">Shorten It!</button>
    </form>
  )
}

export default MyForm