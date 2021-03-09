import React, { Component } from "react";
import {connect} from 'react-redux'

class Computer extends Component {
  render() {
    return (
      <div className="playerGame">
        <div className="theThink">
        <img
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
