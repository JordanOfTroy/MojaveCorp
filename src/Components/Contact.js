import React, {Component} from 'react' 
import Nav from './Nav'
import Footer from './Footer'

class Contact extends Component {
  constructor(props) {
    super(props)

    this.stat={

    }
  }

  render() {
    return (
      <div>
        <Nav/>
        <h1>Contact.js</h1>
        <Footer/>
      </div>
    )
  }
}

export default Contact