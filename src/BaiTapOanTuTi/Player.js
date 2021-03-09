import React, { Component } from "react";
import {connect} from 'react-redux'

class Player extends Component {
  render() {
    return (
      <div className="playerGame">
        <div className="theThink">
          <img
            className="mt-2"
            width={70}
            height={70}
            src={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh}
            alt="../img/gameOnaTuTi/bao.png"
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 200, height: 200 }}
          src="./img/gameOanTuTi/player.png"
          alt="../img/gameOnaTuTi/player.png"
        />
        <div className="row">
            {this.props.mangDatCuoc.map((item,index) => {

              let border = {};
              if(item.datCuoc) {
                border = {border:'3px solid red'};
              }

              return <div className="col-4" key={index}>
                <button onClick={() => {
                  this.props.datCuoc(item.ma);
                }} style={border} className="btnItem ">
                  <img width={50} height={50} src={item.hinhAnh} />
                </button>
              </div>
            })}
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  mangDatCuoc: state.baiTapOanTuTiReducer.mangDatCuoc
})

const mapDispatchToProps = dispatch => ({
  datCuoc: (maCuoc) => {
    dispatch({
      type:'CHON_KEO_BUA_BAO',
      maCuoc
    })
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Player);