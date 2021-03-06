import React from 'react';
import {connect} from 'react-redux'
import CardList  from '../component/CardList'
import SearchBox from '../component/searchLaptop'
import Scroll from '../component/Scroll'
import {laptops} from '../component/constants'

import {searchLaptops } from '../action'

// import './App.css';
import 'tachyons';

const mapStateToProps = state => {
  return {
    searchField : state.searchLaptops.searchField ,
    id : state.onItemClick.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange : (event) => dispatch( searchLaptops(event.target.value))
  }
}


 class LaptopDisplayComp extends React.Component {

  render() {
    const {searchField , onSearchChange } = this.props  
    const filteredRobots = laptops.filter(robot => {
      return robot.title.toLowerCase().includes( searchField.toLowerCase());
    })

    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
       <CardList Items = {filteredRobots}   />

       </Scroll>
      </div>
    );
  }
 
}

export default  connect(mapStateToProps , mapDispatchToProps)(LaptopDisplayComp);
