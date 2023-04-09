import React, { useRef, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import styles from './MyForm.module.scss'

interface Data {
  input: string
  output: string
}


function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  let searchLink = useRef<string>("")
  let shortLink = useRef<string>("")
  const [returnedData, setData] = useState<Data[]>([])

  useEffect(() => {
    const storedData = localStorage.getItem("links");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
      console.log('function ran')
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
        <form
        className={styles.myform} onSubmit={handleSubmit(async (data) => {
          try {
            const resp = await axios.post(`https://api.shrtco.de/v2/shorten?url=${data.text}`);
          searchLink.current = data.text
          shortLink.current = resp.data.result.short_link
          setData([...returnedData,{ input: searchLink.current, output: shortLink.current }])
          setStore(JSON.stringify(searchLink.current), JSON.stringify(shortLink.current))
        } catch (error: any) {
          console.log(error)
        }
      })}> 
        <input {...register("text", {
              required: true,
              pattern: {
                value: /[-a-zA-Z0-9@:%._\+~#=]{1, 256}\.[a-zA-Z0-9()]{1, 6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
                message: 'Please add a link'
              }
        })} placeholder=" Shorten a link here..." />
        {errors.text && <p className={styles.errorMessage}>Please add a link</p>}
        <button type='submit'>Shorten It!</button>
      </form>

      {returnedData.map((_data) => {
        return (
          <div className={styles.shortLinks} key={_data.output}>
            <p className={styles.inputLink}>{ _data.input.replaceAll('"', '') }</p>
            <p className={styles.outputLink}>{_data.output.replaceAll('"', '')}</p>
            <button className={styles.copyButton} onClick={() => {navigator.clipboard.writeText(_data.output.replaceAll('"', ''))}} >Copy!</button>
          </div>
        )
      })}
    </>
  )
}

export default MyForm
