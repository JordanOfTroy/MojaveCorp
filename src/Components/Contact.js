import React, {Component} from 'react' 


class Contact extends Component {
  constructor(props) {
    super(props)

    this.stat={

    }
  }

  render() {
    let email='support@mojavecorporation.com'
    let phone = '866-670-1395'
    let fax = '###-###-####'
    let address = 'P.O. Box ###### somestreet Ave, Provo, UT 84604'
    return (
      <div id='contact'>

        <h1>Contact Information</h1>
      
        <section className="corporate_info  ">
          <h1>
            Mojave Corporate Offices
          </h1>

          <p>
            {email} <br/>
            {phone} <br/>
            {fax} <span className='subtext'>fax</span> <br/>
            {address} <br/>
          </p>
        </section>

        <section className="recommended_companies ">
          <h1 className="title">Recommended Companies</h1> 

          <p className="recommended_company">
            <a href="#" target='_blank'><span className="first_Sentence">For flood, fire and mold damage cleanup and remediation we recommend ServiceMaster First Response. </span></a>
             They can right on the water damage or other disaster quickly and work with your insurance company to make for a easy claim process. 
          </p> <br/> 

          <p className="recommended_company">
            <a href="#" target='_blank'><span className="first_Sentence">For garment and soft goods restoration, contact SGR. </span></a>
              Their Esporta Certified team can restore clothing and other soft goods after fires, sewage and mold damage has occurred.  Restore, Don't Replace!
          </p> <br/>

          <p className="recommended_company">
            <a href="#" target='_blank'><span className="first_Sentence">For cleaning and restoration equipment sales, contact Mojave Supply. </span></a>
            For cleaning and restoration equipment sales, contact Mojave Supply.  Their prices and customer service are fantastic.
          </p> <br/>

          <p className="recommended_company last">
            <a href="#" target='_blank'><span className="first_Sentence">Bed Bug Treatment Options: </span></a>
             For bed bug heat eradication systems, you want to contact KillerHeat.  They specialize in heat treatment equipment and training.  Heat is the best way to kill bed bugs and their eggs
          </p> <br/>

        </section>


      </div>
    )
  }
}

export default Contact