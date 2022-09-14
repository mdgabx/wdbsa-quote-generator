import React, { Component } from "react";

class Home extends Component{
    render() {
        return (
            <div className="container-fluid home d-flex">
                <h1 className="text-center py-5">Random Quotes Generator</h1>
                <div className="container py-4 d-flex" id="quote-box" >
                    <p id="text" className="text-center">" text quote "</p>
                    <hr />
                    <p id="author">- Author</p>
                    <button id="new-quote">New Quote</button>
                </div> 
            </div>
        )
    }
}

export default Home;