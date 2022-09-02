import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [movieName, setMovieName] = useState("");
  const [movieReview, setMovieReview] = useState("");

  const handleSubmit = () => {
    axios.post('http://localhost:3001/insertReview', {
      movieName: movieName,
      movieReview: movieReview
    }).then(() => alert(`Inserido com sucesso! Filme: ${movieName}`));
  }

  return (
    <div className="App">
      <h1>Crud Movies Reviews</h1>
      <div className="card">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <div style={{
            width: "100%"
          }}>
            <label style={{float: "left"}}>Nome do filme:</label>
            <input style={{width: "100%"}} type="text" value={movieName} onChange={(e) => setMovieName(e.target.value)}/>
          </div>

          <div>
            <label style={{float: "left"}}>Review do filme:</label>
            <textarea style={{width: "100%"}} rows={5} value={movieReview} onChange={(e) => setMovieReview(e.target.value)}/>
          </div>

          <button onClick={handleSubmit}>Enviar resenha</button>
        </div>

        <p>
          Coded by <code><a href="https://github.com/luksdev">leduxdev</a></code>
        </p>
      </div>
      <p className="read-the-docs">
        <a href="http://localhost:5173">
          Click here to view all reviews
        </a>
      </p>
    </div>
  )
}

export default App
