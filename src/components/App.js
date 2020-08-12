import React from "react";
import SearchBar from "./SearchBar"
import axios from 'axios';
import Meal from "./Meal"
import "./App.css"

class App extends React.Component {
    state = {
        food: []
    }
   
   searchFood = async (text) => {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
      this.setState({food: response.data.meals})     
   }

    render(){
        return (
          <div >
             <SearchBar searchFood = {this.searchFood}/>
             <div class = "ui container">
                <div><Meal meals={this.state.food}/></div>
             </div>
           </div>
        )
    }
}

export default App;