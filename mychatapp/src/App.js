import React from 'react';
import ChatMessage from './components/ChatMessage'


export default class App extends React.Component {
     constructor(props){
       super(props);
       this.state ={ 
         currentView:'ChatMessage'
       }
     }
 
    changeView = (view) => {
      this.setState({view})
    }

    render () {
      const {currentView} = this.state;
      let view = '';
      if(currentView === 'ChatMessage'){
        view = <ChatMessage changeView={this.changeView}></ChatMessage>
      }
      return (
        <div>
          {view}
        </div>
        );
    }

}


