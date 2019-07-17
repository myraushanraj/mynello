import React, { Component } from 'react'
import Player from './JWPlayer'
import { Link } from 'react-router-dom';

export default class Audio2 extends Component {
    render() {
        return (
            <div>
                <h2>Component 2</h2>

                <Link to="audio1">Audio2</Link>
                <Player />
            </div>
        )
    }
}
