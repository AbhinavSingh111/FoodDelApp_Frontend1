import React from "react";
import RandomClass from "./RandomClass";
import { json } from "react-router-dom";
import userContext from "../../utils/userContext";

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
            <div className="bg-pink-100 rounded-lg p-5 m-5 w-80">
                {/* <h2>{count1}</h2> */}
                {/* <button onClick={()=>{
                    this.setState({
                        count1:this.state.count1+1,
                        count2:this.state.count2*2,
                    });
                }}>Increase count</button> */}
                <div className="res-img" id="restaraunt-image">
                    <img className="rounded-lg h-[330.900px]" src={avatar_url} />
                </div>
                <h3 className="font-semibold text-md m-0">{name}</h3>
                <h4 className="font-light m-0">{location}</h4>
                <h4 className="font-light m-0">{html_url}</h4>
                <userContext.Consumer>
                    {({loggedUser})=>
                        <h4 className="font-light m-0">User: {loggedUser}</h4>
                    }
                </userContext.Consumer>
                {/* <RandomClass name={"nested class"}/> */}
            </div>
            
        )
    };

};

export default TeamComponent;