import React, {Component} from 'react' 
import MojaveSupply from './assets/mojaveSupply.jpg'
import KillerHeat from './assets/killerHeat.jpg'
import CCF from './assets/CCF.jpg'


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
        <h1>Who We are</h1>
        
        <img src={foundersImage} alt="Image of the founders of Mojave Corporation"/>
        
        <article>
          <p>
          The founders of Mojave Corporation started out in their family cleaning business.  After many years of working in the cleaning and restoration side of the industry, we moved into retail sales and support for the cleaning and restoration industry.  This family also owns and runs several restoration franchises in California dealing with floods, fire and mold damage situations.  
          <br/><br/>
          Being that we only sell products that are tried and tested by our staff in our other businesses, our customers have come to trust our opinions and recommendations.  
          <br/><br/>
          ​Our heat systems have become a favorite amongst not only restoration contractors but also for pest control companies, hotels and multi-unit housings for the eradication of bed bugs through the use of heat.  Killer Heat was opened to specialize in the equipment, training and consultation services for the hospitality industry in dealing with bed bug infestations.  
          <br/><br/>
          ​All the employees of Mojave Corporation are Crime-Free Certified.  We have joined with other great companies who also provide this peace of mind to their customers.  ChooseCrimeFree.com is a group of companies who market together in their own market places letting their community have  place to go to find great companies who care enough to go through such steps.  It's great to know who you are working with and that all the employees of these companies are not only certified crime free upon hiring but each and every year there after.  Besides the extensive background testing that they undergo, they also drug test their employees.  We are all dedicated to providing you excellent customer service with employees who are fantastic. 
          </p>
        </article>
     
      </div>
    )
  }
}

export default About