import React, { useRef, useEffect, useState, ForwardedRef } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import styles from './MyForm.module.scss'


interface Data {
  input: string
  output: string
}
export interface MyFormProps extends React.HTMLProps<HTMLFormElement> {
  forwardedRef?: ForwardedRef<HTMLFormElement>
  inputRef: ForwardedRef<HTMLInputElement>;
}


function MyForm(
  { inputRef }: MyFormProps)
{
  const { register, handleSubmit, formState: { errors } } = useForm()
  let searchLink = useRef<string>("")
  let shortLink = useRef<string>("")
  const [returnedData, setData] = useState<Data[]>([])
  const [clickedIndex, setClickedIndex] = useState(-1);

  useEffect(() => {
    const storedData = localStorage.getItem("links");
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
      <form className={styles.myform} onSubmit={handleSubmit(async (_data) => {
        try {
          const resp = await axios.post(`https://api.shrtco.de/v2/shorten?url=${_data.text}`);
          console.log(_data.text);
            searchLink.current = _data.text
            shortLink.current = resp.data.result.short_link
            setData([...returnedData,{ input: searchLink.current, output: shortLink.current }])
            setStore(JSON.stringify(searchLink.current), JSON.stringify(shortLink.current))
            
          } catch (error: any) {
            console.log(error)
        }})}> 
        <input {...register("text", {
              required: false,
              pattern: {
                value: /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/,
                message: 'Please add a link'
              }
        })} ref={inputRef} placeholder=" Shorten a link here..." />
        {errors.text && <p className={styles.errorMessage} >Please add a link</p>}
        <button type="submit">Shorten It!</button>
      </form>

      {returnedData.map((data, index) => {
        return (
          <div className={styles.shortLinks} key={data.output}>
            <p className={styles.inputLink}>{ data.input.replaceAll('"', '') }</p>
            <p className={styles.outputLink}>{data.output.replaceAll('"', '')}</p>
            <button className={`${styles.copyButton} ${clickedIndex === index ? styles.clicked : ''}`} onClick={() => {
              setClickedIndex(index);
              navigator.clipboard.writeText(data.output.replaceAll('"', ''))
            }}>Copy!</button>
          </div>
        )
      })}
    </>
  )
}

export default MyForm
