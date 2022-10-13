import React, { Component } from "react";
class Home extends Component
{

    render()
    {
    
        return(
        <div className="container" style={{height: '70vh'}}>
            <div className="row">
                <div className="col-6 mt-5">
                    <h1 className=" fw-bold d-flex justify-content-start" style={{'font-size': '70px'}}>Hey, I am DEE</h1>
                    <p className="text-start">#1 Buyer of Apple Products in  the U.S.</p>
                </div>
                <div className="col-6 mt-4">
                        <img src="assets/images/logoweb.jpeg" className="fluid" style={{'border-radius': '50%'}} alt="Profile" height="250" width="250"/>
                
                </div>
                
                    
                
            </div>
    

        </div>
        );
    }
}

export default Home;