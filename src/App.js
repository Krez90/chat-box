import React, { Component, createRef } from 'react'
import './App.css'
import Formulaire from './Components/Formulaire'
import Message from './Components/Message'

// firebase
import base from './base'

class App extends Component {

  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }

  messagesRef = createRef()

  componentDidUpdate (){
    const ref = this.messagesRef.current
    ref.scrollTop = ref.scrollHeight
  }

  componentDidMount (){
    base.syncState('/',{
      context:this,
      state: 'messages'
    })
  }

  addMessage = message => {
    const messages = {...this.state.messages}
    messages [`message-${Date.now()}`] = message
    Object
    .keys(messages)
    .slice(0, -10)
    .forEach(key => {messages[key] = null})

   this.setState({ messages })
  }

  render () {
    const messages = Object
      .keys(this.state.messages)
      .map(key =>(
        <Message 
        key={key}
        message={this.state.messages[key].message}
        pseudo={this.state.messages[key].pseudo}/>
      ))
    return (
      <div className='box'> 
        <div className='messages' ref={this.messagesRef}>
          <div className='message'>
            {messages}
          </div>
        </div>
      <Formulaire
      length={140}
      pseudo={this.state.pseudo}
      addMessage={this.addMessage} />
      </div>
    )
  }
}

export default App
