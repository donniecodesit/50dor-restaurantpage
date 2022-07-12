import React from 'react';
import { menuItems } from '../Data/menuItems';
import MenuItem from '../Components/MenuItem';
import "../Styles/Menu.css";

export default function Menu() {
  return (
    <div className="menu">
        <h1 className="menuTitle">Our Menu!</h1>
        <div className="menuList">
            {menuItems.map((item, key) => {
                return <MenuItem key={key} image={item.image} name={item.name} price={item.price}/>
            })}
        </div>
    </div>
  )
}