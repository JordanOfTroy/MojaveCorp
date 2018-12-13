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
    let email='email@mojavecorp.com'
    let phone = '###-###-####'
    let address = 'P.O. Box ###### somestreet Ave, Provo, UT 84604'
    return (
      <div>
        <Nav/>
        <article>
          <h1>Contact Policy</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum omnis, excepturi praesentium iste illum inventore rerum ipsam voluptatem mollitia eaque ullam sunt at obcaecati sit reiciendis quas, saepe error consequatur.
          Error repellendus dignissimos excepturi. Velit odio ducimus magni officia. Officiis qui voluptatem quod a dignissimos beatae amet placeat culpa ex explicabo reiciendis dolor non sint perspiciatis, alias, unde error neque!
          Veniam placeat corrupti atque optio possimus eum, cum harum dicta accusantium natus, perspiciatis eligendi quas nisi, eaque illum molestias praesentium! Suscipit laudantium itaque ratione atque vitae dolorum ducimus nam velit.</p>
        </article>
        <section className='contact_infos'>
          <div className="email">
          <h2>Email: <span className='contact_info'>{email}</span></h2>
          </div>
          <div className="Phone">
          <h2>Phone: <span className='contact_info'>{phone}</span></h2>
          </div>
          <div className="post">
          <h2>Mailing Address: <span className='contact_info'>{address}</span></h2>
          </div>
        </section>
        <Footer/>
      </div>
    )
  }
}

export default Contact