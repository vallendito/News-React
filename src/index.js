
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import './assets/css/style.css';
import JSON from './db.json';
import NewList from './components/NewsList';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            news: JSON,
            filtered: JSON
        }
    }

    filtersNews(keywords) {
        
        let filtered = this.state.news.filter((item) => {
            return item.title.indexOf(keywords) > -1;
        });

        this.setState({filtered});
    }


    render() {
        return(
            <div>
                <Header newsSearch = {keywords => this.filtersNews(keywords)} />
                <NewList news={this.state.filtered} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
