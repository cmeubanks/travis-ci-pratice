import React, { Component } from 'react';
import Ideas from './Ideas';
import Form from './Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    }
  }

  addIdea = (newIdea) => {
    this.setState({ ideas: [...this.state.ideas, newIdea] })
  }

  render() {
    return (
      <main className='App'>
        <h1>IdeaBox</h1>
        {!this.state.ideas.length && <h2>No ideas yet -- add some!</h2> }
        <Form addIdea={this.addIdea}/>
        <Ideas ideas={this.state.ideas} />
      </main>
    )
  }
}

export default App;
