import React from "react";
import DisplayQuote from "./components/DisplayQuote";
import axios from 'axios'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newQuote: null
    }
    this.getNewquote = this.getNewquote.bind(this)
  }

  componentDidMount() {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(res => res.data)
      .then(data => {
        console.log(data)
        this.setState({ newQuote: data[0] })
      })
  }

  getNewquote() {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(res => res.data)
      .then(data => {
        console.log(data)
        this.setState({ newQuote: data[0] })
      })
  }

  render() {
    return (
      <div className="App">
        {this.state.newQuote ? 
        <div>
          <DisplayQuote quote ={this.state.newQuote} />
          <button
          onClick={this.getNewquote}>New quote</button>
        </div>
        : "Data loading" }


      </div>
    );
  }

}

export default App;
