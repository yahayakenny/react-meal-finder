import React from "react";
import SearchBar from "./SearchBar"
import axios from 'axios';
import Meal from "./Meal"
import "./App.css"

class App extends React.Component {
    state = {//create a new state and initialise it to an empty array
        food: []
    }

   searchFood = async (text) => {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
      this.setState({food: response.data.meals})// Update the state with the response of the list of meals  obtained from the API call
   }

    render(){
        return (
          <div>
             <SearchBar searchFood = {this.searchFood}/>{/*create a new props called searchFood and assign it to the callback method 'searchFood' that makes an Http request */}
             <div class = "ui container">
                  <div>
                      <Meal meals={this.state.food}/>
                  </div>{/* create another props called meals and assign it the value stored in the state in order to pass it down to a  'Meal' child component*/}
             </div>  
           </div>
        )
    }
}

export default App;