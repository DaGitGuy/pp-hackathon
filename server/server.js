const express = require('express');
const app = express(); // instance of express
const fs = require('fs');


const cors = require('cors');

app.use(express.json());

app.use(cors());


//A post request that will deliver articles back to user
app.post("/", (req, res) => {

    const articles = req;
    
    // fs.writeFileSync('./articles.json', JSON.stringify(articles));

    res.status(201).json(articles);

})


app.listen(5050, () => {
    console.log('🚀 Server listening on 5050');
  });