import React, { Component } from 'react'
import {connect} from 'react-redux'


class XucXac extends Component {
    render() {
        return (
            <div className="container text-center mt-5">
                <div className="row">
                    <div className="col-4">
                        <button style={{border:'none'}} className="bg-danger">
                            <div className="p-5 bg-danger text-white w-100 h-100" style={{fontSize:30}}>
                                Tài
                            </div>
                        </button>
                    </div>
                    <div className="col-4">
                        {/* Map lai tai day da doi reducer */}
                        {this.props.xucXacReducer.mangXucXac.map((item,index) => {
                            return <img className="mr-1" key={index} src={item.hinhAnh} width="50"/>
                        })}
                    </div>
                    <div className="col-4">
                        <button style={{border:'none'}} className="bg-dark">
                            <div className="p-5 bg-dark text-white w-100 h-100" style={{fontSize:30}}>
                                Xỉu
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    xucXacReducer: state.reducer.xucXacReducer
})


export default connect(mapStateToProps)(XucXac);