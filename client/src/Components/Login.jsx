import React,{useState,useEffect} from 'react'
import '../Style/Initial.css'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { getTableRowUtilityClass } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import VisibilityIcon from '@mui/icons-material/Visibility';

const Login = () => {

  const navigate = useNavigate();

  const [data, setData] = useState({
    'email' : "",
    'password' : ""
  })

  const [toggle, setToggle] = useState(false)

  
  const onChange = (name,val) =>{
    setData({...data,[name] : val})
  }

 

  const go = () =>{
    navigate('/register')
  }

  const signIn = async(e) =>{

    e.preventDefault();


    try {
      const res = await fetch('/signin',{
        method:'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          user : data.email,
          password : data.password
        })
      })

      if(res.status !== 400){
        navigate('/');
      }else{
        toast.error("invalid credential",)
      }

    } catch (error) {
      toast.error("Network Error",)
    }
   
  }

  const getData = async() =>{
    try {
      const res2 = await fetch('/about',{
          method:'GET',
          headers:{
              "Content-Type":"application/json"
          }
      })

          const Data = await res2.json();
          if(Data != null){
            navigate('/')
          }
      } catch (error) {
          console.log('data not found');
          navigate('/login')
      }
  }

  useEffect(() => {
    getData();
  },[]);

  return (
    <div  className='intial_body' >
        <form className='login_container'>
          <input name='email' required type={"email"} className="input" placeholder='Email' onChange={(e)=> onChange(e.target.name,e.target.value)}/>
          <div className='input flx-rw'>
            <input type={ toggle ? 'text' : 'password'} name='password' required className="pass" placeholder='Password' onChange={(e)=> onChange(e.target.name,e.target.value)}/>
            {
              toggle ? <VisibilityIcon className='vis' onClick={()=>setToggle(!toggle)} /> : 
              <VisibilityOffIcon className='vis' onClick={()=>setToggle(!toggle)} />
            }
          </div>
          <button type='submit'  className='btn vis' onClick={signIn} > Log in </button>
          <button className='btn_2 vis' onClick={go} > New User? </button>
        </form>
    </div>
  )
}

export default Login