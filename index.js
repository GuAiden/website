const express = require("express");
const cors = require("cors"); 
const app = express();
const pool = require("./db");


// Middleware 
app.use(cors());
app.use(express.json());

// ROUTES
app.post("/todos", async(req, res) => {
    try {
        console.log(req.body);
    } catch (err) {
        console.error(err.message);
    }
})



app.listen(5000, () => {
    console.log("server has started on port 5000");
}); 

