import React, { Component } from 'react'
import {connect} from 'react-redux'
class KetQua extends Component {
    render() {
        return (
            <div>
                <div className="display-4 text-danger">{this.props.mangKetQua.ketQuaOanTuTi}</div>
                <div className="display-4 text-primary">Win :
                <span className=" ml-3 text-secondary">
                {this.props.mangKetQua.soBanThang}</span></div>
                <div className="display-4 text-success">Round :
                <span className=" ml-3 text-secondary">
                {this.props.mangKetQua.soBanChoi}</span></div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    mangKetQua: state.baiTapOanTuTiReducer
})

export default connect(mapStateToProps)(KetQua);
