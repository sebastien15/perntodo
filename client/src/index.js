import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import NewsList from './components/news_list';
import JSON from './db.json';

// ReactDOM.render(
//   <React.StrictMode>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//COMPONENTS


class App extends Component {
  state = {
    news: JSON
  }

  render() {
    return(
      <div>
        <Header/>
        <NewsList news={this.state.news}/>
      </div>
    )
  }
  
}


ReactDOM.render(<App/>, document.querySelector("#root"))