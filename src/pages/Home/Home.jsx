import React, { useEffect, useState } from 'react'
import './Home.css'
import Order from '../Order/Order';

function Home() {
  const [active, setActive] = useState('hot')
  const [search, setSearch] = useState("")
  const [foodlist, setFoodlist] = useState(JSON.parse(localStorage.getItem('foodlist') || '[]'))
  const [food, setFood] = useState([])


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
  return (
    <div className='Home'>
      <div className="container">
        <div className="home__info">
          <div className="home__title">
            <h2>Wendy's Resto</h2>
            <p>Tuesday, 2 Feb 2021</p>
          </div>
          <div>
            <form onSubmit={() => fnSearch(event)} className="home__search" action="#">
              <button><i className="bi bi-search text-light"></i></button>
              <input autoComplete='off' name='name' type="text" placeholder='Search for food, coffe, etc...' />
            </form>
          </div>
        </div>
        <ul className="catgory__list">
          <li className="category__item">
            <button className={active == 'hot' ? 'category__btn active' : 'category__btn'} value={'hot'} onClick={fnVal}>Hot Dishes</button>
          </li>
          <li className="category__item">
            <button className={active == 'cold' ? 'category__btn active' : 'category__btn'} value={'cold'} onClick={fnVal}>Cold Dishes</button>
          </li>
          <li className="category__item">
            <button className={active == 'soup' ? 'category__btn active' : 'category__btn'} value={'soup'} onClick={fnVal}>Soup</button>
          </li>
          <li className="category__item">
            <button className={active == 'grill' ? 'category__btn active' : 'category__btn'} value={'grill'} onClick={fnVal}>Grill</button>
          </li>
          <li className="category__item">
            <button className={active == 'appetizer' ? 'category__btn active' : 'category__btn'} value={'appetizer'} onClick={fnVal}>Appetizer</button>
          </li>
          <li className="category__item">
            <button className={active == 'dessert' ? 'category__btn active' : 'category__btn'} value={'dessert'} onClick={fnVal}>Dessert</button>
          </li>
          <li className="category__item">
            <button className={active == 'drinks' ? 'category__btn active' : 'category__btn'} value={'drinks'} onClick={fnVal}>Drinks</button>
          </li>
        </ul>
        <select
          className="category__select"
          value={active}
          onChange={(e) => setActive(e.target.value)}
        >
          <option hidden value="hot">Hot Dishes</option>
          <option value="cold">Cold Dishes</option>
          <option value="soup">Soup</option>
          <option value="grill">Grill</option>
          <option value="appetizer">Appetizer</option>
          <option value="dessert">Dessert</option>
          <option value="drinks">Drinks</option>
        </select>


        <div className='choose__div'>
          <h4 className='text-light pt-3'>
            Choose {active == 'drinks' ? 'drinks' : active == 'dessert' ? 'desserts' : active == 'appetizer' ? 'appetizers' : active == 'grill' ? 'grill' : active == 'soup' ? 'soup' : 'dishes'}
          </h4>

          <div className="cart__wrapper">
            <i className="bi bi-cart3 text-light fs-4"></i>
            <div className="overall"><p>0</p></div>
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
                  <span>{i.bowls} {active == 'drinks' ? 'Bottles' : 'Bowls'} available</span>
                </div>
              </li>
            ))
          }
        </ul>
      </div>

    </div>
  )

}
<Order />
export default Home