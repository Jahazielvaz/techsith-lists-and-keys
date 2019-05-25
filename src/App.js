import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/User';

class App extends Component {
  state = {
    users : [
      {id: "23", name: "Jazzy", age: 33},
      {id: "76", name: "Jason", age: 26},
      {id: "87", name: "Leslie", age: 24}
    ]
  }

  deleteUser = (index, event) => {
    const users = Object.assign([], this.state.users);
    users.splice(index, 1);
    this.setState({users: users})
  }

  render(){
    return (
      <div className="App">
        <ul>
          {
            this.state.users.map((user, index) => {
                return(<User key={user.id} age={user.age} delEvent={this.deleteUser.bind(this, index)}>{user.name}</User>)
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
