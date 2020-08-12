import React, { Component } from 'react';
import './App.css';

class MealItem extends Component {
  render() {
    return (
      <div><br/><br/>
        <div class='container'>
          <div class='row'>
            <div class='col-md-6 col-sm-12'>
              <div class='card'>
                <img
                  src={this.props.user.strMealThumb}
                  class='card-img-top'
                  alt='...'
                />
                <div class='card-body text-center'>
                  <h2 class='card-title'>{this.props.user.strMeal}</h2>
                  <a href={this.props.user.strYoutube}>
                    Youtube
                    <br />
                    <br />
                    <i class='fab fa-youtube' style = {{color: "red", fontSize: "28px"}}></i>
                  </a>
                </div>
              </div>
              <br />
              <br />
            </div>
            <div class='col-md-6 col-sm-12'>
               <h2>INSTRUCTIONS</h2>
               <h3>{this.props.user.strInstructions}</h3>  
                
               <div class = "row">
                 <div class = "col-6">
                 <h6> - {this.props.user.strIngredient1}</h6>
                 <h6> - {this.props.user.strIngredient2}</h6>
                 <h6> - {this.props.user.strIngredient3}</h6>
                 <h6> - {this.props.user.strIngredient4}</h6>
                 <h6> - {this.props.user.strIngredient5}</h6>
                 </div>
                 <div class = "col-6">
                 <h6> - {this.props.user.strMeasure1}</h6>
                 <h6> - {this.props.user.strMeasure2}</h6>
                 <h6> - {this.props.user.strMeasure3}</h6>
                 <h6> - {this.props.user.strMeasure4}</h6>
                 <h6> - {this.props.user.strMeasure5}</h6>
                 </div>
               </div>
              
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MealItem;
