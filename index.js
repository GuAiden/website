const express = require("express");
const cors = require("cors"); 
const app = express();
const pool = require("./db");


// Middleware 
app.use(cors());
app.use(express.json());

// ROUTES
app.post("/posts", async(req, res) => {
    try {
        const {description} = req.body; 
        const newPost = await pool.query(
            "INSERT INTO post (description) VALUES($1) RETURNING * ",
            [description]
        );
        console.log(req.body);
    } catch (err) {
        console.error(err.message);
    }
})



app.listen(5000, () => {
    console.log("server has started on port 5000");
}); 

