import React, { Component } from 'react';
import axios from 'axios';
import NewUserForm from './NewUserForm';

class UsersContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: []
    }
    this.addNewUser = this.addNewUser.bind(this)
  }

  componentDidMount() {
    axios.get('api/v1/users.json')
    .then(response => {
      console.log(response)
      this.setState({
        users: response.data
      })
    })
    .catch(error => console.log(error))
  }

  addNewUser(email) {
      axios.post( '/api/v1/users', { user: {email} })
      .then(response => {
          console.log(response)
          const users = [ ...this.state.users, response.data ]
          this.setState({users})
      })
      .catch(error => {
          console.log(error)
      })
  }

  render() {
    return (
      <div className="Users-container">
        <NewUserForm onNewUser={this.addNewUser} />
        {this.state.users.map( user => {
          return (
            <div className="single-user" key={user.id}>
              <h4>{user.email}</h4>
            </div>
          )
        })}

      </div>
    )
  }
}

export default UsersContainer;