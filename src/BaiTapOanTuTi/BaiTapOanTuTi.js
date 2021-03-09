import React, { Component } from 'react'
import './BaiTapOanTuTi.css'
import Computer from './Computer'
import Player from './Player'
import KetQuaOanTuTi from './KetQuaOanTuTi'
import {connect} from 'react-redux'

class BaiTapOanTuTi extends Component {
    render() {
        return (
            <div className="GameOanTuTi">
               <div className="row text-center mt-5">
                    <div className="col-4">
                    <Player/>
                    </div>
                    <div className="col-4">
                    <KetQuaOanTuTi/>
                    <button 
                    onClick={() => {
                        this.props.playGame()
                    }}
                    className="btn btn-warning mt-3 p-3 display-3">
                        Play game
                    </button>
                    </div>
                    <div className="col-4">
                    <Computer/>
                    </div>
               </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    playGame: () => {
        dispatch ({
            type: 'RAN_DOM'
        })
    }
})


export default connect(null,mapDispatchToProps)(BaiTapOanTuTi);