// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org" 
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import React, {Component} from "react";
import Form from "./Form"; 
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
           <Form handleSubmit={this.handleSubmit}/>
         </div>
      </div>
    )
  }
}

export default App;
