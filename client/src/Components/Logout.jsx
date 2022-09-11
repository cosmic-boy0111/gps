import React from 'react'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; 

const Logout = () => {

        const navigate = useNavigate();
    const logOut = async() =>{
        try {
            const res = await fetch('/logout',{
              method:'GET',
              headers : {
                'Content-Type' : 'application/json'
              }
              
            })
      
            if(res.status !== 400){
              navigate('/login');
            }else{
              
            }
      
          } catch (error) {
            
          }
    }

  return (
    <button className='logout' onClick={logOut} >Logout {" "} <LogoutRoundedIcon /></button>
  )
}

export default Logout