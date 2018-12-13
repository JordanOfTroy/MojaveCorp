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
    let foundersImage = 'https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-0/p526x296/10261987_10205774945269473_2777789207929003414_n.jpg?_nc_cat=107&_nc_ht=scontent.fmkc1-1.fna&oh=be2a0e42812003bb8f2d5f4568e1cb6f&oe=5CB136A1'
    return (
      <div>
        <Nav/>
        <img src={foundersImage} alt="Image of the founders of Mojave Corporation"/>
        <article>
          <h1>Corporate History</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vitae laboriosam reiciendis enim culpa laudantium dignissimos commodi vel illum maxime corporis, tempora doloribus quas sunt voluptatum fugit, numquam pariatur ad!
          Amet perferendis facere ea tempore minima nihil itaque. Accusamus, architecto esse. Qui maxime magni placeat quos labore, fugit, facere veniam quae provident reiciendis earum magnam ipsam. Consequuntur quisquam non eos?
          Saepe corrupti adipisci esse molestiae error, laudantium itaque iste ut repudiandae amet dolorem id, et in delectus impedit ex cumque necessitatibus aliquid recusandae illo architecto vel quis numquam. Dolorem, voluptatem!
          Veniam minus vitae officia ea sunt nulla ratione reprehenderit aliquam recusandae laudantium eius, voluptatibus, est perferendis earum cum odio, voluptas deleniti eos nesciunt ipsum nemo. Culpa saepe quia corporis quis!
          Illo est ab saepe corporis cumque repellendus dignissimos incidunt officia. Quasi veniam voluptas quam reiciendis aspernatur mollitia tenetur qui aut exercitationem officia neque vitae dolores repudiandae a, quo, minus accusantium.
          Esse illum facilis similique incidunt sed iure commodi. Qui, necessitatibus eveniet dolore sapiente doloremque nostrum assumenda, repellat non earum architecto numquam? Asperiores illo incidunt ducimus placeat harum optio unde facere?
          Culpa, commodi dignissimos fuga ut ullam doloribus suscipit debitis beatae soluta iste in dolor necessitatibus nemo non sequi minima nulla odit adipisci corporis. Consequuntur distinctio laudantium commodi provident. A, itaque.</p>
        </article>
        <section className="subcids">
          <div className="subcid">
            <img src="#" alt="company logo" className="subcid_image"/>
            <div className="description">
              <h2>Company One Name</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum culpa nam quidem nemo nostrum aperiam fugiat nobis quo voluptatum unde in dolorem repudiandae deserunt rem magni dolor, animi iusto numquam.</p>
            </div>
          </div>
          <div className="subcid">
            <img src="#" alt="company logo" className="subcid_image"/>
            <div className="description">
              <h2>Company Two Name</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum culpa nam quidem nemo nostrum aperiam fugiat nobis quo voluptatum unde in dolorem repudiandae deserunt rem magni dolor, animi iusto numquam.</p>
            </div>
          </div>
          <div className="subcid">
            <img src="#" alt="company logo" className="subcid_image"/>
            <div className="description">
              <h2>Company Three Name</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum culpa nam quidem nemo nostrum aperiam fugiat nobis quo voluptatum unde in dolorem repudiandae deserunt rem magni dolor, animi iusto numquam.</p>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    )
  }
}

export default About