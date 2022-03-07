import React from 'react'
import './App.css'
import Intro from './Intro/Intro';
import Quiz from './Quiz';





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TakeTest: true
    }
    this.handleClick = this.handleClick.bind
      (this)

  }
  handleClick() {
    this.setState({
      TakeTest: false
    })
  }
  render() {




    return (


      <div className="App">
        
        
        {
          this.state.TakeTest ?

            (<div className="Intro">
              <Intro clickevent={this.handleClick} />
            </div>) :
            (
               <div className="Quiz">
                 <Quiz />
              </div>
             ) 
          }
        
      </div>

    )
  }
}

export default App
