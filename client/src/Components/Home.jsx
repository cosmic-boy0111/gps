
import React from 'react'
import '../Style/Home.css'
import Table from './Table'
import { useNavigate } from 'react-router-dom'
import Logout from './Logout'

const Home = () => {

  const navigate = useNavigate();

  

  return (
    <div className='home_page'>
      <Logout />
    <div  >
        GPS Summery
    </div>
    <Table />
    </div>
  )
}

export default Home