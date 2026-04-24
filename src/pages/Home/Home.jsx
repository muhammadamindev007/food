import React, { useEffect, useState } from 'react'
import './Home.css'
import Order from '../Order/Order';
import { FaGlobe } from "react-icons/fa";

function Home({lang,setLang}) {
  const [active, setActive] = useState('hot')
  const [search, setSearch] = useState("")
  const [foodlist, setFoodlist] = useState(JSON.parse(localStorage.getItem('foodlist') || '[]'))
  const [food, setFood] = useState([])

  const [open, setOpen] = useState(false);
  


  function fnVal(e) {
    setActive(e.target.value);
  }

  function fnSearch(e) {
    e.preventDefault()
    setSearch(e.target.name.value)
  }

  useEffect(() => {
    const updateData = () => {
      const data = JSON.parse(localStorage.getItem('foodlist')) || []
      setFoodlist(data)
    }
    window.addEventListener('foodUpdated', updateData)
    return () => window.removeEventListener('foodUpdated', updateData)
  }, [])


  useEffect(() => {
    fetch('https://69cfdd00a4647a9fc67614e2.mockapi.io/foodlist')
      .then((res) => res.json())
      .then((data) => setFood(data))
  }, [])

  function fnSet(id) {
    let arr = [...foodlist]
    let found = arr.find((item) => item.id == id)
    if (found) {
      found.count = found.count + 1
    } else {
      const foodItem = food.find((item) => item.id == id)

      if (foodItem) {
        arr.push({ ...foodItem, count: 1 })
      }
    }
    setFoodlist(arr)
    localStorage.setItem('foodlist', JSON.stringify(arr))
    window.dispatchEvent(new Event('foodUpdated'))
  }

  const totalCount = foodlist.reduce((sum, item) => sum + item.count, 0)
  return (
    <div className='Home'>
      <div className="container">
        <div className="home__info">
          <div className="home__title">
            <h2>Forn lebnen</h2>
            <p>{lang == 'RU'? 'Вторник, 2 февраля 2021 г.':'Seshanba, 2-fevral, 2021-yil'}</p>
          </div>

          <div className="lang">
             <FaGlobe onClick={() => setOpen(!open)} className="lang__icon"/>
             {open && (
               <div className="lang__dropdown">
                 <p onClick={() => {setLang("UZ"); setOpen(false)}}>UZ</p>
                 <p onClick={() => {setLang("RU"); setOpen(false)}}>RU</p>
               </div>
             )}
          </div>

          <div>
            <form onSubmit={() => fnSearch(event)} className="home__search" action="#">
              <button><i className="bi bi-search text-light"></i></button>
              <input autoComplete='off' name='name' type="text" placeholder={lang == 'RU'?'Поиск продуктов питания, кофе и т.д.':'Oziq-ovqat, qahva va hokazolarni qidiring.'} />
            </form>
          </div>
        </div>
        <ul className="catgory__list">
          <li className="category__item">
            <button className={active == 'hot' ? 'category__btn active' : 'category__btn'} value={'hot'} onClick={fnVal}>{lang == 'RU'? 'Горячие блюда':'Qaynoq taomlar'}</button>
          </li>
          <li className="category__item">
            <button className={active == 'cold' ? 'category__btn active' : 'category__btn'} value={'cold'} onClick={fnVal}>{lang == 'RU'? 'Холодные блюда':'Sovuq taomlar'}</button>
          </li>
          <li className="category__item">
            <button className={active == 'soup' ? 'category__btn active' : 'category__btn'} value={'soup'} onClick={fnVal}>{lang == 'RU'?'Суп':"Sho'rva"}</button>
          </li>
          <li className="category__item">
            <button className={active == 'grill' ? 'category__btn active' : 'category__btn'} value={'grill'} onClick={fnVal}>{lang == 'RU'?'Гриль':'Gril'}</button>
          </li>
          <li className="category__item">
            <button className={active == 'appetizer' ? 'category__btn active' : 'category__btn'} value={'appetizer'} onClick={fnVal}>{lang == 'RU'?'Закуска':'Aperatif'}</button>
          </li>
          <li className="category__item">
            <button className={active == 'dessert' ? 'category__btn active' : 'category__btn'} value={'dessert'} onClick={fnVal}>{lang == 'RU'?'Десерт':'Desert'}</button>
          </li>
          <li className="category__item">
            <button className={active == 'drinks' ? 'category__btn active' : 'category__btn'} value={'drinks'} onClick={fnVal}>{lang == 'RU'?'Напитки':'Ichimliklar'}</button>
          </li>
        </ul>
        <select
          className="category__select"
          value={active}
          onChange={(e) => setActive(e.target.value)}
        >
          <option hidden value="hot">{lang == 'RU'? 'Горячее блюдо':'Qaynoq taom'}</option>
          <option value="cold">{lang == 'RU'? 'Холодное блюдо':'Sovuq taom'}</option>
          <option value="soup">{lang == 'RU'?'Суп':"Sho'rva"}</option>
          <option value="grill">{lang == 'RU'?'Гриль':'Gril'}</option>
          <option value="appetizer">{lang == 'RU'?'Закуска':'Aperatif'}</option>
          <option value="dessert">{lang == 'RU'?'Десерт':'Desert'}</option>
          <option value="drinks">{lang == 'RU'?'Напиток':'Ichimlik'}</option>
        </select>


        <div className='choose__div'>
          <h4 className='text-light pt-3'>
             {active == 'drinks' ?(lang == 'RU'? 'Выбрать напиток':'Ichimlik tanlang') :
              active == 'soup'?(lang == 'RU'? 'Выбрать суп':"Sho'rva tanlang") :
              active == 'appetizer'?(lang == 'RU'? 'Выбрать закуску':'Aperatif tanlang'):
              active == 'dessert'?(lang == 'RU'? 'Выбрать десерт':'Desert tanlang'):
              active == 'cold'? (lang == 'RU'?'Выбрать холодное блюдо':'Sovuq taom tanlang'):
              active == 'grill'?(lang == 'RU'?'Выбрать гриль':'Grill tanlang'):
              active == 'hot'? (lang == 'RU'?'Выбрать горячее блюдо':'Qaynoq taom tanlang'):''
             }
          </h4>

          <div className="cart__wrapper" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i className="bi bi-cart3 text-light fs-4"></i>
            <div className="overall"><p>{totalCount}</p></div>
          </div>

        </div>
        <ul className="food__list pt-5">
          {
            food.filter((item) => search ? item.title.toLowerCase().includes(search.toLowerCase()) : item.category == active).map((i, index) => (
              <li key={index} className="food__item">
                <div>
                  <button onClick={() => fnSet(i.id)}><img src={i.img} alt="" /></button>
                  <p className='pt-2'>{i.title.slice(0, 20)}</p>
                  <p>{i.price}</p>
                  <span>{active == 'drinks'? (lang == 'RU'?`Есть ${i.bowls} бутылки`:`${i.bowls}-ta mavjud`):(lang == 'UZ'? `${i.bowls}-ta idishda mavjud`:`Есть ${i.bowls} тарелки`)}</span>
                </div>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Order />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
<Order />
export default Home