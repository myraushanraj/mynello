import React, { Component } from 'react'
import Player from './JWPlayer'
import { Link } from 'react-router-dom';

export default class Audio extends Component {
    render() {
        return (
            <div>
                <h2>Component 1</h2>
                <Link to="audio2">Audio2</Link>
                <Player />
            </div>
        )
    }
}
