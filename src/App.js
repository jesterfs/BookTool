import React, { Component } from 'react';
import './App.css';
import SearchBar from "./SearchBar";
import Results from './Results';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      printType: '',
      availability: '',
      results: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  changePrintType = (printType) => {
    this.setState({ printType });
  }

  changeAvailabilty = (availability) => {
    this.setState({ availability });
  }
  
  handleChange = (event) => {
    this.setState({searchTerm: event.target.value});
  }


  handleSubmit(event) {
    let print='';
    let avail='';
    event.preventDefault(); 

    if(this.state.printType !== '') {
      print = `printType=${this.state.printType}`
    }

    if(this.state.availability !== '') {
      avail = `filter=${this.state.availability}`
    }

    let params = `q=${this.state.searchTerm}&${avail}&${print}&key=AIzaSyCMPgULEuNZJbrYjTAhtv6_C5z0IMHcNLg`;

    


    fetch (`https://www.googleapis.com/books/v1/volumes?${params}`)
      .then(response => response.json())
      .then(data => 
      { this.setState({results: data.items})}
      )
      .catch(err => alert('Trouble connecting. Try again later.'))
    
  }



  render() {
    return (
      <div className="App">
        <header>
          <h1> Google Book Search </h1>
        </header>
        <main>
          <SearchBar
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            searchTerm={this.state.searchTerm}
            changePrintType={this.changePrintType}
            changeAvailabilty={this.changeAvailabilty}
            />
          <Results 
            data={this.state.results}
            />
      
        </main>
      </div>
    )
  }




}






export default App;
