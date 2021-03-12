import React, {Component } from 'react';

class ManillaFighters extends Component{
    render(){
        const {manillaFighters} = this.props; // destructuring
        const manillaFighterList = manillaFighters.map(manillaFighter => {
            return (
                <div className="manillaFighter" key={manillaFighter.id}>
                    <div>Name: {manillaFighter.name}</div>
                    <div>Age: {manillaFighter.age}</div>
                    <div>Belt: {manillaFighter.belt}</div>
                </div>
            )
        })
        return(
            <div className="manillaFighter-List">
                {manillaFighterList}
            </div>
        )
    }
}

export default ManillaFighters