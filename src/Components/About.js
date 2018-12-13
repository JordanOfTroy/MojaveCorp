import React, {Component} from 'react' 
import Nav from './Nav'
import Footer from './Footer'

class About extends Component {
  constructor(props) {
    super(props)

    this.stat={

    }
  }

  render() {
    return (
      <div>
        <Nav/>
        <h1>About.js</h1>
        <Footer/>
      </div>
    )
  }
}

export default About