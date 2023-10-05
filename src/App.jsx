import { useState } from 'react'
import './App.css'
import Card from '../src/components/Card'

function App() {

  const heading = [ 
    {
      title: "TWITTER",
      icon: "BsTwitter"
    },
    {
      title: "INSTAGRAM",
      icon: "BsInstagram"
    },
    {
      title: "YOUTUBE",
      icon: "BsYoutube"
    }
  ]

  return (
    <div className='card-container'>
      {
        heading.map(obj => {
          return (
            <Card title={obj.title} icon={obj.icon}/>
          )
        })
      }
    </div>
  )
}

export default App
