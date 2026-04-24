import React from 'react'
import './Pie.css'
import avatar1 from '../../assets/img/avatar1.png'
import avatar2 from '../../assets/img/avatar2.png'
import avatar3 from '../../assets/img/avatar3.png'
import avatar4 from '../../assets/img/avatar4.png'
import avatar5 from '../../assets/img/avatar5.png'
import RadialChart from '../../components/Radialbar/Radialbar'

function Pie({lang,setLang}) {
    return (
        <div className='Pie'>
            <div className="pie__inner">
                
            <div className="pie__header">
                <h2 className='text-light'>{lang == 'RU'?'Панель управления':'Boshqaruv paneli'}</h2>
                <p>{lang == 'RU'? 'Вторник, 2 февраля 2021 г.':'Seshanba, 2-fevral, 2021-yil'}</p>
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
                        <p>{lang == 'RU'?'Общий доход':'Jami kirim'}</p>
                    </div>
                </li>
                <li className="total__item">
                    <div className="total__div">
                        <span className='total__span'>
                            <div className='total__wrapper2'><i className="bi bi-bookmark"></i></div>
                            <div className='total__percent2'>-12.40% <div className='total__icon2'><i className="bi bi-arrow-down"></i></div></div>
                        </span>
                        <h4>23,456</h4>
                        <p>{lang == 'RU'?'Всего блюд':'Jami ovqat'}</p>
                    </div>
                </li>
                <li className="total__item">
                    <div className="total__div">
                        <span className='total__span'>
                            <div className='total__wrapper'><i className="icon__ppl bi bi-people-fill"></i></div>
                            <div className='total__percent1'>+2.40% <div className='total__icon'><i className="bi bi-arrow-up-short"></i></div></div>
                        </span>
                        <h4>1234</h4>
                        <p>{lang == 'RU'?'Всего клиентов':'Jami istemolchi'}</p>
                    </div>
                </li>
            </ul>

            <div className="customers">
                <div className="order__report">
                    <h4>{lang == 'RU'?'Отчет о заказе':'Buyurtma hisoboti'}</h4>
                    <div className="filter__order">
                        <i className="bi bi-filter"></i>
                        <p>{lang == 'RU'?'Порядок фильтра':'Tartiblash'}</p>
                    </div>
                </div>
                <div className='order__top'>
                    <p>{lang == 'RU'?'Клиент':'Istemolchi'}</p>
                    <p>{lang == 'RU'?'Меню':'Menyu'}</p>
                    <p>{lang == 'RU'?'Оплата':"To'lov"}</p>
                    <p className='status'>{lang == 'RU'?'Статус':'Status'}</p>
                </div>
                <div className="border__bottom"></div>
                <div className="customer__info">
                    <div className="customer__name">
                        <div><img src={avatar1} alt="" /></div>
                        <p>Eren Jaegar</p>
                    </div>
                    <p className='customer__food'>Hot spicy fried rice with omelet</p>
                    <p className='customer__price'>$125</p>
                    <div className="customer__status">
                        <span title={lang == 'RU'?'Завершенный':'Tasdiqlangan'} className='status__food'>{lang == 'RU'?'Завершенный':'Tasdiqlangan'}</span>
                        <i class="bi bi-check2 status__accepted"></i>
                    </div>
                </div>
                <div className="customer__info">
                    <div className="customer__name1">
                        <div><img src={avatar2} alt="" /></div>
                        <p>Reiner Braunn</p>
                    </div>
                    <p className='customer__food'>Hot spicy fried rice with omelet</p>
                    <p className='customer__price'>$145</p>
                    <div className="customer__status1">
                        <span title={lang == 'RU'?'Подготовка':'Tayyorlanayabdi'} className='status__food'>{lang == 'RU'?'Подготовка':'Tayyorlanayabdi'}</span>
                        <i class="bi bi-hourglass-top"></i>
                    </div>
                </div>
                <div className="customer__info">
                    <div className="customer__name2">
                        <div><img src={avatar3} alt="" /></div>
                        <p>Levi Ackerman</p>
                    </div>
                    <p className='customer__food'>Hot spicy fried rice with omelet</p>
                    <p className='customer__price'>$105</p>
                    <div className="customer__status2">
                        <span title={lang == 'RU'?'В ожидании':'Kutilayabdi'} className='status__food'>{lang == 'RU'?'В ожидании':'Kutilayabdi'}</span>
                        <i class="bi bi-hourglass-split status__accepted"></i>
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
                        <span title={lang == 'RU'?'Завершенный':'Tasdiqlangan'} className='status__food'>{lang == 'RU'?'Завершенный':'Tasdiqlangan'}</span>
                        <i class="bi bi-check2 status__accepted"></i>
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
                        <span title={lang == 'RU'?'Завершенный':'Tasdiqlangan'} className='status__food'>{lang == 'RU'?'Завершенный':'Tasdiqlangan'}</span>
                        <i class="bi bi-check2 status__accepted"></i>
                    </div>
                </div>
            </div>

            </div>
            
            <div className="most__ordered">

            <div className="most__header">
                    <div className="most__dishes">
                        <h3 title={lang == 'RU'?'Самый заказываемый':"Eng ko'p buyurtma qilingan"}>{lang == 'RU'?'Самый заказываемый':"Eng ko'p buyurtma qilingan"}</h3>
                        <select>
                            <option>{lang == 'RU'?'Сегодня':'Bugun'}</option>
                            <option>{lang == 'RU'?'Вчера':'Kecha'}</option>
                        </select>
                    </div>
                    <div className="bottom__line3"></div>
                    <ul className="ordered__list">
                        <li className="ordered__item">
                            <img width={53.88} height={53.88} src="https://static.vecteezy.com/system/resources/previews/067/929/218/non_2x/spicy-thai-style-noodles-with-chopsticks-isolated-on-transparent-background-free-png.png" alt="" />
                            <div className='ordered__text'>
                                <p className='text-light'>Spicy seafood noodles</p>
                                <p className='text-white-50 dish__count'>{lang == 'RU'?'Заказано 200 блюд.':'200-ta ovqat buyurtma qilingan'}</p>
                            </div>
                        </li>
                        <li className="ordered__item">
                            <img width={53.88} height={53.88} src="https://png.pngtree.com/png-vector/20250715/ourmid/pngtree-fettuccine-with-mushrooms-isolated-on-white-background-png-image_16769773.webp" alt="" />
                            <div className='ordered__text'>
                                <p className='text-light'>Spicy seafood noodles</p>
                                <p className='text-white-50 dish__count'>{lang == 'RU'?'Заказано 200 блюд.':'200-ta ovqat buyurtma qilingan'}</p>
                            </div>
                        </li>
                        <li className="ordered__item">
                            <img width={53.88} height={53.88} src="https://png.pngtree.com/png-vector/20241204/ourmid/pngtree-hearty-noodle-soup-with-beef-and-dumplings-png-image_14433652.png" alt="" />
                            <div className='ordered__text'>
                                <p className='text-light'>Spicy seafood noodles</p>
                                <p className='text-white-50 dish__count'>{lang == 'RU'?'Заказано 200 блюд.':'200-ta ovqat buyurtma qilingan'}</p>
                            </div>
                        </li>
                    </ul>
                    <button className='ordered__btn'>{lang == 'RU'?'Посмотреть все':"Barchasini ko'rish"}</button>
                </div>

                <div className='order__type'>
                    <div className="most__dishes">
                        <h3 title={lang == 'RU'?'Наиболее часто заказываемый тип':"Eng tez buyurtma qilinadigon tur"}>{lang == 'RU'?'Наиболее часто заказываемый тип':"Eng tez buyurtma qilinadigon tur"}</h3>
                        <select>
                            <option>{lang == 'RU'?'Сегодня':'Bugun'}</option>
                            <option>{lang == 'RU'?'Вчера':'Kecha'}</option>
                        </select>
                    </div>
                    <div className="bottom__line4"></div>
                    <div className="customer__chart">
                    <div className='radial__chart'>
                        <RadialChart element={lang}/>
                    </div>
                    <ul className="customer__list">
                        <li className="customer__item">
                            <div className="customer__color"></div>
                            <div className='cutomer__number'>
                                <p>{lang == 'RU'?'Поесть на месте':'Joyida ovqatlanish'}</p>
                                <p className='cutomer__span'>200 {lang == 'RU'?'клиенты':'mijozlar'}</p>
                            </div>
                        </li>
                        <li className="customer__item">
                            <div className="customer__color2"></div>
                            <div className='cutomer__number'>
                                <p>{lang == 'RU'?'С собой':'Olib ketish'}</p>
                                <p className='cutomer__span'>122 {lang == 'RU'?'клиенты':'mijozlar'}</p>
                            </div>
                        </li>
                        <li className="customer__item">
                            <div className="customer__color3"></div>
                            <div className='cutomer__number'>
                                <p>{lang == 'RU'?'Доставка':'Yetkazish'}</p>
                                <p className='cutomer__span'>264 {lang == 'RU'?'клиенты':'mijozlar'}</p>
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