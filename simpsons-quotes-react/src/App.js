import React from "react";
import DisplayQuote from "./components/DisplayQuote";

const quote ={
      quote:"Facts are meaningless. You could use facts to prove anything that's even remotely true.",
      character: "Homer Simpson",
      image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
  }

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newQuote : quote
    }
  }

  render(){
    return (
      <div className="App">
        <DisplayQuote quote ={quote} />
      </div>
    );
  }

}

export default App;
