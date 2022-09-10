import React,{useEffect} from 'react'
import {
    BrowserRouter,
    Route,
    Routes,
    useNavigate
} from 'react-router-dom'
import Home from './Home'
import MoreInfo from './MoreInfo';

const Body = () => {

    const navigate = useNavigate();
    const getData = async() =>{
        try {
          const res2 = await fetch('/about',{
              method:'GET',
              headers:{
                  "Content-Type":"application/json"
              }
          })
    
              const Data = await res2.json();
          } catch (error) {
              console.log('data not found');
              navigate('/login')
          }
      }
    
      useEffect(() => {
        getData();
      },[]);

  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<MoreInfo />} />
    </Routes>
  )
}

export default Body