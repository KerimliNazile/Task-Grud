import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data,setData] = useState([])

  useEffect(() => {
    const fetchData = async ()=>{
      const response = await fetch("http://localhost:5000")
      const jsonData = await response.json()
      setData(jsonData)
    }
    fetchData()
  }, [])
  
  return (
    <div className='cards'>
      {data && data.map((item)=>(
        <ul key={item.id}>
          <li className='cards'><img src={item.image} alt="" /></li>
          <li>Name: {item.name}</li>
          <li>Info: {item.info}</li>
          <li>Price: {item.price}$</li>
        </ul>
      ))}
    </div>
  )
}

export default App