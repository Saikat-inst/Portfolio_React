import React from 'react'
class Home extends React.Component{
     
    render(){
    return(
        <>
         
             <section className="header">
                        <div className="container">
                       
                        <div className="home">
                   
                    <img src='image/Guddu.jpg' class='wow fadeInDown'/>
                    <div className="animated-text">
                        <h3 className='welcome_text'>Hello,my name is</h3>
                        <h1 className='text-2 wow fadeInLeft'>Saikat Paul Chowdhury</h1>
                        <h4 className='welcome_tex'>And i'm a</h4>
                        <span className='text'>Web Developer</span>
                        <a href="#"  className='btn btn-success'>Message Me</a>
                    </div>
               
                      
                    </div>
                   </div>
                 </section>
               
                    
                 
        </>

    )
    }

}
export default Home;