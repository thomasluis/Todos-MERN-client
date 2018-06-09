import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Paper from '@material-ui/core/Paper';

const TodosQuery = gql`
{
  todos {
    id 
    text
    complete
  }
}
`

class App extends Component {
  render() {
    const { data: {loading, todos} } = this.props;
    console.log("data", todos, "loading", loading);
    if(loading) {
      return null;
    }
    
    return (
      <div style={{ display: 'flex'}}>
        <div style={{margin: "auto", width: 400}}>
          <Paper elevation={1}>
            {todos.map(todo => (<p key={todo.id}>{todo.text}</p>))}
          </Paper>
        </div>
      </div>
      
    )
  }
}

export default graphql(TodosQuery)(App);
