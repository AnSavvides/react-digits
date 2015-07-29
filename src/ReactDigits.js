"use strict";

import React from "react";
import Digits from "digits";
import fetch from "whatwg-fetch";

export default class ReactDigits extends React.Component {

    constructor(props) {
        super(props);

        this.state = { buttonOpacity: 0.8 };
    }

    componentWillMount() {
        // This is the consumer key that Fabric
        // generated for your application.
        // You can find it in your Fabric web
        // dashboard under the Twitter Kit tab
        // Note that Digits does not work with
        // keys created from apps.twitter.com.
        Digits.init({
            consumerKey: ""
        });
    }

    onMouseOver() {
        this.setState({
            buttonOpacity: 1
        });
    }

    onMouseOut() {
        this.setState({
            buttonOpacity: 0.8
        });
    }

    onClick() {
        Digits.logIn()
            .done(this.onLoginSuccess)
            .fail(this.onLoginFailure);
    }

    onLoginSuccess(response) {
        // Now we need to send headers to the server
        // in order to validate the user by calling
        // Digits' API
        const oAuthHeaders = response.oauth_echo_headers;

        const data = {
            authHeader: oAuthHeaders["X-Verify-Credentials-Authorization"],
            apiUrl: oAuthHeaders["X-Auth-Service-Provider"]
        };

        // Let's assume there exists an endpoint where you pass
        // this information onto in order to validate the user.
        fetch("/user/verify", {
            method: "post",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(finalResponse => {
            // Handle the final response and change into
            // whatever state you need to depending on
            // if the user has been validated or not.
        });
    }

    onLoginFailure(response) {
        // You can add some more elaborate error handling,
        // for exampling changing the state of the app to
        // let the user know that something has gone wrong.
        //
        // Here, we are simply triggering an error in the console.
        const failureType = response.type;
        const failureMessage = response.message;

        console.error(
            `Failure type: ${failureType}, Failure message: ${failureMessage}`
        );
    }

    render() {
        // Some styling for the button; feel free to change
        // this as you please. If you aren't a fan of inline
        // styles, feel free to go ahead and use CSS.
        const style = {
            display: "inline-block",
            padding: "15px",
            borderRadius: "3px",
            backgroundColor: "#55acee",
            opacity: this.state.buttonOpacity,
            border: "1px solid #3b88c3",
            color: "#fff",
            cursor: "pointer",
        };

        const blurbStyle = {
            padding: "10px 0"
        };

        return (
            <div>
                <div id="blurb" style={blurbStyle}>
                    Log in with <a href="https://get.digits.com/">Digits</a>, using just your phone number
                </div>
                <div id="search-button" style={style} onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)} onClick={this.onClick.bind(this)}>Log in</div>
            </div>
        );
    }

};

React.render(<ReactDigits />, document.getElementById("content"));