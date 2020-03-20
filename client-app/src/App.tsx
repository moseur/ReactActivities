import React, { Component } from 'react';
import { Header, Icon, List } from 'semantic-ui-react'
import './App.css';
import { render } from '@testing-library/react';
import axios from 'axios';
import { listenerCount } from 'cluster';

class App extends Component {

  state={
    values : []
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/values')
    .then((response)=>{
      this.setState({
        values: response.data
      })
    })
  }


  render(){
    return (
      <div className="App">
          <Header as='h2'>
            <Icon name='user' />
            <Header.Content>ReactActivities</Header.Content>
          </Header>
          <List>
            {this.state.values.map((value:any)=>(
                <List.Item key={value.id}>{value.name}</List.Item>
              ))}
          </List>
      </div>
    );
  }
  
}

export default App;
