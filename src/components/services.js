import React from 'react'

function services(props){
    return(
        <div className="service">
    {props.item.map(el =>
<div className={el.style}>
<span>{el.title}</span>
    <p>{el.desc}</p>
    <select className={el.btnSelect}> 
    {!el.select?null : el.select.map(e =>
    <option>{e}</option>  )} </select>
    <img src={el.src} className={el.styleImg} />

</div>

    
     )}
    
    </div>
    )
        
    }


export default services;