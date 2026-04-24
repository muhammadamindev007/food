import { useEffect, useState } from 'react'
import './Settings.css'

function Settings({ lang }) {
    const [active, setActive] = useState('hot')
    const [food, setFood] = useState([])
    const [update, setUpdate] = useState(null)


    function fnVal(e) {
        setActive(e.target.value);
    }

    //ADD
    function fnAdd(e) {
        e.preventDefault()
        let foodList = {
            img: e.target.img.value,
            title: e.target.title.value,
            price: e.target.price.value,
            bowls: e.target.bowls.value,
            category: e.target.category.value
        }
        fetch('https://69cfdd00a4647a9fc67614e2.mockapi.io/foodlist', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(foodList)
        })
            .then((res) => res.json())
            .then(() => {
                fetch('https://69cfdd00a4647a9fc67614e2.mockapi.io/foodlist')
                    .then((res) => res.json())
                    .then((data) => setFood(data))
            })
    }


    //DELETE
    function fnDel(id) {
        fetch(`https://69cfdd00a4647a9fc67614e2.mockapi.io/foodlist/${id}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
        })
            .then((res) => res.json())
            .then(() => {
                fetch('https://69cfdd00a4647a9fc67614e2.mockapi.io/foodlist')
                    .then((res) => res.json())
                    .then((data) => setFood(data))
            })
    }


    //UPDATE
    function fnUpdate(e) {
        e.preventDefault()
        let foodList = {
            img: e.target.img.value,
            title: e.target.title.value,
            price: e.target.price.value,
            bowls: e.target.bowls.value,
            category: e.target.category.value
        }
        fetch(`https://69cfdd00a4647a9fc67614e2.mockapi.io/foodlist/${update}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(foodList)
        })
            .then((res) => res.json())
            .then(() => {
                fetch('https://69cfdd00a4647a9fc67614e2.mockapi.io/foodlist')
                    .then((res) => res.json())
                    .then((data) => setFood(data))
            })
    }
    useEffect(() => {
        fetch('https://69cfdd00a4647a9fc67614e2.mockapi.io/foodlist')
            .then((res) => res.json())
            .then((data) => setFood(data))
    }, [])

    return (
        <div className='Settings'>
            <h3 className='settings__title'>{lang == 'RU' ? 'Настройки' : 'Sozlamalar'}</h3>
            <div className="product__management">
                <h4>{lang == 'RU' ? 'Управление продуктами' : 'Mahsulot boshqaruvi'}</h4>

                <ul className="catgory__list">
                    <li className="category__item">
                        <button className={active == 'hot' ? 'category__btn1 active' : 'category__btn1'} value={'hot'} onClick={fnVal}>{lang == 'RU' ? 'Горячие блюда' : 'Qaynoq taomlar'}</button>
                    </li>
                    <li className="category__item">
                        <button className={active == 'cold' ? 'category__btn1 active' : 'category__btn1'} value={'cold'} onClick={fnVal}>{lang == 'RU' ? 'Холодные блюда' : 'Sovuq taomlar'}</button>
                    </li>
                    <li className="category__item">
                        <button className={active == 'soup' ? 'category__btn1 active' : 'category__btn1'} value={'soup'} onClick={fnVal}>{lang == 'RU' ? 'Суп' : "Sho'rva"}</button>
                    </li>
                    <li className="category__item">
                        <button className={active == 'grill' ? 'category__btn1 active' : 'category__btn1'} value={'grill'} onClick={fnVal}>{lang == 'RU' ? 'Гриль' : 'Gril'}</button>
                    </li>
                    <li className="category__item">
                        <button className={active == 'appetizer' ? 'category__btn1 active' : 'category__btn1'} value={'appetizer'} onClick={fnVal}>{lang == 'RU' ? 'Закуска' : 'Aperatif'}</button>
                    </li>
                    <li className="category__item">
                        <button className={active == 'dessert' ? 'category__btn1 active' : 'category__btn1'} value={'dessert'} onClick={fnVal}>{lang == 'RU' ? 'Десерт' : 'Desert'}</button>
                    </li>
                    <li className="category__item">
                        <button className={active == 'drinks' ? 'category__btn1 active' : 'category__btn1'} value={'drinks'} onClick={fnVal}>{lang == 'RU' ? 'Напитки' : 'Ichimliklar'}</button>
                    </li>
                </ul>

                <select
                    className="category__select"
                    value={active}
                    onChange={(e) => setActive(e.target.value)}
                >
                    <option hidden value="hot">{lang == 'RU' ? 'Горячее блюдо' : 'Qaynoq taom'}</option>
                    <option value="cold">{lang == 'RU' ? 'Холодное блюдо' : 'Sovuq taom'}</option>
                    <option value="soup">{lang == 'RU' ? 'Суп' : "Sho'rva"}</option>
                    <option value="grill">{lang == 'RU' ? 'Гриль' : 'Gril'}</option>
                    <option value="appetizer">{lang == 'RU' ? 'Закуска' : 'Aperatif'}</option>
                    <option value="dessert">{lang == 'RU' ? 'Десерт' : 'Desert'}</option>
                    <option value="drinks">{lang == 'RU' ? 'Напиток' : 'Ichimlik'}</option>
                </select>

                <div className="border__bottom2"></div>
                <ul className="setting__list">
                    <li className="add__dish" data-bs-toggle="modal" data-bs-target="#addModal">
                        <div className="new__dish">
                            <div>
                                <span>+</span>
                                <p>{active == 'drinks' ? (lang == 'RU' ? 'Добавить напиток' : 'Ichimlik kiriting') :
                                    active == 'soup' ? (lang == 'RU' ? 'Добавить суп' : "Sho'rva kiriting") :
                                        active == 'appetizer' ? (lang == 'RU' ? 'Добавить закуску' : 'Aperatif kiriting') :
                                            active == 'dessert' ? (lang == 'RU' ? 'Добавить десерт' : 'Desert kiriting') :
                                                active == 'cold' ? (lang == 'RU' ? 'Добавьте холодную еду' : 'Sovuq taom kiriting') :
                                                    active == 'grill' ? (lang == 'RU' ? 'Добавить гриль' : 'Grill kiriting') :
                                                        active == 'hot' ? (lang == 'RU' ? 'Добавьте горячую еду' : 'Qaynoq taom kiriting') : ''}</p>
                            </div>
                        </div>
                    </li>
                    {
                        food.filter((item) => item.category == active).map((item, index) => (
                            <li className="settings__item" key={index}>
                                <div className='settings__div'>
                                    <img width={127} height={127} src={item.img} alt="" />
                                    <p className='pt-2'>{item.title}</p>
                                    {/* <div className='d-flex gap-2 ps-4'>
                                        <p>{item.price}</p>
                                        <span>{active == 'drinks'? (lang == 'RU'?`Есть ${item.bowls} бутылки`:`${item.bowls}-ta mavjud`):(lang == 'UZ'? `${item.bowls}-ta idishda mavjud`:`Есть ${item.bowls} тарелки`)}</span>
                                        <span>{item.bowls} {active == 'drinks' ? 'Bottles' : 'Bowls'}</span>
                                    </div> */}
                                     <p>{item.price}</p>
                                        <span className='pb-3'>{active == 'drinks'? (lang == 'RU'?`Есть ${item.bowls} бутылки`:`${item.bowls} dona mavjud`):(lang == 'UZ'? `${item.bowls} idishda mavjud`:`Есть ${item.bowls} тарелки`)}</span>

                                    <div className="settings__control gap-2">
                                        <button onClick={() => fnDel(item.id)} className='btn btn-danger'><i className="bi bi-trash3"></i></button>
                                        <button onClick={() => setUpdate(item.id)} data-bs-toggle="modal" data-bs-target="#updateModal" className='btn btn-primary'><i className="bi bi-pencil"></i></button>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>



            <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content modal__body">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{lang == 'RU' ? 'Добавьте еду или напитки' : "Taom yoki ichimlik qo'shing"}</h1>
                            <button type="button" className="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='w-100 form__control' onSubmit={fnAdd}>
                                <input name='img' type="text" className='form-control w-100 form__input mt-2' placeholder={lang == 'RU' ? 'добавить URL изображения' : 'rasm linkini kiriting'} />
                                <input name='title' type="text" className='form-control w-100 form__input mt-2' placeholder={lang == 'RU' ? 'добавить заголовок' : 'sarlavhasini kiriting'} />
                                <input name='price' type="text" className='form-control w-100 form__input mt-2' placeholder={lang == 'RU' ? 'добавить цену' : "narxini kiriting"} />
                                <input name='bowls' type="text" className='form-control w-100 form__input mt-2' placeholder={lang == 'RU' ? 'добавить миски' : "idishlar sonini qo'shing"} />
                                <input name='category' type="text" className='form-control w-100 form__input mt-2' placeholder={lang == 'RU' ? 'добавить категорию' : "kategoriya qo'shing"} />
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{lang == 'RU' ? 'закрыть' : 'yopmoq'}</button>
                                    <button data-bs-dismiss="modal" type="submit" className="btn btn-primary">{lang == 'RU' ? 'хранилище' : 'saqlash'}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content modal__body">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{lang == 'RU' ? 'Добавьте еду или напитки' : "Taom yoki ichimlik qo'shing"}</h1>
                            <button type="button" className="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='form-control w-100 form__control' onSubmit={fnUpdate}>
                                <input name='img' type="text" className='form-control w-100 form__input mt-2' placeholder={lang == 'RU' ? 'добавить URL изображения' : 'rasm linkini kiriting'} />
                                <input name='title' type="text" className='form-control w-100 form__input mt-2' placeholder={lang == 'RU' ? 'добавить заголовок' : 'sarlavhasini kiriting'} />
                                <input name='price' type="text" className='form-control w-100 form__input mt-2' placeholder={lang == 'RU' ? 'добавить цену' : "narxini kiriting"} />
                                <input name='bowls' type="text" className='form-control w-100 form__input mt-2' placeholder={lang == 'RU' ? 'добавить миски' : "idishlar sonini qo'shing"} />
                                <input name='category' type="text" className='form-control w-100 form__input mt-2' placeholder={lang == 'RU' ? 'добавить категорию' : "kategoriya qo'shing"} />
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{lang == 'RU' ? 'закрыть' : 'yopmoq'}</button>
                                    <button data-bs-dismiss="modal" type="submit" className="btn btn-primary">{lang == 'RU' ? 'хранилище' : 'saqlash'}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Settings