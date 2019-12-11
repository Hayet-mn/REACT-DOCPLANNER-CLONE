import React from 'react'

function footer(props){
    return(
        <div className="Footer">
    {props.item.map(el =>
    
    <p>{el.desc}
    
    <span > {!el.country?null : el.country.map(e =>
    <a  href="#">{e.name},</a> )} </span>.</p>

     )}
    
    </div>
    )
        
    }


export default footer;