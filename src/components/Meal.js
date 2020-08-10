import React, { Component } from 'react'
import MealItem from "./MealItem"
import "./App.css"

 class Meal extends Component {
    render() {
        return (
            <div className="container">
                {/* Next we map through the data passed as props from the App component and for each iteration, we return a mealItem component. Note that we use the bracket () when we want to return the mealItem component.
                Afterwards. we create a new prop called user, in order to pass the data to the MealItem component */}
                <div style={userStyle}>
                    {this.props.meals.map(meal => (
                   <MealItem user ={meal}/>
                ))}
                </div>   
            </div>
            
        )
    }
}

const userStyle = {
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'center' ,
   alignItems: 'center',
   flexWrap: 'wrap',
   marginTop: "70px",

}

export default Meal
