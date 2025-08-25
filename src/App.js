import React, {Component} from "react";
import {Header} from "./layout/Header";
import {Footer} from "./layout/Footer";
import {Main} from "./layout/Main";

class App extends Component {
  state = {
    movies: ["movie"],
    loading: true
  };

  getMovies = () => {
    fetch('http://www.omdbapi.com/?apikey=f22f6e19&s=matrix')
      .then(response => response.json())
      .then(data => this.setState({movies: data, loading: false}))
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.getMovies();
  }

  render() {
    const {movies, loading} = this.state;
    return (
      <div className="App">
        <>
          <Header/>
          <Main movies={movies} loading={loading}/>
          <Footer/>
        </>
      </div>
    );
  }
}

export default App;
