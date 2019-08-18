import React from 'react';
import '../styles/ChatMessage.css'

export default class ChatMessage extends React.Component { 
    constructor(props){
        super(props)
        this.state = {

        }
    }

    changeView = () => {
        this.props.changeView('singup')
    }

    render(){
        return(
            <React.Fragment>
                <div>
                    <button className='chat-button' onClick={this.changeView}>Send Message</button>
                </div>
            </React.Fragment>
        );
    }
}