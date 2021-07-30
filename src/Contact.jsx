import React from 'react'
class Contact extends React.Component{

    render(){

        return(
           <>
             <div className="container" >
            <section className="get_in_touch">
      <div className="container-fluid">
      <div className="row">
  <div className="contact-info col-lg-4 col-sm-12">
    <h4 className="info-heading">Contact Info</h4>
    <div className="icon">
      <h5 className="icon-heading"><i className="fa fa-address-book" aria-hidden="true"></i>Address</h5>
      <p>Deshbandupara,Siliguri | Gamma1,Greater Noida </p>
    </div>
    <div className="icon">
      <h5 className="icon-heading"><i className="fa fa-phone-square" aria-hidden="true"></i>Phone</h5>
      <p>6295250331 | 7865029157</p>
    </div>
    <div className="icon">
      <h5 className="icon-heading"><i className="fa fa-envelope" aria-hidden="true"></i>Email</h5>
      <p>Saikatpaul406@gmail.com</p>
    </div>
  </div>
  <div className="col-lg-8 col-sm-12">
  <h4 className="title">Contact us</h4>
  
       
    <div className="contact-form row">
      <div className="form-field col-lg-12">

        <input id="name" type="text" className="input-text" placeholder="Enter Name" name="name" required/>
      
      </div>
      <div className="form-field col-lg-12">
         <input id="email" type="email" className="input-text" placeholder="Enter Email" name="email" required/>
       
      </div>
      <div className="form-field col-lg-12">
         <input id="message" type="text" className="input-text" placeholder="Enter Message" name="message" required/>
        
      </div>
      <div className="form-field col-lg-12 d-flex justify-content-center align-item-center">
      <input type="submit" value="submit" name="submit" className="submit-btn"/>
      </div>
    </div>
  
    
</div>
    </div>
 </div>
 </section>
 </div>

 
   

     
           </>
        )
    }
}
export default Contact;