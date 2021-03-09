import React, { Component } from 'react'
import KetQua from './KetQua'
import XucXac from './XucXac'
import './GameXucXac.css'

export default class GameXucXac extends Component {
    render() {
        return (
            <div className="bgGameXucXac">
                <h1 className="text-center mt-5">Bài tập game xúc xắc</h1>
                <XucXac/>

                <KetQua/>
            </div>
        )
    }
}
