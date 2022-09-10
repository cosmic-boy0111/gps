import React,{useState,useEffect} from 'react'
import '../Style/Initial.css'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { getTableRowUtilityClass } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import VisibilityIcon from '@mui/icons-material/Visibility';


const Register = () => {

  const navigate = useNavigate();

  const [data, setData] = useState({
    'email' : "",
    'password' : '',
    'cpassword' : '',
  })
  const [toggle, setToggle] = useState(false)

  const onChange = (name,val) =>{
    setData({...data,[name] : val})
  }

  const register = async (e) =>{
    e.preventDefault();
    if(data.email === ""){
      toast.info("Please Enter Email",)
      return
    }
    if(data.password === "") {
      toast.info("Please Enter Password",)
      return
    }

    if(data.cpassword === "") {
      toast.info("Please Confirm Password",)
      return
    }

    if(data.password !== data.cpassword){
      toast.error("Password not match",)
      return
    }

    try {
      const res = await fetch('/register',{
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
        navigate('/login');
      }else{
        toast.error("User Alredy Exits",)
      }

    } catch (error) {
      toast.error("Network Error",)
    }
   

  }

  const go = () =>{
    navigate('/login')
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
          if(Data !== null) navigate('/')
      } catch (error) {
          console.log('data not found');
          navigate('/register')
      }
  }

  useEffect(() => {
    getData();
  },[]);

  return (
    <div  className='intial_body' >
        <form className='login_container'>
          <input name='email' required type={"email"} className="input" placeholder='Email' onChange={(e)=> onChange(e.target.name,e.target.value)} />
          <div className='input flx-rw'>
            <input name='password' required type={ toggle ? 'text' : 'password'} className="pass" placeholder='Password' onChange={(e)=> onChange(e.target.name,e.target.value)}/>
            {
              toggle ? <VisibilityIcon className='vis' onClick={()=>setToggle(!toggle)} /> : 
              <VisibilityOffIcon className='vis' onClick={()=>setToggle(!toggle)} />
            }
          </div>
          <div className='input flx-rw'>
            <input name='cpassword' required type={ toggle ? 'text' : 'password'} className="pass" placeholder='Confirm Password' onChange={(e)=> onChange(e.target.name,e.target.value)}/>
            {
              toggle ? <VisibilityIcon className='vis' onClick={()=>setToggle(!toggle)} /> : 
              <VisibilityOffIcon className='vis' onClick={()=>setToggle(!toggle)} />
            }
          </div>
          <button type='submit' className='btn vis' onClick={register}> Register </button>
          <button className='btn_2 vis' onClick={go} > Log in? </button>
        </form>
    </div>
  )
}

export default Register