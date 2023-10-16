import TeamComponent from "./TeamClass";

const About = ()=>{
    return (
        <div className="about">
            <h1>This is about us component.</h1>
            <TeamComponent name={"Abhinav"} location={"Lucknow"} contact={"https://abhinavsingh111.github.io/portfolio/"}/>
            <TeamComponent name={"Shereya"} location={"Pune"} contact={"https://abhinavsingh111.github.io/portfolio/"}/>
        </div>
    )
};

export default About;