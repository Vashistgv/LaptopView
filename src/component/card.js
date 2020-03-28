import React from 'react';


 const Card = ({id , imgsrc , title ,price, exchangeOffer,onCardClick} ) => {
    return (
        <div className = 'bg-light-green dim dib br3 pa3 ma2 grow bw2  shadow-5 mw5 h-50 '
        id={id}
         onClick={onCardClick } 
         
         >
        <p>{id}</p>
            <img src={imgsrc} alt={id}
            width= "200px" height = "150px"
            className = "db mb2 mw-100" 
            />
            <div>
                <h2 className = "mw8 truncate">{title}</h2>
                <p>{price}</p>
                <p>{exchangeOffer}</p>
            </div>
        </div>
    )
}

export default Card