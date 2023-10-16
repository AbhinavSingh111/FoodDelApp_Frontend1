import React from "react";

class RandomClass extends React.Component{
    constructor(props){
        super(props);

        console.log(this.props.name+" constructor");
    };

    componentDidMount(){
        console.log(this.props.name+" component did mount");
    }

    render(){
        console.log(this.props.name+" render");
        return(
        <h1>{this.props.name}</h1>
        )
    }
        
    
}

export default RandomClass;