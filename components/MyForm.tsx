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
  const [returnedData, setData] = useState<Data[]>([])


    useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

function setStore(searchLink: string, shortLink: string) {
    const existingData = localStorage.getItem("links")
    if (existingData) {
      const newData = JSON.parse(existingData)
      newData.push({ input: searchLink, output: shortLink })
      localStorage.setItem("links", JSON.stringify(newData))
    } else {
      localStorage.setItem("links", JSON.stringify([{ input: searchLink, output: shortLink }]))
    }
  }


  return (

    <>
    <form onSubmit={handleSubmit(async (data) => {
        
        try {
          const resp = await axios.post(`https://api.shrtco.de/v2/shorten?url=${data.text}`);
          searchLink.current = data.text
          shortLink.current = resp.data.result.short_link
          setData([...returnedData,{ input: searchLink.current, output: shortLink.current }])
          setStore(JSON.stringify(searchLink), JSON.stringify(shortLink))
      } catch (error: any) {
        console.log(error)
      }
    })}> 
      <input {...register("text") } placeholder="Shorten a link here" />
        <button type='submit'>Shorten It!</button>
      </form>

      {returnedData.map((_data) => {
  return (
    <div key={_data.output}>
      <p>{ _data.input }</p>
      <p>{ _data.output }</p>
    </div>
  )
})}
    </>
  )
}

export default MyForm