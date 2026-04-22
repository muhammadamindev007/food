import { useEffect, useState } from 'react'
import './Order.css'

function Order({lang}) {
    const [active, setActive] = useState(true)
    const [foodlist, setFoodlist] = useState([])
    const [left, setLeft] = useState(false)
    const [payment,setPayment] = useState('')
    const [open,setOpen] = useState(false)

    useEffect(() => {
        const loadData = () => {
            const data = JSON.parse(localStorage.getItem('foodlist'))
            setFoodlist(data)
        }
        loadData()
        window.addEventListener('foodUpdated', loadData)

        return () => {
            window.removeEventListener('foodUpdated', loadData)
        }
    }, [])

    function fnVal(e) {
        setActive(e.target.value);
    }

    function fnDel(id) {
        let arr = JSON.parse(localStorage.getItem('foodlist') || '[]')
        let found = arr.find((item) => item.id == id)
        if (found.count > 1) {
            found.count = found.count - 1
        } else {
            arr = arr.filter((item) => item.id != id)
        }
        setFoodlist(arr)
        localStorage.setItem('foodlist', JSON.stringify(arr))
        window.dispatchEvent(new Event('foodUpdated'))

    }

    const totalPrice = (foodlist || []).reduce((sum, item) => {
        const price = Number(item.price.replace('$', ''))
        return sum + (price * item.count)
    }, 0)


    return (
        <div className={left ? 'Order order__right' : 'Order order__left'}>
            <div className="order__inner">
            <h2 className='order__title'>{lang == 'RU'?'Заказы':'Buyurtmalar'} #34562</h2>
                <ul className="order__list">

                    <li className="order__item">
                        <button onClick={fnVal} value={'in'} className={active == 'in' ? 'order__btn active' : 'order__btn'}>{lang == 'RU'?'Поесть на месте':'Joyida ovqatlanish'}</button>
                    </li>
                    <li className="order__item">
                        <button onClick={fnVal} value={'go'} className={active == 'go' ? 'order__btn active' : 'order__btn'}>{lang == 'RU'?'С собой':'Olib ketish'}</button>
                    </li>
                    <li className="order__item">
                        <button onClick={fnVal} value={'delivery'} className={active == 'delivery' ? 'order__btn active' : 'order__btn'}>{lang == 'RU'?'Доставка':'Yetkazish'}</button>
                    </li>
                </ul>
                <div className="order__info">
                    <p>Item</p>
                    <div><p>Qty</p> <p>Price</p></div>
                </div>
                <div className='bottom__line'></div>
            </div>
            <ul className="order__menu">
                {
                    (foodlist || []).map((item, index) => (
                        <li key={index} className="order__thing">
                            <div className='order__control'>
                                <div className='order__inner2'>
                                    <img width={40} height={40} src={item.img} alt="" />
                                    <div className='order__name'>
                                        <p>{item.title.slice(0, 15)}...</p>
                                        <span>{item.price}</span>
                                    </div>
                                </div>
                                <div className="count">
                                    <span className="count__btn">{item.count}</span>
                                    <p className='pt-3'>$ {Number(item.price.replace('$', '')) * item.count}</p>
                                </div>
                            </div>
                            <div className="order__comment">
                                <input type="text" placeholder='Order Note...' />
                                <div className="delete">
                                    <button onClick={() => fnDel(item.id)}><i className="bi bi-trash3"></i></button>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <div className="payment__footer">
                <div className="discount">
                    <span>Discount</span>
                    <p>$0</p>
                </div>
                <div className="total">
                    <span>Sub total</span>
                    <p>$ {totalPrice.toFixed(2)}</p>
                </div>
                <button className={left ? 'display__none' : 'display__block'} onClick={() => setLeft(true)}>Continue to Payment</button>
            </div>

            <div className={left?'payment__methods display__blok':'payment__methods display__none'}>
                <div className="methods__header">
                    <h3>Payment</h3>
                    <p>3 payment methods available</p>
                </div>
                <div className="bottom__line2"></div>
                <p className='text-light fs-5 ps-4 pt-3'>Payment Method</p>
                <div className="payment__list">
                    <button onClick={()=>setPayment('credit')} className={payment=='credit'?"payment__item active1":"payment__item"}>
                        <i className='bi bi-credit-card'></i>
                        <span>Credit Card</span>
                    </button>
                    <button onClick={()=>setPayment('paypal')} className={payment == 'paypal'?"payment__item active1":"payment__item"}>
                        <i className="bi bi-paypal"></i>
                        <span>Paypal</span>
                    </button>
                    <button onClick={()=>setPayment('cash')} className={payment == 'cash'?"payment__item active1":"payment__item"}>
                        <i className="bi bi-cash"></i>
                        <span>Cash</span>
                    </button>
                </div>
                <div className='payment__inputs'>
                <p>Cardholder Name</p>
                <input className='w-100' type="text" placeholder='Levi Ackerman'/>
                <p className='pt-4'>Card Number</p>
                <input className='w-100' type="text" placeholder='2564 1421 0897 1244'/>
                <div className="payment__date pt-5">
                <div className="payment__inner">
                <p>Expiration Date</p>
                <input type="text" placeholder='02/2022'/>
                </div>
                <div className="payment__inner">
                <p>CVV</p>
                <input type="password" />
                </div>
            </div>
            <div className="confirm__control">
                <button className='confirm__btn' onClick={()=>setLeft(false)}>Cancel</button>
                <button className='confirm__btn'>Confirm Payment</button>
            </div>
            </div>
            </div>
            <div onClick={()=>setLeft(false)} className={left?"box__shadow display__block":"box__shadow display__none"}></div>
        </div>
    )
}
export default Order

