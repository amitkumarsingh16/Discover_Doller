import React from 'react'

const Project = () => {
    const imgArray = ["assets/product-1.jpg","assets/product-2.jpg","assets/product-3.jpg","assets/product-4.jpg",]
  return (
    <section className="f">
    
    <div id="d2">
    <h2>Featured Products</h2>
   </div>
   <div className="h">
   {imgArray.map((index,key)=>{
    return(
        <div className="i">
        <a href="oneproduct.html"> <img src={index} width="200px"/></a>
         <p>Red Printed T-Shirt<br/>Rs. {key*100+100}</p>
     </div>
    )
   })}
   </div>
   </section>
      
       
   
    
   
  )
}

export default Project