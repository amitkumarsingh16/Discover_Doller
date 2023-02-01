import React from "react";
import { NavItemData } from "./NavItemData";
import './NavItem.css';


const NavItem = ()=>{

    return(
          <div className="NavItemContainer">
          {NavItemData.map((key)=>{
            return(
             <div className="NavItemImg">
             <img src={key.url}/>
             <h3 className="NavItemText">{key.text}</h3>
            </div>
            )
          })}
            
          
             
            
          </div>
    )
}

export default NavItem