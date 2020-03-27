import React from 'react';
import {Card} from './component/card'
import './App.css';
import 'tachyons';
import {robots} from './component/constants'


 class App extends React.Component {

  render() {
    return (
      <div>
        {
          robots.map(robot =>   <Card id={robot.id}
             name={robot.name} 
             email={robot.email}     
             username ={robot.username}
               />
          )
        }
        
      </div>
    );
  }
 
}

export default App;
