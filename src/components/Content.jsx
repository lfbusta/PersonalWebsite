import React from 'react';
import ReactDOM from 'react-dom';

import ScrollReveal from "scrollreveal";

const data = [
    {
        title: "Shardcraft",
        screenshot: "../resources/ss05.png",
        link: "https://shard.cl",
        aboutShort: "Shardcraft is a small Minecraft server that I’ve been hosting with a friend for almost 5 years now. This interactive page will include a login for admins and players to interact directly with in-game content.",
        aboutLong: "Shardcraft is a small private whitelisted vanilla Minecraft server that I’ve been hosting with a friend for almost 5 years now. It started as my personal single player world but has now grown large enough that it would benefit from its own webpage. This interactive page will include a login for admins and players to get information and interact directly with in-game content through javascript and python scripts.",
        technologies: [
            "HTML",
            "CSS",
            "JS",
            "NPM",
            "Gulp",
            "React",
            "Firebase"
        ]
    },
    {
        title: "This Website",
        screenshot: "../resources/ss04.png",
        link: "#",
        aboutShort: "As a webdev it is important to have a place to show your projects and allow people to contact you. This is it. The page you’re on right now.",
        aboutLong: "As a webdev it is important to have a place to show your projects and for people to contact you. This is it. The page you’re on right now. This site will act as a hub for all my projects and, in the near future, will include more information about me (possibly even a blog). The radial menu and all the assets for it were custom built on vanilla javascript.",
        technologies: [
            "HTML",
            "CSS",
            "JS",
            "React",
            "NPM",
            "Gulp",
            "Webpack",
            "Firebase"
        ]
    },
    {
        title: "Infestation Sim",
        screenshot: "../resources/ss03.png",
        link: "https://lfbusta.github.io/BerlinMiniGamejam-Feb2017/",
        aboutShort: "Infestation Sim is a game developed in conjunction with this webpage as part of the Berlin Mini Game Jam of February 2017. It was quickly put together from scratch in less than 8 hours.",
        aboutLong: "Infestation Sim is a short game developed in conjunction with this page as part of the Berlin Mini Game Jam of February 2017. It was put together from scratch in less than 8 hours and it served as my first experience with gulp as a way to automate the build and optimization process for the site.",
        technologies: [
            "HTML",
            "CSS",
            "JS",
            "NPM",
            "Gulp"
        ]
    },
    {
        title: "Astromundus Fight",
        screenshot: "../resources/ss02.png",
        link: "https://cmclaudet.github.io/AstromundusFight/",
        aboutShort: "This webpage was developed to showcase a small game called Astromundus Fight. It was my first multi-column responsive website as well as my introduction to flexbox. It also uses more advanced javascript than Cloud10.",
        aboutLong: "Astromundus Fight is a game developed by Catherine Claudet on LUA and we thought that it probably needed a webpage too. It was my first multi-column responsive website as well as my introduction to flexbox. It also uses more advanced javascript than Cloud10.",
        technologies: [
            "HTML",
            "CSS",
            "JS"
        ]
    },
    {
        title: "Cloud10",
        screenshot: "../resources/ss01.png",
        link: "https://cmclaudet.github.io/Cloud10/",
        aboutShort: "Cloud10 is a small game developed for a Game Jam. I made a site for it as part of my learning process. This is the first complete webpage I ever made.",
        aboutLong: "Cloud10 is a small prototype for a game developed by Catherine Claudet for a Game Jam. I needed some inspiration to put to use all that I had learned until then. Since the assets were already made, Cloud10 was the perfect experiment. This is a very barebones single-page responsive website with only some minor use of javascript.",
        technologies: [
            "HTML",
            "CSS",
            "JS"
        ]
    }
]

