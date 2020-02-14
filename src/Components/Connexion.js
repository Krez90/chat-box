import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Connexion extends Component {
    state = {
        pseudo: '',
        goToChat: false
    }

    handlechange = event => {
        const pseudo = event.target.value
        this.setState({pseudo})

    }

    handleSubmit = event => {
        event.preventDefault ()
        this.setState({goToChat: true})
    }
    render() {
        if(this.state.goToChat) {
            return <Redirect push to={`/pseudo/${this.state.pseudo}`}/>
        }
        return (
            <div className='connexionBox'>
            <form className='connexion' onSubmit={this.handleSubmit} >
            <input value={this.state.pseudo} onChange={this.handlechange} placeholder='Pseudo' type='text' required></input>
            <button type='submit'>Connexion</button>
            </form>
            </div>
        )
    }
}