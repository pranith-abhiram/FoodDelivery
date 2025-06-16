import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>choose from a diverse menu featuring a detectable array of dishes</p>
      <div className='explore-menu-list'>
        {menu_list.map((item,index)=>{
            return(
                <div className='explore-menu-list-item' key={index}>
                    <img src={item.menu_image}/>
                    <p>{item.menu_name}</p>
                </div>   
            )
        })}
      </div>
      <hr></hr>
    </div>
  )
}

export default ExploreMenu
