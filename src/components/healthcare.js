import React from 'react'

function healthcare(props){
    return(
<div>
     <div>
         <img src="https://www.docplanner.com/img/sygnet.png" className="lead__logo"/>
         <h1 className="title-healthcare">Making the healthcare experience more human</h1>
     </div>
        <div  className="healthcare-description">
    {props.item.map(el =>


    
    <p>{el.description}</p> )}
    
    </div>
    </div>
    )
        
    }


export default healthcare;