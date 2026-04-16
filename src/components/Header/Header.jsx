import './Header.css'
import logo from '../../assets/img/food-logo.png'
import { Link, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../pages/Context/Context'

function Header() {
  const location = useLocation().pathname
  const {user} = useContext(Context)

  return (
    <div className='Header'>
        <nav className="nav__list">
            <Link to={'/home'}><img src={logo} alt="" /></Link>
            <div><Link className={location == '/home'? 'nav__item active':'nav__item'} to={'/home'}><i className="header__link bi bi-house"></i></Link></div>
            <div><Link className={location == '/pie'?'nav__item active':'nav__item'} to={'/pie'}><i className="header__link bi bi-pie-chart"></i></Link></div> 
            <div>
              {
                user?.name == 'admin' && 
                <Link className={location == '/settings'?'nav__item active':'nav__item'} to={'/settings'}>
                  <i className="header__link bi bi-gear"></i>
                </Link>
              }
            </div>
        </nav>
    </div>
  )
}

export default Header