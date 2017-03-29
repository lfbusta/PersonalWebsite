import React from "react";
import ReactDOM from "react-dom";

import {Menu} from "./Menu.jsx";
import {Content} from "./Content.jsx";
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
                <Content content={this.state.content} onButtonClick={this.hasClass}/>
                <Footer/>
            </div>
        );
    }
    componentDidMount(){
        const body = document.getElementsByTagName("body")[0];
        this.replaceClass(body.classList,"removed","animation__fadePage");
    }
}
