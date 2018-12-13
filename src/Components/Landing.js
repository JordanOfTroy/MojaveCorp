import React, {Component} from 'react' 
import {Link, withRouter} from 'react-router-dom'

class Landing extends Component {
  constructor (props) {
    super(props)

    this.state={

    }
  }

  render() {
    return (
      <div>
        <h1>Landing.js</h1>
        <Link to='/Home'><button>See What's Inside</button></Link>
        
      </div>
    )
  }
}

export default Landing