import React from 'react';


//stateless UI components:
const ManillaFighters = ({manillaFighters}) => {
    const manillaFighterList = manillaFighters.map(manillaFighter => {
        return manillaFighter.age < 40 ? (
            <div className="manillaFighter" key={manillaFighter.id}>
                <div>Name: {manillaFighter.name}</div>
                <div>Age: {manillaFighter.age}</div>
                <div>Belt: {manillaFighter.belt}</div>
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