import React, { Component } from 'react'

class SearchBar extends Component {
    state = {text: ''}//Create a new state
<<<<<<< HEAD

    handleChange = (e) => {//call this function when the onChange event listener is triggered.
=======
    handleChange = (e) => {//call this function when the the onChange event listener is triggered.
>>>>>>> 23179fb5c1ac37946277084387ce5f43584189bb
        this.setState({text: e.target.value})//Update the state with the user's input
    }
    handleSubmit = (e) => {
        e.preventDefault()//prevent default submission of the form
<<<<<<< HEAD
        this.props.searchFood(this.state.text)//Use the searchFood props defined in App.js and invoke it with the user's input stored in 'this.state.text'. So basically, we are making an Http Request once we type in a search value.
=======
        this.props.searchFood(this.state.text)//Use the searchFood props defined in App.js and invoke it with the user's input stored in 'this.state.text'
>>>>>>> 23179fb5c1ac37946277084387ce5f43584189bb
    }

    render() {
        return (
    <div>
        {/*Add an onSubmit event listener to call handleSubmit */}
       <form form onSubmit = {this.handleSubmit}>
          <div className="ui inverted segment" style={{textAlign: "center"}}>
            <div className="ui inverted input" >
              <h2 style={{color: "white", marginRight: "20px" ,marginTop: "10px"}}>Meal finder</h2><br></br>
              {/* Add an onChange event listener to call handleSubmit, and update its value to this.state.text */}
              <input type="text" placeholder="Search..." style ={{textAlign: "center"}} onChange = {this.handleChange} value = {this.state.text}/>
            </div>
          </div>
       </form>                
    </div>             
        )
    }
}

export default SearchBar
