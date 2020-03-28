import React from 'react';
import Card from './card';
import {connect} from 'react-redux';
import {onItemClick} from '../action'

const mapDispatchToProps = dispatch => ({
    onCardClick : event => dispatch(onItemClick(event.currentTarget.id))
})




const CardList = ({Items  , onCardClick} ) => {
    return(
        <div>
        {
          Items.map(item =>   <Card
            title={item.title}
            imgsrc={item.productImages}
             price={item.price} 
             exchangeOffer={item.exchangeOffer}     
             id ={item.id}
             onCardClick={onCardClick}
               />
          )
        }
        
      </div>
    )
}

export default connect(null , mapDispatchToProps)(CardList)