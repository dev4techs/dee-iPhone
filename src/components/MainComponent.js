import React, {Component} from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';


class Main extends Component 
{
    constructor(props)
    {
        super(props);

    }

    render()
    {
        return(
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                            <h1>Page Not Found!</h1>
                            </main>
                        }
                />
            </Routes>
            <Footer />
        </div>
        );
    }
}

export default Main;