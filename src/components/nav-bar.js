import React from 'react'

function navbar(props){
    return(

        <div className="nav-menu">
            
            <img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="img" className="logo"/>
            
        <ul className="list">
    {props.item.map(el =>
    
    <li className="dropdown">{el.title}
    
    <div className="dropmenu"> {!el.drop?null : el.drop.map(e =>
    <div className="dropdown-content">{e}</div> )} </div></li>

     )}
    
    </ul>
    </div>
    )
        
    }


export default navbar;