import React from "react";
import { NavItemData } from "./NavItemData";
import  { MdKeyboardArrowDown } from "react-icons/md"
import jsonData from '../data.json'
import './NavItem.css';


const NavItem = ()=>{
  const [data, setData] = React.useState(jsonData.menuItem);
    return(
          <div className="NavItemContainer">
          {data.map((item)=>{
            return(
             <div className="NavItemImg">
             <div className="menu_main_cont" style={{display:'flex',alignItems:'center'}}>
                <h3 className="NavItemText">{item.name}</h3>
                {item.menu[0].subMenuItems.length>0 && (
                  <div>
                    <div style={{display:'flex'}}><MdKeyboardArrowDown/></div>
                    <div className="menu_cont">
                      {item.menu.map((itm)=>(
                        <div className="menu_category_item">
                          <div className="category_name">{itm.menuItem}</div>
                          <div className="subCategory_cont">{itm.subMenuItems.map((i)=>(
                            <div className="category_name">{i}</div>
                          ))}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            )
          })}
            
          
             
            
          </div>
    )
}

export default NavItem