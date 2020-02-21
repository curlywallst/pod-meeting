import React, { Component } from 'react'

class Form extends Component {
    state = {
        winery: "",
        grape: "",
        price: ""
    }


    handleChange = (e) => {
        e.preventDefault()
        console.log(e.target)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
        this.props.handleOnSubmit(this.state)
        this.setState({
            winery: "",
            grape: "",
            price: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <label>Winery</label>
                <input type="text" name="winery" value={this.state.winery} onChange={this.handleChange} /><br></br>
                <label>Grape</label>
                <input type="text" name="grape" value={this.state.grape} onChange={this.handleChange} /><br></br>
                <label>Price</label>
                <input type="text" name="price" value={this.state.price} onChange={this.handleChange} /><br></br>
                <input type="submit"/>
            </form>
        )
    }
}

export default Form
