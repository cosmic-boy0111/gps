
import React from 'react'
import '../Style/Home.css'
import Table from './Table'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  

  return (
    <div className='home_page'>
    <div  >
        GPS Summery
    </div>
    <Table />
    </div>
  )
}

export default Home