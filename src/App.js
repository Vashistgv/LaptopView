import React from 'react';
import {Route} from 'react-router-dom';
import LaptopDetails from './LaptopDispaly/LaptopDetails'
import LaptopDisplayComp from './LaptopDispaly/LaptopDispalyComp';

class App extends React.Component {
  render(){
    return (
      <div>
        <Route path='/' exact component={LaptopDisplayComp} />
        <Route path='/LaptopDetails' component={LaptopDetails} />

        </div>
    )
  }
}


export default App