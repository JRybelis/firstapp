import React from 'react';


//stateless UI components:
const ManillaFighters = ({manillaFighters, deleteFighter}) => {
    const manillaFighterList = manillaFighters.map(manillaFighter => {
        return manillaFighter.age < 40 ? (
            <div className="manillaFighter" key={manillaFighter.id}>
                <div>Name: {manillaFighter.name}</div>
                <div>Age: {manillaFighter.age}</div>
                <div>Belt: {manillaFighter.belt}</div>
                <button onClick={() => {deleteFighter(manillaFighter.id)}}>Remove the fighter</button> {/*added an anonymous function to prevent deleteFighter from firing automatically.*/}
            </div>
        ) : null;
    });
    return(
        <div className="manillaFighter-List">
            {manillaFighterList}
        </div>
    )
}

export default ManillaFighters