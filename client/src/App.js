import React, {Component} from "react";
import ListPosts from "./ListPosts"
import InputPost from "./InputPost"

class App extends Component {
  state = {
    characters: [
      {
        name: 'Charlie', 
        job: 'Janitor',
      },
      {
        name: 'Mac', 
        job: 'Bouncer',
      },
      {
        name: 'Dee', 
        job: 'Aspiring Actress',
      },
      {
        name: 'Dennis', 
        job: 'Bartender',
      },
    ], 
  }

  removeCharacter =  (index) => {
    const {characters} = this.state; 

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      })
    })
  }

  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
}

  render() {
    const {characters} = this.state; 
    console.log({characters})
    return (
       <div className="App">
         <div className="vertical-center">
           <h1>Hello React! </h1>
         </div>
         <div className="container">
           <InputPost />
           <ListPosts />
           {/* <Table characterData={characters} removeCharacter={this.removeCharacter} /> */}
           {/* <Form handleSubmit={this.handleSubmit}/> */}
         </div>
      </div>
    )
  }
}

export default App;
