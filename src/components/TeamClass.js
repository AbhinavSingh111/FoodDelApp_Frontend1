import React from "react";
import RandomClass from "./RandomClass";
import { json } from "react-router-dom";

class TeamComponent extends React.Component{
    // we use constuctor to receive props
    constructor(props){
        // we use super method to call the constructor of the base/parent class to initialize the class with values passed
        super(props);

        // defining state vars. They are defined as an obj , sate is a reserved keyword here
        this.state = {
            userInfo : {
                name:"",
                location:"",
                html_url:"",
                avatar_url:"",
            }
        }
        
    }
// we can make this func async to make an api call
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/AbhinavSingh111  ");
        const json = await data.json();
        this.setState({
            userInfo : json,
        });
        console.log("componentDidMount");
    };

    componentDidUpdate(){
        // called when the component is updated
        console.log("componentDidUpdate");
    };

    componentWillUnmount(){
        // called when the component is unmounted
        // it is called when we change the component ie we move to other component
        console.log("componentWillUnmount");
    };



    // we use a render method which will return a jsx
    render(){
        

        // const {name , location , contact} = this.props;

        // destructuring state vars , we can use them directly also
        // const { count1 , count2} = this.state;
        const {name , location , html_url , avatar_url} = this.state.userInfo;
        return(
            <div className="team-card">
                {/* <h2>{count1}</h2> */}
                {/* <button onClick={()=>{
                    this.setState({
                        count1:this.state.count1+1,
                        count2:this.state.count2*2,
                    });
                }}>Increase count</button> */}
                <div className="res-img" id="restaraunt-image">
                    <img src={avatar_url} />
                </div>
                <h3 className="team-name">{name}</h3>
                <h4 className="team-location">{location}</h4>
                <h4 className="team-contact">{html_url}</h4>
                {/* <RandomClass name={"nested class"}/> */}
            </div>
            
        )
    };

};

export default TeamComponent;