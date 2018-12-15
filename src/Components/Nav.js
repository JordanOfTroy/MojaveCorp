import React, {Component} from 'react' 
import {Link, withRouter} from 'react-router-dom'

class Nav extends Component {
  constructor (props) {
    super(props)

    this.state={

    }
  }

  render() {
    let navImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTADUhTbqbOukvOLy4xDyiecXhs_7q0PX5KBgcJR9OYBhZltM_9Xg'
    
    return (
      <div id='nav'>
        <img src={navImage} alt="Mojave Corporation Logo" className='nav_logo'/>
        <h1>Mojave Corporation</h1>
        <ul>
          <li><Link to='/Home' >Home</Link></li>
          <li><Link to='/About' >About</Link></li>
          <li><Link to='/Contact' >Contact</Link></li>
          <li><Link to='/' >Landing</Link></li>
        </ul>
      </div>
    )
  }
}

export default Nav