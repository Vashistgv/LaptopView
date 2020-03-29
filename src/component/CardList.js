import React from 'react';
import Card from './card';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom' ;
import {onItemClick} from '../action'

const mapDispatchToProps = dispatch => ({
    onICardClick : event => dispatch(onItemClick(event.currentTarget.id))
})


class CardList extends React.Component {

onCardClick = (e) => {
  this.props.history.push('/LaptopDetails')

   this.props.onICardClick(e)
}
  render(){
    const {Items  } = this.props
    return(
      <div>
      {
        Items.map(item =>   <Card
          title={item.title}
          imgsrc={item.productImages}
           price={item.price} 
           exchangeOffer={item.exchangeOffer}     
           id ={item.id}
           onCardClick={this.onCardClick}
             />
        )
      }
      
    </div>
  )

  }
}



export default withRouter(connect(null , mapDispatchToProps)(CardList))