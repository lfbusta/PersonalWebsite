import React from "react";
import ReactDOM from "react-dom";

import {Menu} from "./Menu.jsx";
import {Projects} from "./Content.jsx";
import {Footer} from "./Footer.jsx";

export default class App extends React.Component{
    render(){
        return(
            <div className="containerAll">
                <Menu/>
                <Projects/>
                <Footer/>
            </div>
        );
    }
}
