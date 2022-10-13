import React, { Component } from "react";

class Footer extends Component 
{
    render()
    {
        return(
            <div className="footer mt-5" >
                <div className="container">
                    <div className="row bg-dark bg-gradient text-white border border-secondary rounded justify-content-center m-auto">
                        <div className="col-6 col-sm-4">
                        <img src="assets/images/logoweb.jpeg" className="fluid mt-1 mb-1" style={{'border-radius': '50%'}} alt="Profile Picture" height="150" width="150"/>
                        </div>
                        <div className="col-6 col-sm-8">
                        <h2>Contact Us</h2>
                        <span className="fa fa-phone"></span> 678-685-7328 <br></br>
                        <span className="fa fa-envelope"></span> devin3000watts@yahoo.com
                        </div>

                    </div>
                    <div className="row justify-content-center">             
                        <div className="col-auto">
                            <p>© Copyright 2022-All Rights Reserved</p>
                        </div>
            </div>

                </div>

            </div>

        );
    }
}


export default Footer;