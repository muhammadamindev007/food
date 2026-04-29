import './Profil.css'
import profilPic from '../../assets/img/reader-img.png'
import star from '../../assets/img/star.png'
import { useEffect, useState } from 'react'

function Profil() {
  const [users,setUsers] = useState([])

  useEffect(()=>{
    fetch('https://69cfdd00a4647a9fc67614e2.mockapi.io/users')
    .then((res)=> res.json())
    .then((data)=> setUsers(data))
  },[])

  let admin = users.find((item)=> item.name == 'admin' && item.email == 'admin@gmail.com')
  let user = users.find((item)=> item.name == 'ali' && item.email == 'ali@gmail.com')
  
  // let foundAdmin = users.find((item)=> item.name == 'admin')
  // let foundUser = users.find((item)=> item.name == 'ali')

  let user__found = window.localStorage.getItem('user')
   
  
  return (
    <div className='Profil'>
      <h1 className='profil__title'>Profil</h1>

      <div className="profil__info">
          <div className="profil__inner">

          <div className="reader__profil">
            <div className="profil__img">
            <img className="profil__img" src={profilPic} alt="" />
            </div>
          </div>

          <div className="reader__bio">
          <div>
            <h1 className='reader__title'>{JSON.parse(user__found).name == 'admin'? admin?.name:user?.name}</h1>
            <span><p>Telefon raqami: </p>{JSON.parse(user__found).name == 'admin'? admin?.number:user?.number}</span>
            <span><p>Emaili: </p> {JSON.parse(user__found).name == 'admin'?admin?.email:user?.email}</span>
            <span><p>Bio: </p> Front-end developer and Start-upper</span>
            </div>
          </div>
          </div>
        </div>

    </div>
  )
}

export default Profil
