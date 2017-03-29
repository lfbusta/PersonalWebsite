import React from "react";
import ReactDOM from "react-dom";

class Button extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <img className={this.props.cssClasses} id={this.props.id} src={this.props.image} alt=""/>
        );
    }
}
export class Menu extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        this.props.onButtonClick(e.target.id);
    }
    render(){
        return(
            <nav className="containerMenu" onClick={this.handleClick}>
                <Button cssClasses="buttonMenu buttonMenu_main animation__show_buttonMenu_projects" id="buttonMenu_projects" image="../resources/buttonProjects.svg" linkedContent="projects"/>
                <Button cssClasses="buttonMenu buttonMenu_main animation__show_buttonMenu_about" id="buttonMenu_about" image="../resources/buttonAbout.svg" linkedContent="about"/>
                <Button cssClasses="buttonMenu buttonMenu_main animation__show_buttonMenu_connect" id="buttonMenu_connect" image="../resources/buttonConnect.svg" linkedContent="connect"/>
                <Button cssClasses="buttonMenu buttonMenu_main animation__hide_buttonMenu_stack" id="buttonMenu_stack" image="../resources/buttonStack.svg"/>
            </nav>
        );
    }
}
