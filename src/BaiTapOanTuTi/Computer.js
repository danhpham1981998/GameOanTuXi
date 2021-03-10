import React, { Component } from "react";
import {connect} from 'react-redux'

class Computer extends Component {
  render() {

    let keyframes = `@keyframes randomItem${Date.now()} {
      0% {top: -9px;}
      25% {top: 22px;}
      50% {top: 22px;}
      75% {top: -9px;}
      100% {top: 0;}
    }`

    return (
      <div className="playerGame">
        <style>
          {keyframes}
        </style>
        <div className="theThink">
        <img
            style={{
              position:'absolute',
              right:'40%',
              animation:`randomItem${Date.now()} 0.5s`,
            }}
            className="mt-2"
            width={70}
            height={70}
            src={this.props.computer.hinhAnh}
            alt={this.props.computer.hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 200, height: 200 }}
          src="./img/gameOanTuTi/playerComputer.png"
          alt="../img/gameOnaTuTi/playerComputer.png"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  computer: state.baiTapOanTuTiReducer.computer
})

export default connect(mapStateToProps)(Computer);
