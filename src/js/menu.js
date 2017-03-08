import React from 'react';
import ReactDOM from 'react-dom';

class Menu extends React.Component{
    render(){
        return(
            <nav className="containerMenu">
                <a href="index.html" className="buttonMenu buttonMenu_main animation__show_buttonMenu_projects" id="buttonMenu_projects"><img src="resources/buttonProjects.svg" alt=""/></a>
                <a href="blog" className="faded buttonMenu buttonMenu_main animation__show_buttonMenu_blog" id="buttonMenu_blog"><img src="resources/buttonBlog.svg" alt=""/></a>
                <a href="about" className="faded buttonMenu buttonMenu_main animation__show_buttonMenu_about" id="buttonMenu_about"><img src="resources/buttonAbout.svg" alt=""/></a>
                <a href="connect" className="buttonMenu buttonMenu_main animation__show_buttonMenu_connect" id="buttonMenu_connect"><img src="resources/buttonConnect.svg" alt=""/></a>
                <img src="resources/buttonStack.svg" alt="" className="buttonMenu animation__hide_buttonMenu_stack" id="buttonMenu_stack"/>
            </nav>
        );
    }
}

ReactDOM.render( <Menu/>, document.getElementById("react_menu") );
