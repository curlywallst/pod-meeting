import React, { Component } from 'react'
import Bottle from './Bottle'
import Form from './Form'

class Cellar extends Component {
    constructor(props){
        super(props)
        this.state = {
            bottles: [{id: 1, winery: "Two Guys", grape: "Pinot", price: 12},
             {id: 2, winery: "Gals with Grapes", grape: "Sauvignon Blanc", price: 15}]
        }
    }

    addBottle = (data) => {
        let bottle = data
        bottle.id = this.state.bottles.length + 1
        console.log(bottle)
        this.setState((prevState) => ({
            bottles: [...prevState.bottles, bottle]
        }))
    }

    render() {
        const bottleList = this.state.bottles.map((bottle) => {
            return <Bottle winery={bottle.winery} grape={bottle.grape} price={bottle.price} />
        })

        return (
            <>
                <h2>This is my wine cellar!</h2>
                {bottleList}
                <hr/>
                <Form handleOnSubmit={this.addBottle} />
            </>
        )
    }
}

export default Cellar