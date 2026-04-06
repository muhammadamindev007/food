import { useEffect, useState } from 'react'
import './Settings.css'

function Settings() {
    const [active, setActive] = useState('hot')
    const [food,setFood] = useState([])
    const [update,setUpdate] = useState(null)

    function fnVal(e) {
        setActive(e.target.value);
    }

    //ADD
    function fnAdd(e){
        e.preventDefault()
        let foodList = {
            img:e.target.img.value,
            title:e.target.title.value,
            price:e.target.price.value,
            bowls:e.target.bowls.value,
            category:e.target.category.value
        }
        fetch('https://69cfdd00a4647a9fc67614e2.mockapi.io/foodlist',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(foodList)
        })
        .then((res)=>res.json())
        .then(()=>{
            fetch('https://69cfdd00a4647a9fc67614e2.mockapi.io/foodlist')
            .then((res)=>res.json())
            .then((data)=> setFood(data))
        })
    }
    

    //DELETE
    function fnDel(id){
        fetch(`https://69cfdd00a4647a9fc67614e2.mockapi.io/foodlist/${id}`,{
            method:'DELETE',
            headers:{'content-type':'application/json'},
        })
        .then((res)=>res.json())
        .then(()=>{
            fetch('https://69cfdd00a4647a9fc67614e2.mockapi.io/foodlist')
            .then((res)=>res.json())
            .then((data)=> setFood(data))
        })
    }


    //UPDATE
    function fnUpdate(e){
        e.preventDefault()
        let foodList = {
            img:e.target.img.value,
            title:e.target.title.value,
            price:e.target.price.value,
            bowls:e.target.bowls.value,
            category:e.target.category.value
        }
        fetch(`https://69cfdd00a4647a9fc67614e2.mockapi.io/foodlist/${update}`,{
            method:'PUT',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(foodList)
        })
        .then((res)=>res.json())
        .then(()=>{
            fetch('https://69cfdd00a4647a9fc67614e2.mockapi.io/foodlist')
            .then((res)=>res.json())
            .then((data)=> setFood(data))
        })
    }
    useEffect(()=>{
        fetch('https://69cfdd00a4647a9fc67614e2.mockapi.io/foodlist')
        .then((res)=>res.json())
        .then((data)=> setFood(data))
    },[])

    return (
        <div className='Settings'>
            <h3 className='settings__title'>Settings</h3>
            <div className="product__management">
                <h4>Product Management</h4>
                <ul className="catgory__list">
                    <li className="category__item">
                        <button className={active == 'hot' ? 'category__btn1 active' : 'category__btn1'} value={'hot'} onClick={fnVal}>Hot Dishes</button>
                    </li>
                    <li className="category__item">
                        <button className={active == 'cold' ? 'category__btn1 active' : 'category__btn1'} value={'cold'} onClick={fnVal}>Cold Dishes</button>
                    </li>
                    <li className="category__item">
                        <button className={active == 'soup' ? 'category__btn1 active' : 'category__btn1'} value={'soup'} onClick={fnVal}>Soup</button>
                    </li>
                    <li className="category__item">
                        <button className={active == 'grill' ? 'category__btn1 active' : 'category__btn1'} value={'grill'} onClick={fnVal}>Grill</button>
                    </li>
                    <li className="category__item">
                        <button className={active == 'appetizer' ? 'category__btn1 active' : 'category__btn1'} value={'appetizer'} onClick={fnVal}>Appetizer</button>
                    </li>
                    <li className="category__item">
                        <button className={active == 'dessert' ? 'category__btn1 active' : 'category__btn1'} value={'dessert'} onClick={fnVal}>Dessert</button>
                    </li>
                    <li className="category__item">
                        <button className={active == 'drinks' ? 'category__btn1 active' : 'category__btn1'} value={'drinks'} onClick={fnVal}>Drinks</button>
                    </li>
                </ul>
                <div className="border__bottom2"></div>
                <ul className="setting__list">
                    <li className="add__dish" data-bs-toggle="modal" data-bs-target="#addModal">
                        <div className="new__dish">
                            <div>
                                <span>+</span>
                                <p>{active == 'drinks'?'Add new drinks':'Add new dishes' && active == 'dessert'?'Add new desserts':'Add new dishes'}</p>
                            </div>
                        </div>
                    </li>
                    {
                        food.filter((item)=> item.category == active).map((item,index)=>(
                            <li className="settings__item" key={index}>
                             <div className='settings__div'>
                                 <img width={127} height={127} src={item.img} alt="" />
                                 <p className='pt-2'>{item.title}</p>
                                 <div className='d-flex gap-2 ps-4'>
                                     <p>{item.price}</p>
                                     <span>{item.bowls} {active == 'drinks'?'Bottles':'Bowls'}</span>
                                 </div>
                                 <div className="settings__control gap-2">
                                     <button onClick={()=>fnDel(item.id)} className='btn btn-danger'><i className="bi bi-trash3"></i></button>
                                     <button onClick={()=>setUpdate(item.id)} data-bs-toggle="modal" data-bs-target="#updateModal" className='btn btn-primary'><i className="bi bi-pencil"></i></button>
                                 </div>
                             </div>
                         </li>
                        ))
                    //     food.map((item,index)=>(
                    //         <li className="settings__item" key={index}>
                    //     <div className='settings__div'>
                    //         <img width={127} height={127} src={item.img} alt="" />
                    //         <p className='pt-2'>{item.title}</p>
                    //         <div className='d-flex gap-2 ps-4'>
                    //             <p>{item.price}</p>
                    //             <span>{item.bowls} Bowls</span>
                    //         </div>
                    //         <div className="settings__control gap-2">
                    //             <button onClick={()=>fnDel(item.id)} className='btn btn-danger'><i className="bi bi-trash3"></i></button>
                    //             <button onClick={()=>setUpdate(item.id)} data-bs-toggle="modal" data-bs-target="#updateModal" className='btn btn-primary'><i className="bi bi-pencil"></i></button>
                    //         </div>
                    //     </div>
                    // </li>
                    //     ))
                    }
                </ul>
            </div>



            <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content modal__body">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add dish</h1>
                            <button type="button" className="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='form-control w-100 form__control' onSubmit={fnAdd}>
                                <input name='img' type="text" className='form-control w-100 form__input mt-2' placeholder='add img' />
                                <input name='title' type="text" className='form-control w-100 form__input mt-2' placeholder='add title' />
                                <input name='price' type="text" className='form-control w-100 form__input mt-2' placeholder='add price' />
                                <input name='bowls' type="text" className='form-control w-100 form__input mt-2' placeholder='add bowls' />
                                <input name='category' type="text" className='form-control w-100 form__input mt-2' placeholder='add category' />
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button data-bs-dismiss="modal" type="submit" className="btn btn-primary">Save changes</button>
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
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add dish</h1>
                            <button type="button" className="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='form-control w-100 form__control' onSubmit={fnUpdate}>
                                <input name='img' type="text" className='form-control w-100 form__input mt-2' placeholder='add img url' />
                                <input name='title' type="text" className='form-control w-100 form__input mt-2' placeholder='add title' />
                                <input name='price' type="text" className='form-control w-100 form__input mt-2' placeholder='add price' />
                                <input name='bowls' type="text" className='form-control w-100 form__input mt-2' placeholder='add bowls' />
                                <input name='category' type="text" className='form-control w-100 form__input mt-2' placeholder='add category' />
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button data-bs-dismiss="modal" type="submit" className="btn btn-primary">Save changes</button>
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