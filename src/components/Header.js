import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // title: 'The Keywords Are:',
            keywords: ''
        }

    }
    
    inputChange(event) {
        // console.log(event.target.value);
        this.setState({ keywords: event.target.value });
        this.props.newsSearch(event.target.value);
    }

    
    render() {

        return(
            <header>
                <div className="logo"
                onClick={()=>console.log('clicked')}
                >Logo</div>
                <input  placeholder="Search Title"
                onChange={this.inputChange.bind(this)}
                />
            </header>
        )
    }
}

export default Header;


// style inline
/*
        const styles = {
            header:{
                background:'#03a9f4'
            },
            fontFamily: 'sans-serif',
                logo: {
                color: '#FFF',
                textAlign: 'center',
                fontSize: 18
            }
        }
*/