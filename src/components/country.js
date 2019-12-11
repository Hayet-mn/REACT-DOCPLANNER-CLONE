import React from 'react'

function country(props){
    return(
        <div>
            <div className="team-description">
                <h2>Improve the lives of millions. Change yours forever</h2>
                <p>More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.</p>
            </div>
        <div className="team-country">
    {props.item.map(el =>
    <div className="team-item">
        
       <img src={el.src} alt="img" className="image-click"/> 
    <div>
    <a href="#">{el.nameC}</a>
<button className="btn-link">See openings</button>
        </div>
    </div>
   

     )}
    
    </div>
    </div>
    )
        
    }


export default country;