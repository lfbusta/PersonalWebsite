import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component{
    render(){
        return(
            <a href={this.props.link} className={this.props.cssClasses} id={this.props.id}><img src={this.props.image} alt=""/></a>
        );
    }
}
export class Menu extends React.Component{
    render(){
        return(
            <nav className="containerMenu">
                <Button link="public" cssClasses="buttonMenu buttonMenu_main animation__show_buttonMenu_projects" id="buttonMenu_projects" image="../resources/buttonProjects.svg"/>
                <Button link="about" cssClasses="buttonMenu buttonMenu_main animation__show_buttonMenu_about" id="buttonMenu_about" image="../resources/buttonAbout.svg"/>
                <Button link="connect" cssClasses="buttonMenu buttonMenu_main animation__show_buttonMenu_connect" id="buttonMenu_connect" image="../resources/buttonConnect.svg"/>
                <img className="buttonMenu buttonMenu_main animation__hide_buttonMenu_stack" id="buttonMenu_stack" src="../resources/buttonStack.svg" alt=""/>
            </nav>
        );
    }
}
