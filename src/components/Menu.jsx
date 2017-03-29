import React from "react";
import ReactDOM from "react-dom";

class Button extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <img className={this.props.cssClasses} id={this.props.id} src={this.props.image} alt="" onMouseEnter={this.props.handleMouseEnter}/>
        );
    }
}
export class Menu extends React.Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);

        this.state={
            visible: false
        }

    }
    replaceClass(classList,className1,className2){
        // This function will replace className1 with className2
        classList.add(className2);
        classList.remove(className1);
    }
    hideMenu(){
        const containerMenu = document.getElementsByClassName("containerMenu")[0];
        const buttonMenu = document.getElementsByClassName("buttonMenu");
        this.replaceClass(containerMenu.classList,"containerMenu_shown","containerMenu_hidden");
        for(let i=0; i < buttonMenu.length; i++){
            switch(buttonMenu[i].id){
                case "buttonMenu_stack": this.replaceClass(buttonMenu[i].classList,"animation__hide_buttonMenu_stack","animation__show_buttonMenu_stack"); break;
                case "buttonMenu_projects": this.replaceClass(buttonMenu[i].classList,"animation__show_buttonMenu_projects","animation__hide_buttonMenu_projects"); break;
                case "buttonMenu_blog": this.replaceClass(buttonMenu[i].classList,"animation__show_buttonMenu_blog","animation__hide_buttonMenu_blog"); break;
                case "buttonMenu_about": this.replaceClass(buttonMenu[i].classList,"animation__show_buttonMenu_about","animation__hide_buttonMenu_about"); break;
                case "buttonMenu_connect": this.replaceClass(buttonMenu[i].classList,"animation__show_buttonMenu_connect","animation__hide_buttonMenu_connect"); break;
            }
        }
        this.setState({visible: false})
    }
    showMenu(){
        const containerMenu = document.getElementsByClassName("containerMenu")[0];
        const buttonMenu = document.getElementsByClassName("buttonMenu");
        this.replaceClass(containerMenu.classList,"containerMenu_hidden","containerMenu_shown");
        for(let i=0; i < buttonMenu.length; i++){
            switch(buttonMenu[i].id){
                case "buttonMenu_stack": this.replaceClass(buttonMenu[i].classList,"animation__show_buttonMenu_stack","animation__hide_buttonMenu_stack"); break;
                case "buttonMenu_projects": this.replaceClass(buttonMenu[i].classList,"animation__hide_buttonMenu_projects","animation__show_buttonMenu_projects"); break;
                case "buttonMenu_blog": this.replaceClass(buttonMenu[i].classList,"animation__hide_buttonMenu_blog","animation__show_buttonMenu_blog"); break;
                case "buttonMenu_about": this.replaceClass(buttonMenu[i].classList,"animation__hide_buttonMenu_about","animation__show_buttonMenu_about"); break;
                case "buttonMenu_connect": this.replaceClass(buttonMenu[i].classList,"animation__hide_buttonMenu_connect","animation__show_buttonMenu_connect"); break;
            }
        }
        this.setState({visible: true})
    }
    overrideToggleMenu(){
        if(this.state.visible){
            this.hideMenu();
        }
        else{
            this.showMenu();
        }
    }

    handleClick(e){
        const isPortrait = window.matchMedia( "(max-aspect-ratio: 1/1)" ).matches;
        this.props.onButtonClick(e.target.id);
        if(isPortrait){
            this.overrideToggleMenu();
        }
    }
    handleMouseEnter(e){
        const isPortrait = window.matchMedia( "(max-aspect-ratio: 1/1)" ).matches;
        if(!isPortrait){
            this.overrideToggleMenu();
        }
    }
    handleMouseLeave(e){
        const isPortrait = window.matchMedia( "(max-aspect-ratio: 1/1)" ).matches;
        if(!isPortrait){
            const containerMenu = document.getElementsByClassName("containerMenu")[0];
            const buttonMenu = document.getElementsByClassName("buttonMenu");
            function replaceClass(classList,className1,className2){
                // This function will replace className1 with className2
                classList.add(className2);
                classList.remove(className1);
            }
            function hideMenu(){
                replaceClass(containerMenu.classList,"containerMenu_shown","containerMenu_hidden");
                for(let i=0; i < buttonMenu.length; i++){
                    switch(buttonMenu[i].id){
                        case "buttonMenu_stack": replaceClass(buttonMenu[i].classList,"animation__hide_buttonMenu_stack","animation__show_buttonMenu_stack"); break;
                        case "buttonMenu_projects": replaceClass(buttonMenu[i].classList,"animation__show_buttonMenu_projects","animation__hide_buttonMenu_projects"); break;
                        case "buttonMenu_blog": replaceClass(buttonMenu[i].classList,"animation__show_buttonMenu_blog","animation__hide_buttonMenu_blog"); break;
                        case "buttonMenu_about": replaceClass(buttonMenu[i].classList,"animation__show_buttonMenu_about","animation__hide_buttonMenu_about"); break;
                        case "buttonMenu_connect": replaceClass(buttonMenu[i].classList,"animation__show_buttonMenu_connect","animation__hide_buttonMenu_connect"); break;
                    }
                }
            }
            this.setState({visible: false});
            hideMenu();
        }

    }

    render(){
        return(
            <nav className="containerMenu" onClick={this.handleClick} onMouseLeave={this.handleMouseLeave}>
                <Button cssClasses="buttonMenu buttonMenu_main animation__show_buttonMenu_projects" id="buttonMenu_projects" image="../resources/buttonProjects.svg" linkedContent="projects"/>
                <Button cssClasses="buttonMenu buttonMenu_main animation__show_buttonMenu_about" id="buttonMenu_about" image="../resources/buttonAbout.svg" linkedContent="about"/>
                <Button cssClasses="buttonMenu buttonMenu_main animation__show_buttonMenu_connect" id="buttonMenu_connect" image="../resources/buttonConnect.svg" linkedContent="connect"/>
                <Button cssClasses="buttonMenu buttonMenu_main animation__hide_buttonMenu_stack" id="buttonMenu_stack" image="../resources/buttonStack.svg" handleMouseEnter={this.handleMouseEnter}/>
            </nav>
        );
    }
}