class Project extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state={
            descriptionIsVisible: false
        };
    }
    renderTech(){
        let techLogoList = [];
        let tech = "";
        let logo = "";
        for (let i = 0; i < this.props.data.technologies.length; i++) {
            tech = this.props.data.technologies[i];
            logo = `../resources/logo_${tech.toLowerCase()}.png`;
            techLogoList.push(
                <div className="tech" key={tech.toLowerCase()}>
                    <img className="techLogo" src={logo} alt={`${tech} Logo`} />
                    <p className="techName">{tech}</p>
                </div>
            );
        }
        return techLogoList;
    }
    handleClick(e){
        console.log(e.target);
        let screenshot = e.target.parentNode.getElementsByClassName("imgScreenshot")[0];
        let description = e.target.parentNode.getElementsByClassName("descriptionContainer")[0];
        let frontScreen = e.target;
        if(this.props.onButtonClick(frontScreen,"descriptionShow")){

            screenshot.classList.add("animation__show_screnshot");
            screenshot.classList.remove("animation__hide_screnshot");

            description.classList.add("animation__hide_description");
            description.classList.remove("animation__show_description");

            frontScreen.classList.add("animation__hide_description");
            frontScreen.classList.remove("animation__show_description");
            frontScreen.classList.remove("descriptionShow");

        }
        else {
            screenshot.classList.add("animation__hide_screnshot");
            screenshot.classList.remove("animation__show_screnshot");

            description.classList.add("animation__show_description");
            description.classList.remove("animation__hide_description");

            frontScreen.classList.add("animation__show_description");
            frontScreen.classList.remove("animation__hide_description");
            frontScreen.classList.add("descriptionShow");
        }
    }
    render(){
        return (
            <div className={`horContainer horContainer${this.props.container}`} onClick={this.handleClick}>
                <div className="screenshotContainer">
                    <a href={this.props.data.link} target="_blank"><img src={this.props.data.screenshot} alt="" className="imgScreenshot"/></a>
                </div>
                <div className="descriptionContainer">
                    <div className="descriptionSubContainer">
                        <div className="descriptionSubContainer_content">
                            <h2>{this.props.data.title}</h2>
                            <p className="aboutShort">{this.props.data.aboutShort}</p>
                            <p className="aboutLong">{this.props.data.aboutLong}</p>
                        </div>
                        <div className="descriptionSubContainer_tech">
                            { this.renderTech() }
                        </div>
                    </div>
                </div>
                <div className="frontScreen">
                    <a href={this.props.data.link}>Visit Site</a>
                </div>
            </div>
        );
    }
}
export class Projects extends React.Component{
    renderProjects(){
        let projects = [];
        for(let i = 0; i < data.length; i++){
            if(i%2 === 0){
                projects.push( <Project key={`project${i}`} data={data[i]} container="1" onButtonClick={this.props.onButtonClick}/> );
            } else{
                projects.push( <Project key={`project${i}`} data={data[i]} container="2" onButtonClick={this.props.onButtonClick}/> );
            }
        }
        return projects;
    }

    componentDidMount (){
        let isPortrait = window.matchMedia( "(max-aspect-ratio: 1/1)" ).matches;
        if(isPortrait){
            window.sr = ScrollReveal({ distance: "0", opacity: 0.5, origin: "left", reset: true, scale: 1, viewFactor: 1.2 });
            sr.reveal(".horContainer");
        } else{
            const common = {
                distance: "40vw",
                duration: 1000,
                delay: 0,
                opacity: 0,
                scale: 1,
                reset: true,
                viewFactor: 0.1
            }
            window.sr = ScrollReveal(common);

            const horContainer1s = document.getElementsByClassName("horContainer1");
            const horContainer2s = document.getElementsByClassName("horContainer2");
            for(let i = 0; i < horContainer1s.length; i++){
                horContainer1s[i].getElementsByClassName("screenshotContainer")[0].classList.add("slideFirstFromLeft");
                horContainer1s[i].getElementsByClassName("descriptionContainer")[0].classList.add("slideSecondFromRight");
            }
            for(let i = 0; i < horContainer2s.length; i++){
                horContainer2s[i].getElementsByClassName("screenshotContainer")[0].classList.add("slideFirstFromRight");
                horContainer2s[i].getElementsByClassName("descriptionContainer")[0].classList.add("slideSecondFromLeft");
            }
            sr.reveal(".slideFirstFromLeft", { origin: "left", delay: 0 });
            sr.reveal(".slideSecondFromRight", { origin: "right", delay: 250 });
            sr.reveal(".slideFirstFromRight", { origin: "right", delay: 0 });
            sr.reveal(".slideSecondFromLeft", { origin: "left", delay: 250 });
        }
    }

    render(){
        return(
            <div className="containerContent">
                <div className="spacerMenu"></div>
                { this.renderProjects() }
            </div>
        );
    }
}
export class Content extends React.Component{
    render(){
        return;
    }
}
