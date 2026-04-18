import React from 'react'
import './Pie.css'
import avatar1 from '../../assets/img/avatar1.png'
import avatar2 from '../../assets/img/avatar2.png'
import avatar3 from '../../assets/img/avatar3.png'
import avatar4 from '../../assets/img/avatar4.png'
import avatar5 from '../../assets/img/avatar5.png'
import RadialChart from '../../components/Radialbar/Radialbar'

function Pie() {
    return (
        <div className='Pie pie__container'>
            <div className="pie__header">
                <h2 className='text-light'>Dashboard</h2>
                <p>Tuesday 2 Feb, 2021</p>
                <div className="bottom__lin"></div>
            </div>
            <ul className="total__list">
                <li className="total__item">
                    <div className="total__div">
                        <span className='total__span'>
                            <div className='total__wrapper'><i className="bi bi-currency-dollar"></i></div>
                            <div className='total__percent1'>+32.40% <div className='total__icon'><i className="bi bi-arrow-up-short"></i></div></div>
                        </span>
                        <h4>$10,243.00</h4>
                        <p>Total Revenue</p>
                    </div>
                </li>
                <li className="total__item">
                    <div className="total__div">
                        <span className='total__span'>
                            <div className='total__wrapper2'><i className="bi bi-bookmark"></i></div>
                            <div className='total__percent2'>-12.40% <div className='total__icon2'><i className="bi bi-arrow-down"></i></div></div>
                        </span>
                        <h4>23,456</h4>
                        <p>Total Dishes</p>
                    </div>
                </li>
                <li className="total__item">
                    <div className="total__div">
                        <span className='total__span'>
                            <div className='total__wrapper'><i className="icon__ppl bi bi-people-fill"></i></div>
                            <div className='total__percent1'>+2.40% <div className='total__icon'><i className="bi bi-arrow-up-short"></i></div></div>
                        </span>
                        <h4>1234</h4>
                        <p>Total Customers</p>
                    </div>
                </li>
            </ul>
            <div className="customers">
                <div className="order__report">
                    <h4>Order Report</h4>
                    <div className="filter__order">
                        <i className="bi bi-filter"></i>
                        <p>Filter Order</p>
                    </div>
                </div>
                <div className='order__top'>
                    <p>Customer</p>
                    <p>Menu</p>
                    <p>Total Payment</p>
                    <p className='status'>Status</p>
                </div>
                <div className="border__bottom"></div>
                <div className="customer__info">
                    <div className="customer__name">
                        <div><img src={avatar1} alt="" /></div>
                        <p>Eren Jaegar</p>
                    </div>
                    <p className='customer__food'>Spicy seasoned seafood noodles </p>
                    <p className='customer__price'>$125</p>
                    <div className="customer__status">
                        <p className='status__food'>Completed</p>
                    </div>
                </div>
                <div className="customer__info">
                    <div className="customer__name1">
                        <div><img src={avatar2} alt="" /></div>
                        <p>Reiner Braunn</p>
                    </div>
                    <p className='customer__food'>Salted Pasta with mushroom sauce</p>
                    <p className='customer__price'>$145</p>
                    <div className="customer__status1">
                        <p className='status__food'>Preparing</p>
                    </div>
                </div>
                <div className="customer__info">
                    <div className="customer__name2">
                        <div><img src={avatar3} alt="" /></div>
                        <p>Levi Ackerman</p>
                    </div>
                    <p className='customer__food'>Beef dumpling in hot and sour soup</p>
                    <p className='customer__price'>$105</p>
                    <div className="customer__status2">
                        <p className='status__food'>Pending</p>
                    </div>
                </div>
                <div className="customer__info">
                    <div className="customer__name3">
                        <div><img src={avatar4} alt="" /></div>
                        <p className='customer__title'>Historia Reiss</p>
                    </div>
                    <p className='customer__food'>Hot spicy fried rice with omelet</p>
                    <p className='customer__price'>$45</p>
                    <div className="customer__status">
                        <p className='status__food'>Completed</p>
                    </div>
                </div>
                <div className="customer__info">
                    <div className="customer__name4">
                        <div><img src={avatar5} alt="" /></div>
                        <p>Hanji Zoe</p>
                    </div>
                    <p className='customer__food'>Hot spicy fried rice with omelet</p>
                    <p className='customer__price'>$245</p>
                    <div className="customer__status">
                        <p className='status__food'>Completed</p>
                    </div>
                </div>
            </div>
            <div className="most__ordered">
                <div className="most__header">
                    <div className="most__dishes">
                        <h3>Most Ordered</h3>
                        <select>
                            <option selected='Today'>Today</option>
                            <option>Yesterday</option>
                        </select>
                    </div>
                    <div className="bottom__line3"></div>
                    <ul className="ordered__list">
                        <li className="ordered__item">
                            <img width={53.88} height={53.88} src="https://static.vecteezy.com/system/resources/previews/067/929/218/non_2x/spicy-thai-style-noodles-with-chopsticks-isolated-on-transparent-background-free-png.png" alt="" />
                            <div className='ordered__text'>
                                <p className='text-light'>Spicy seasoned seafood noodles</p>
                                <p className='text-white-50 dish__count'>200 dishes ordered</p>
                            </div>
                        </li>
                        <li className="ordered__item">
                            <img width={53.88} height={53.88} src="https://png.pngtree.com/png-vector/20250715/ourmid/pngtree-fettuccine-with-mushrooms-isolated-on-white-background-png-image_16769773.webp" alt="" />
                            <div className='ordered__text'>
                                <p className='text-light'>Spicy seasoned seafood noodles</p>
                                <p className='text-white-50 dish__count'>200 dishes ordered</p>
                            </div>
                        </li>
                        <li className="ordered__item">
                            <img width={53.88} height={53.88} src="https://png.pngtree.com/png-vector/20241204/ourmid/pngtree-hearty-noodle-soup-with-beef-and-dumplings-png-image_14433652.png" alt="" />
                            <div className='ordered__text'>
                                <p className='text-light'>Spicy seasoned seafood noodles</p>
                                <p className='text-white-50 dish__count'>200 dishes ordered</p>
                            </div>
                        </li>
                    </ul>
                    <button className='ordered__btn'>View All</button>
                </div>
                <div className='order__type'>
                    <div className="most__dishes">
                        <h3>Most Type of Ordered</h3>
                        <select>
                            <option selected='Today'>Today</option>
                            <option>Yesterday</option>
                        </select>
                    </div>
                    <div className="bottom__line4"></div>
                    <div className="customer__chart">
                    <div className='radial__chart'>
                        <RadialChart />
                    </div>
                    <ul className="customer__list">
                        <li className="customer__item">
                            <div className="customer__color"></div>
                            <div className='cutomer__number'>
                                <p>Dine In</p>
                                <p className='cutomer__span'>200 customers</p>
                            </div>
                        </li>
                        <li className="customer__item">
                            <div className="customer__color2"></div>
                            <div className='cutomer__number'>
                                <p>To Go</p>
                                <p className='cutomer__span'>122 customers</p>
                            </div>
                        </li>
                        <li className="customer__item">
                            <div className="customer__color3"></div>
                            <div className='cutomer__number'>
                                <p>Delivery</p>
                                <p className='cutomer__span'>264 customers</p>
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pie