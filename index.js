const express = require("express");
const cors = require("cors"); 
const app = express();
const pool = require("./db");
const { Pool } = require("pg");


// Middleware 
app.use(cors());
app.use(express.json());

// ROUTES

// Post a post
app.post("/posts", async(req, res) => {
    try {
        const {description} = req.body; 
        const newPost = await pool.query(
            "INSERT INTO post (description) VALUES($1) RETURNING * ",
            [description]
        );
        console.log(req.body);
        res.json(newPost.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Get all posts

app.get("/posts", async(req, res) => {
    try {
        const allPosts = await pool.query("SELECT * FROM post");
        res.json(allPosts.rows); 
    } catch (err) {
        console.error(err); 
    }
}); 

// Get a post by id 
app.get("/posts/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const post = await pool.query("SELECT * FROM post WHERE post_id = $1", [id]); 
        res.json(post.rows[0]);
    } catch (err) {
        console.error(err.message); 
    }
}); 



app.listen(5000, () => {
    console.log("server has started on port 5000");
}); 

