import React, { Component } from 'react';

export class MovieList extends Component{

constructor(props) {
  super(props)

  this.state = {
    movies : []
  }
}

componentDidMount() {

  const omdbAPI = 'http://www.omdbapi.com/?s=batman&apikey=13a5259b'


  fetch(omdbAPI).then(
    response => response.json()
  ).then(
    json => this.setState({
      movies : json.Search
    })
  )
}

  render() {

    let movieData = this.state.movies.map(function(movie,index){
      return <li key={index}><b>{movie.Title}</b> <p></p> <div className='posterContainer'><img src={movie.Poster} className='posterImg'></img><ul className='text'><li>{movie.Title}</li><li>{movie.Year}</li></ul></div> <p></p></li>
    })

    return(
      <div className ='movieDiv'>
      {movieData}
      </div>
    )
  }
}
