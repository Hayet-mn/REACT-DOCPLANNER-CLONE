import React from 'react'

function plateformItem(props){
    return(
        <div className="plateform">
        <div className="platform-content"> 
            <div className="platform-description">
                <span>The world's biggest healthcare platform</span>
                <p> We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
            </div>
        <div className="platformitem">
    {props.item.map(el =>
<div className="item">

    <img src={el.src} className="plateform-icon" />
    <h4>{el.title}</h4>
    <p>{el.desc}</p>

</div>

    
     )}
    </div>
    </div>
    </div>
    )
        
    }


export default plateformItem;