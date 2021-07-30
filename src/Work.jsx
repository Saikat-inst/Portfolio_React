import React from 'react'
class Work extends React.Component{

    render(){
        return(
          <>
           <div className="container2">
    <div className="container my-2 card-container">
	<div className="row">
		<div className="col-12 col-md-6 col-lg-4">
			<div className="card wow fadeInLeft" style={{ width:"300px"}}>
				<div className="image" >
					<img src="image/work.png" alt="web" style={{ width:"250px"}} />
				</div>
				<div className="card-title p-2 text-center bg-warning mb-0">
					<h5>My Own Portfolio</h5> 
				</div>
				
				<div className="card-body text-center">
					<p>This is my portfolio where you will get to know about me.Technologies used : Html,Css,Jquey,Javascript,Php,  Bootstrap</p>
          <button type="button" className="btn btn-primary mt-2"><a href="https://saikatpaul.000webhostapp.com/" class="link" style={{color:"white"}}>Click Here</a></button>
				</div>
      
			</div>
            </div>
        <div className="col-12 col-md-6 col-lg-4">
			<div className="card wow fadeInLeft" style={{ width:"300px" }} >
				<div className="image" >
					<img src="image/work2.png" alt="web" style={{width:"250px",height:"250px"}} />
				</div>
				<div className="card-title p-2 text-center bg-warning mb-0">
					<h5>Kitchen Series</h5> 
				</div>
				
				<div className="card-body text-center">
					<p>In this project i mostly worked in backend and managment part.Technologies used : Html,Css,Jquey,Javascript,Php,  Bootstrap</p>
          <button type="button" className="btn btn-primary mt-2"><a href="http://kitchenseries.in/" class="link" style={{color:"white"}}>Click Here</a></button>
				</div>
      
			</div>
		</div>
        <div className="col-12 col-md-6 col-lg-4">
			<div className="card wow fadeInLeft" style={{ width:"300px"}}>
				<div className="image" >
					<img src="image/work3.png" alt="web" style={{width:"260px",height:"250px"}}/>
				</div>
				<div className="card-title p-2 text-center bg-warning mb-0">
					<h5>Homestay Website</h5> 
				</div>
				
				<div className="card-body text-center">
					<p>In this project i mostly worked in backend and managment part.Technologies used : Html,Css,Jquey,Javascript,Php,  Bootstrap</p>
          <button type="button" className="btn btn-primary mt-2"><a href="https://samjanahomestay.in/" class="link" style={{color:"white"}}>Click Here</a></button>
				</div>
      
			</div>
		</div>
        </div>
        </div>
        </div>
     
          <div className="card-body text-center">
   <center> <button type="button" className="btn1 btn-primary mt-2"><a href="img/Saikat Paul Chowdhury CV.pdf" class="link1" style={{color:"white"}} ><i class="fa fa-download"></i> Download My Resume</a></button></center>
   <center> <button type="button" className="btn1 btn-danger mt-2"><a href="https://github.com/Saikat-inst" class="link2" style={{color:'white'}}>Visit my Github</a></button></center>
          </div>
          
          </>
        )
    }
}
export default Work;