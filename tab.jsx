import React from "react";
import { render } from "react-dom";

export default class Tab extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedPane: 0,
        }
        this.paneChange = this.paneChange.bind(this);
        // paneArticle = this.paneArticle.bind(this);
    }

    // paneArticle(){

    // }
    paneChange(num){
        this.setState({selectedPane: num});
    }
    render(){
        const pane = this.props.tabs[this.state.selectedPane];
        const headers = this.props.tabs.map((pane, index) => {
            const top = pane.title;
            return(
                <li
                    key={index}
                    onClick={() => this.paneChange(index)}
                >
                    {top}{' '}
                </li>
            )
        })
        return(
            <div>
                <h1>Tabs</h1>
                <ul>
                    {headers}
                </ul>
                <h3>{pane.content}</h3>
            </div>
        )
    }
}