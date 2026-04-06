import { useContext, useEffect, useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { Context } from '../Context/Context'


function Login() {
    const [show,setShow] = useState(true)
    const [data,setData] = useState([])
    const [confirm,setConfirm] = useState(false)
    const navigate = useNavigate()
    const {setUser} = useContext(Context)

    //fnUP
    function fnUp(e){
        e.preventDefault()
        let user__list = {
            name:e.target.name.value,
            email:e.target.email.value,
            number:e.target.number.value,
            password:e.target.password.value,
            confirm:e.target.confirm.value,
        }
        if(user__list.password != user__list.confirm){
            setConfirm(true)
        }else{
            setConfirm(false)
            fetch('https://69cfdd00a4647a9fc67614e2.mockapi.io/users',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(user__list)
        })
        .then((res)=>res.json())
        .then(()=>{
            localStorage.setItem('token','zxcvbnm')
            navigate('/home')
        })
        }
    }

    //fnIN
    function fnIn(e){
        e.preventDefault()
        let user__list = {
            name:e.target.name.value,
            password:e.target.password.value,
        }
        const finUser = data.find((item)=>(
            item.name == user__list.name && item.password == user__list.password
        ))
        if(finUser){
            setUser(finUser)
            localStorage.setItem('user',JSON.stringify(finUser))
            localStorage.setItem('token','zxcvbnm')
            navigate('/home')
        }else{
            localStorage.removeItem('user')
            alert('password or name is incorrect')
        }
    }

   

    useEffect(()=>{
        fetch('https://69cfdd00a4647a9fc67614e2.mockapi.io/users')
        .then((res)=>res.json())
        .then((users)=>setData(users))
    },[])

  return (
    <div className='Login'>
        {
            show?<div className="sign__up">
            <form className='form-control w-75 m-auto form__login' onSubmit={fnUp}>
                <input type="text" className='text-light form-control w-100 mt-3 login__control' placeholder='enter your name' name='name'/>
                <input type="text" className='text-light form-control w-100 mt-3 login__control' placeholder='enter your email' name='email'/>
                <input type="text" className='text-light form-control w-100 mt-3 login__control' placeholder='enter your phone number' name='number'/>
                <input type="text" className={confirm?'text-light form-control w-100 mt-3 login__control bg-danger':'text-light form-control w-100 mt-3 login__control'} placeholder='enter password' name='password'/>
                <input type="text" className={confirm?'text-light form-control w-100 mt-3 login__control bg-danger':'text-light form-control w-100 mt-3 login__control'} placeholder='confirm password' name='confirm'/>
                <button type='submit' className='btn btn-primary mt-3'>Sign up</button>
                <div className='mt-2 mb-3 d-flex justify-content-between already'>
                    <p className='text-light'>Already have an account ?</p>
                    <button onClick={()=>setShow(false)} className='btn btn-link'>Sign In</button>
                </div>
            </form>
            </div>
            :
            <div className="sign__in">
            <form className='form-control w-75 m-auto form__login' onSubmit={fnIn}>
            <input type="text" className='text-light form-control w-100 mt-3 login__control' placeholder='enter your name' name='name'/>
            <input type="text" className='text-light form-control w-100 mt-3 login__control' placeholder='enter password' name='password'/>
             <div className='mt-3 mb-3'>
                    <button type='submit' className='btn btn-primary'>Sign In</button>
                </div>
            </form>
        </div>
        }
        
    </div>
  )
}

export default Login