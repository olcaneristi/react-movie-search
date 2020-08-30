import React, { useState } from "react"
require("dotenv").config()

export default function Search() {
  const [query, setQuery] = useState("")
  const [movies, setMovies] = useState([])

  const Search = async (e) => {
    e.preventDefault()

    const API_KEY = process.env.REACT_APP_API_KEY
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`

    try {
      const res = await fetch(url)
      const data = await res.json()
      setMovies(data.results)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <div className="app">
        <div className="container">
          <h1 className="title">React Movie Search App</h1>

          <form className="form" onSubmit={Search}>
            <input
              className="input"
              type="text"
              placeholder="Enter a movie.."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="button" type="submit">
              Search
            </button>
          </form>
          <div className="movie-list">
            {(movies || [])
              .filter((movie) => movie.poster_path)
              .map((movie) => (
                <div className="movie" key={movie.id}>
                  <img
                    className="movie-img"
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                    alt={movie.title + " poster"}
                  />
                  <div className="movie-cont">
                    <h3 className="movie-title">{movie.title}</h3>
                    <p className="movie-rating">Rating: {movie.vote_average}</p>
                    <p className="movie-desc">{movie.overview}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
