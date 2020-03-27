import React from 'react';
import Card from './card';


const CardList = ({robots}) => {
    return(
        <div>
        {
          robots.map(robot =>   <Card
             id={robot.id}
             name={robot.name} 
             email={robot.email}     
             username ={robot.username}
               />
          )
        }
        
      </div>
    )
}

export default CardList ;