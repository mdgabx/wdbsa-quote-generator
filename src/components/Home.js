import React, { Component } from "react";
import TwitterIcon from '@mui/icons-material/Twitter';


class Home extends Component{
    render() {
        return (
            <div className="container-fluid home d-flex">
                <div className="col">
                    <h1 className="text-center py-5">Random Quotes Generator</h1>
                    <div className="container py-4 d-flex mx-auto align-items-center justify-content-center w-50" id="quote-box" >
                        <div className="col mx-auto justify-content-center">
                            <p id="text" className="text-center">" text quote "</p>
                            <hr />
                            <p id="author" className="m-auto text-center">- test Author</p>
                            <div className="row group-btn mt-2 py-2">
                                <button className="btn btn-primary text-center w-20" id="new-quote">New Quote</button>
                                <a className="btn btn-primary w-20" href="/twitter.com/intent/tweet" alt="twitter quote" target="_blank" id="tweet-quote">
                                    <TwitterIcon />
                               </a>
                            </div>         
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}

export default Home;