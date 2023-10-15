import React from "react";

class TeamComponent extends React.Component{
    // we use constuctor to receive props
    constructor(props){
        // we use super method to call the constructor of the base/parent class to initialize the class with values passed
        super(props);
    }
    // we use a render method which will return a jsx
    render(){
        const {name , location , contact} = this.props;
        return(
            <div className="team-card">
                <h3 className="team-name">{name}</h3>
                <h4 className="team-location">{location}</h4>
                <h4 className="team-contact">{contact}</h4>
            </div>
        )
    };

};

export default TeamComponent;