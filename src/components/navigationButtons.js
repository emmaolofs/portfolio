import React, {Component} from "react";
import Portfolio from "./portfolio";
import About from "./about";
import Contact from "./contact";

class NavigationButtons extends Component {
    constructor() {
        super();
        this.state = {
            name : "React",
            showHidePortfolio: false,
            showHideAbout: false,
            showHideContact: false
        };
        this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent(name) {
        console.log(name);
        switch(name) {
            case "showHidePortfolio":
                this.setState({ showHidePortfolio: !this.state.showHidePortfolio});
                break;
            case "showHideAbout":
                this.setState({ showHideAbout: !this.state.showHideAbout});
                break;
            case "showHideContact":
                this.setState({ showHideContact: !this.state.showHideContact});
                break;  
            // Need to add a default case
        }
    }

    render() {
        const { showHidePortfolio, showHideAbout, showHideContact } = this.state;
        return (
            <div>
                <div id="navigationButtons">
                    <button onClick={() => this.hideComponent("showHidePortfolio")}>
                        PORTFOLIO
                    </button>
                    <button onClick={() => this.hideComponent("showHideAbout")}>
                        ABOUT
                    </button>
                    <button onClick={() => this.hideComponent("showHideContact")}>
                        CONTACT
                    </button>
                </div>
                {showHidePortfolio && <Portfolio/>}
                {showHideAbout && <About/>}
                {showHideContact && <Contact/>}
            </div>
        );
    };
}



export default NavigationButtons;