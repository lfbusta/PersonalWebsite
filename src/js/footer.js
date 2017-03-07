import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component{
    render(){
        return(
            <div className="containerFooter">
                <a href="mailto:contact@lfbusta.com" id="footer">contact@lfbusta.com</a>
                <div className="contactIcons">
                    <a href="https://www.linkedin.com/in/luis-busta-42b621121/" target="_blank"><img src="resources/logo_linkedin2.svg" alt="Linkedin Logo"/></a>
                    <a href="https://github.com/lfbusta" target="_blank"><img src="resources/logo_github2.svg" alt="Github Logo"/></a>
                    <a href="https://www.instagram.com/lfbusta" target="_blank"><img src="resources/logo_instagram2.svg" alt="Instagram Logo"/></a>
                    <a href="https://twitter.com/lfbusta" target="_blank"><img src="resources/logo_twitter2.svg" alt="Twitter Logo"/></a>
                </div>
            </div>
        );
    }
}

ReactDOM.render( <Footer/>, document.getElementById('react_footer') );
