import React from 'react'

function company(props){
    return(
        <div className="company"> 
            <h2 className="titleCm">We are a global companywith local culture </h2>
      
        <ul className="list-company">
            
    {props.item.map(el =>
    
    <li ><a href="#">{el.img}</a></li>

     )}
    
    </ul>
    </div>
    )
        
    }


export default company;