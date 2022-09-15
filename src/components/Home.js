import React, { Component } from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import { connect } from 'react-redux';


class Home extends Component{
   
    handleClick = () => {
        console.log('props', this.props);
        const { quotes } = this.props;
        const randomIndex = Math.floor(Math.random() * quotes.length);
        
    this.setState({
            quotes: this.props.quotes[randomIndex]
    })
    };

    render() {
        console.log('props', this.props);

        const { quotes } = this.props;
        const randomIndex = Math.floor(Math.random() * quotes.length);

        return (
            <div className="container-fluid home d-flex">
                <div className="col">
                    <h1 className="text-center py-5">Random Quotes Generator</h1>
                    <div className="container py-4 d-flex mx-auto align-items-center justify-content-center w-50" id="quote-box" >
                        <div className="col mx-auto justify-content-center">
                            <p id="text" className="text-center">" { quotes[randomIndex]["quote"] } "</p>
                            <hr />
                            <p id="author">- { quotes[randomIndex]["author"] }</p>
                            <div className="row group-btn mt-2 py-2">
                                <button className="btn btn-primary text-center w-20" id="new-quote"
                                onClick={this.handleClick}
                                >
                                New Quote
                                </button>
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


const mapStateToProps = (state) => {

    return {
        quotes: state.quotes
    }
}

export default connect(mapStateToProps)(Home);