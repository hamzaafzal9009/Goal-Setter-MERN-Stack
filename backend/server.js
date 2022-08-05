const express = require('express')
const devenv = require('dotenv').config()


const port = process.env.PORT || 5000

const app = express()


app.get('/api/goals', (req, res) =>  {
    res.status(200).json({message : "Getting goals..."})
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});