import { Link } from "react-router-dom";
import React, { Component } from "react";
import Button from "./Button";
import InputStyle from "./InputStyle";

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: "",
        }
    }

    _handleSubmit(event) {
        event.preventDefault();
        const serverResponse = this.props.handleSubmit(
            this.state.question,
        );
        this.setState({
            serverResponse
        },
        () => {
            console.log("server response is: ", serverResponse);
        });
    };

    _onChange(field, value) {
        this.setState({
            [field]: value
        });
    };

    render() {
        const { question } = this.state;
        return (
            <form onSubmit={this._handleSubmit}>
        <label>
        <InputStyle 
            id="question"
            name="question" 
            type="text" 
            placeholder="Your question, please..."
            onChange={(event) => {
                this._onChange(event.target.name, event.target.value);
            }}/>
        </label>
        <br/>
        <Link to={`/${question}`}>
            <Button type="submit">Create my message</Button>
        </Link>

        </form>
        )
    }

}

export default Input;