import logo from './logo.svg';
import './App.css';
import React from 'react'
import Character from './components/Character'


class App extends React.Component {
  constructor (){
    super()
    this.state ={
      characters:[],
      favorites:[]
    }
  }
  componentDidMount(){
    fetch("https://thronesapi.com/api/v2/Characters")
      .then(response=>response.json())
      .then(result=>{
        this.setState({ characters: result })
      })
 
  }

   
  handleFavoriteClick = (newObject) => {
    const newArray = this.state.favorites
    this.setState({favorite : [newArray,...newObject]})
  }
	render() {
    
    
    console.log(this.state)
    console.log(this.state.favorites)
    // console.log(character)
		return(
      <div className="container">
        <div className="Row">
            <h1>Game of thrones</h1>
            <div className="col">
              {this.state.characters.map(character => (
                <Character  
                 title={character.title}
                 name={character.fullName}
                  image={character.imageUrl}
                  character={character}
                  favoriteClick={this.handleFavoriteClick}/> //passer le .fullName de l'élement courant//
              ))}
            </div>
        </div>
      </div>
		)
	}
}

export default App