import React, { Component } from 'react'

class SearchBar extends Component {
    state = {text: ''}

    handleChange = (e) => {
        this.setState({text: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.searchFood(this.state.text)
        this.props.searchFood(this.state.text)
    }

    render() {
        return (
    <div>
       <form form onSubmit = {this.handleSubmit}>
          <div className="ui inverted segment" style={{textAlign: "center"}}>
            <div className="ui inverted input" >
              <h2 style={{color: "white", marginRight: "20px" ,marginTop: "10px"}}>Meal finder</h2>
              <input type="text" placeholder="Search your favorite meals..." onChange = {this.handleChange} style = {{width: "200px"}}value = {this.state.text}/>
            </div>
          </div>
       </form>                
    </div>             
        )
    }
}

export default SearchBar
