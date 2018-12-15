import React, {Component} from 'react' 
import {Link, withRouter} from 'react-router-dom'

class Nav extends Component {
  constructor (props) {
    super(props)

    this.state={
      showDrawer: false
    }
  }

  handleClick = () => {
    console.log('changing showDrawer in State')
    this.setState({
      showDrawer: !this.state.showDrawer
    })
  }

  render() {
    let navImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTADUhTbqbOukvOLy4xDyiecXhs_7q0PX5KBgcJR9OYBhZltM_9Xg'
    let {showDrawer} = this.state
    return (
      <div id='nav'>
        <img src={navImage} alt="Mojave Corporation Logo" className='nav_logo'/>
        <h1>Mojave Corporation</h1>
        <ul className = {showDrawer ? 'open' : 'close'}>
          <li><Link className='link' to='/Home' >Home</Link></li>
          <li><Link className='link' to='/About' >About</Link></li>
          <li><Link className='link' to='/Contact' >Contact</Link></li>
          <li><Link className='link' to='/' >Landing</Link></li>
        </ul>
        <div className={"burger_menu" + (showDrawer ? ' crossed' : ' bars')} onClick={()=>this.handleClick()}>
          <div className="patty top_patty"></div>
          <div className="patty middle_patty"></div>
          <div className="patty bottom_patty"></div>
        </div>
      </div>
    )
  }
}

export default Nav