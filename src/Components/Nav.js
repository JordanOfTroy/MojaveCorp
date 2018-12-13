import React, {Component} from 'react' 
import {Link, withRouter} from 'react-router-dom'

class Nav extends Component {
  constructor (props) {
    super(props)

    this.state={

    }
  }

  render() {
    return (
      <div>

        <Link to='/Home' >Home</Link>
        <Link to='/About' >About</Link>
        <Link to='/Contact' >Contact</Link>
        <Link to='/' >Landing</Link>
        
      </div>
    )
  }
}

export default Nav