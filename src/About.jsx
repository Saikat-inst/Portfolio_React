import React from 'react'
class About extends React.Component{
   
    render(){
        return(
            <>
         <div className="container1">
          <div className="row">
    <div className="col-md-6">
            <img src='image/Guddu.jpg' className="image wow fadeInLeft" />
        </div>
        <div className="col-md-6">
        <h2 className="about wow fadeInLeft">About Me</h2>
    <h4 className='welcome_text'>Hi!I'm <span className="letter">Saikat Paul Chowdhury</span> and I'm</h4>
                         <h2 className="ml4">
                            <span className="letters" >Web Developer | Designer</span>
                           </h2>
    <p className="pletter">I'm from Siliguri. I'm a full stack Web Developer, and I'm very passionate and dedicated to my work. I have acquired the skills and knowledge neccessary to develop web application on my own.</p>

        <div className="row">
        <div className="col-sm-6">
       <div className="icon">
       <h5 className="icon-heading"><i className="fa fa-address-book icon1"  aria-hidden="true"></i> Address</h5>
       <p className="pletter1"> Siliguri | Greater Noida</p>
      </div>
      <div className="icon">
      <h5 className="icon-heading"><i className="fa fa-phone-square icon1" aria-hidden="true"></i> Phone</h5>
      <p className="pletter1">6295250331/7865029157</p>
      </div>
      <div className="icon">
      <h5 className="icon-heading"><i className="fa fa-envelope icon1" aria-hidden="true"></i> Email</h5>
      <p className="pletter1">Saikatpaul406@gmail.com</p>
     </div>
     </div>
     <div class="col-sm-6">
    <div className="icon">
      <h5 className="icon-heading"><i className="fa fa-graduation-cap icon1" aria-hidden="true"></i> Degree</h5>
      <p className="pletter1">Pursuing Btech</p>
    </div>
    <div className="icon">
      <h5 className="icon-heading"><i className="fa fa-graduation-cap icon1" aria-hidden="true"></i> Study</h5>
      <p className="pletter1">IILM Cet,Greater Noida</p>
    </div>
    <div className="icon">
      <h5 className="icon-heading"><i className="fa fa-birthday-cake icon1" aria-hidden="true"></i> Birthday</h5>
      <p className="pletter1">2 August,1999</p>
    </div>
    
      </div>               
        </div>
        </div>
        </div>
        </div>
            
                <div className="skill wow fadeInLeft">
                <h2>My Skills</h2>
                <h4>HTML</h4>
                </div>
                <div className="progress">
        <div className="progress-bar bg-success"  role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div> <br></br>
        <div className="skill wow fadeInLeft">
                <h4>CSS</h4>
                </div>
                <div className="progress">
        <div className="progress-bar1 bg-info" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div> <br></br>
       <div className="skill wow fadeInLeft">
                <h4>CProgramming</h4>
                </div>
                <div className="progress">
        <div className="progress-bar2 bg-warning"  role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div> <br></br>
    <div className="skill wow fadeInLeft">
                <h4>Java</h4>
                </div>
                <div className="progress">
        <div className="progress-bar3 bg-primary"  role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div> <br></br>
      <div className="skill wow fadeInLeft">
                <h4>Php</h4>
                </div>
                <div className="progress">
        <div className="progress-bar4 bg-danger"  role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div> <br></br>
    <div className="skill wow fadeInLeft">
                <h4>Mysql</h4>
                </div>
                <div className="progress">
        <div className="progress-bar5 bg-warning" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div> <br></br>
    <div className="skill wow fadeInLeft">
                <h4>Jquery</h4>
                </div>
                <div className="progress">
        <div className="progress-bar6 bg-primary"  role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div> <br></br>
    <div className="skill wow fadeInLeft">
                <h4>Bootstrap</h4>
                </div>
                <div className="progress">
        <div className="progress-bar7 bg-info"  role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
       
       
     </>
        );
    }
}
export default About;