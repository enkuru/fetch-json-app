import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    isLoading: true
  };

  componentDidMount() {
    setTimeout(() => {
      /*fetch('https://jsonplaceholder.typicode.com/users').then(data => data.json()).then(users => {
        this.setState({users, isLoading: false});
      })*/
      axios.get('https://jsonplaceholder.typicode.com/users').then(response => response.data).then(users => {
        this.setState({users, isLoading: false});
      })
    }, 2000);
  }


  render() {
    const {isLoading} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>Users</h1>
        {isLoading ? 'Loading...' : ''}
        {
          !isLoading ? this.state.users.map(user =>
            <div key={user.id} className={"userList"}>{user.name} - @{user.username}</div>
          ) : null
        }
      </div>
    );
  }
}

export default App;
