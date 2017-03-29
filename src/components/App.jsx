import React from "react";
import ReactDOM from "react-dom";

import {Menu} from "./Menu.jsx";
import {Projects} from "./Content.jsx";
import {Footer} from "./Footer.jsx";

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.changeContent = this.changeContent.bind(this);
        this.state={
            content: "projects"
        };
    }

    hasClass(element, cls) {
        return (" " + element.className + " ").indexOf(" " + cls + " ") > -1;
    }
    replaceClass(classList,className1,className2){
        // This function will replace className1 with className2
        classList.add(className2);
        classList.remove(className1);
    }

    renderContent(e){
        if(this.state.content === "projects"){ return(<Projects onButtonClick={this.hasClass}/>); }
        else if(this.state.content === "about"){ console.log("About"); }
        else if(this.state.content === "connect"){ console.log("Connect"); }
        else{
            console.log("Nothing to see here. Move along.");
            return(this.state.content);
        }
    }
    changeContent(targetId){
        const newContent = targetId.slice(11);
        if(newContent !== "stack"){
            this.setState({content: newContent});
        }
    }

    render(){
        return(
            <div className="containerAll">
                <Menu content={this.state.content} onButtonClick={this.changeContent}/>
                {this.renderContent()}
                <Footer/>
            </div>
        );
    }
}
