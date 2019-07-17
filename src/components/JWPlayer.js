import React, { Component } from 'react'
import ReactAudioPlayer from 'react-audio-player';

export default class JWPlayer extends Component {
    render() {
        return (
            <div>
                <ReactAudioPlayer
                    src="//cdn.lijinke.cn/gaoshang.mp3"
                    autoPlay
                    controls
                />
            </div>
        )
    }
}
