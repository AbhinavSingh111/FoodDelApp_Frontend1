import React from "react";
import RandomClass from "./RandomClass";

class TeamComponent extends React.Component{
    // we use constuctor to receive props
    constructor(props){
        // we use super method to call the constructor of the base/parent class to initialize the class with values passed
        super(props);

        // defining state vars. They are defined as an obj , sate is a reserved keyword here
        this.state = {
            count1 : 1,
            count2: 1,
        }
        console.log(this.props.name + " constructor")
    }

    componentDidMount(){
        console.log(this.props.name+" component did mount")
    };



    // we use a render method which will return a jsx
    render(){
        console.log(this.props.name + " render")

        const {name , location , contact} = this.props;

        // destructuring state vars , we can use them directly also
        const { count1 , count2} = this.state;
        return(
            <div className="team-card">
                <h2>{count1}</h2>
                <button onClick={()=>{
                    this.setState({
                        count1:this.state.count1+1,
                        count2:this.state.count2*2,
                    });
                }}>Increase count</button>
                <h2>{this.state.count2}</h2>
                <h3 className="team-name">{name}</h3>
                <h4 className="team-location">{location}</h4>
                <h4 className="team-contact">{contact}</h4>
                <RandomClass name={"nested class"}/>
            </div>
            
        )
    };

};

export default TeamComponent;