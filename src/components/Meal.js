import React, { Component } from 'react';
import MealItem from './MealItem';
import './App.css';

class Meal extends Component {
  render() {
    return (
      <div className='container' style={{}}>
        <div>
          {this.props.meals.map((meal) => (
            <MealItem user={meal} />
          ))}
        </div>
      </div>
    );
  }
}

export default Meal;
