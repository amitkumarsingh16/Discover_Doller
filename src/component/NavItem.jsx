import React from "react";
import { NavItemData } from "./NavItemData";
import  { MdKeyboardArrowDown } from "react-icons/md"
import jsonData from '../data.json'
import './NavItem.css';


const NavItem = ()=>{
  const [data, setData] = React.useState(jsonData.categoryItem)
  console.log(data);
    return(
          <div className="NavItemContainer">
          {data.map((item)=>{
            return(
             <div className="NavItemImg">
             <div className="menu_main_cont" style={{display:'flex',alignItems:'center'}}>
                <h3 className="NavItemText">{item.name}</h3>
                {item.Category[0].subCategory.length>0 && (
                  <div>
                    <div style={{display:'flex'}}><MdKeyboardArrowDown/></div>
                    <div className="menu_cont">
                      {item.Category.map((itm)=>(
                        <div className="menu_category_item">
                          <div className="category_name">{itm.Category_name}</div>
                          <div className="subCategory_cont">{itm.subCategory.map((i)=>(
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