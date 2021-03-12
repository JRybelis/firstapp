import React, {Component} from 'react'

class AddFighter extends Component {
    state = {
        name: null,
        age: null,
        belt: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value //square bracket notation
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addFighter(this.state);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    <label htmlFor="name">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange}/>
                    <label htmlFor="name">Belt colour:</label>
                    <input type="text" id="belt" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddFighter