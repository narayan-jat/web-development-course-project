import { useEffect, useState } from 'react'
import './App.css'
import useFetch from "./useFetch.js"

function App() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos/1")
  console.log(data)
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  // }, [])
  return (
    <>
    <h1>Hello I fetched this {data && data.title}</h1>
    </>
  )
}

export default App
