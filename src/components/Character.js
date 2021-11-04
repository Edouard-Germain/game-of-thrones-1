import React from 'react'
import App from "../App"
import 'bootstrap/dist/css/bootstrap.min.css'

class Character extends React.Component {
	render() {
		return(
            <div className="row ms-4">
                <div className="col-4 shadow p-3 mb-5 bg-white rounded">
                    <p>{this.props.name} {this.props.title}</p>
                    <img src={this.props.image} alt="wtf" height="250px" width="250px"/>
                    <button onClick={this.props.favoriteClick}></button>
                </div>
            </div>
		)
	}
}

export default Character