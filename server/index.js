import express from "express";
import mysql from 'mysql';
import cors from "cors"

const app = express();
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'password',
   database: 'library_movies'
})

db.connect(() => console.log("Connected to database"))

app.get("/getReviews", (req, res) => {
   db.query("SELECT * FROM movies_reviews", (err, result) => {
      res.send(result)
   })
})

app.post("/insertReview", (req, res) => {
   console.log(req.body)

   db.query(`INSERT INTO movies_reviews (movieName, movieReview) VALUES ("${req.body.movieName}", "${req.body.movieReview}")`, () => {
      res.send("Inserted!")
   })
})

app.listen(3001, () => {
   console.log('Server started on port 3001');
})