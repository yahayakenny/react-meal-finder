import React, { Component } from 'react'
import "./App.css"

class MealItem extends Component {
    render() {
        return (
            <div style = {{display: "flex-block"}} className = "meal-item">
               <div className="ui link cards">
                <div className="card" style={{marginTop:"50px" , marginLeft:"70px", width: "70%"}}>
                   <div className="image">
                     <img src={this.props.user.strMealThumb} alt ="" />
                   </div>
                <div className="content" style={{textAlign:"center"}}>
                  <div class="header">{this.props.user.strMeal}</div>
                  <a href = {this.props.user.strSource}>Get more info</a>
                </div>
               <div className="extra content" style={{textAlign:"center"}}>
                  <a href ={this.props.user.strYoutube}>Youtube<br></br>
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
            </div>
          </div>
        </div>      
        
        )
      }
}

export default MealItem
