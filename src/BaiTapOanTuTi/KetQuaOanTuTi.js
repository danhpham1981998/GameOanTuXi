import React, { Component } from 'react'

export default class KetQua extends Component {
    render() {
        return (
            <div>
                <div className="display-4 text-danger">You Lose!!!</div>
                <div className="display-4 text-primary">Win :
                <span className=" ml-3 text-secondary">0</span></div>
                <div className="display-4 text-success">Round :
                <span className=" ml-3 text-secondary">0</span></div>
            </div>
        )
    }
}
