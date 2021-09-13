const express = require('express')
const getVideos = require('./services/notion')
const PORT = process.env.PORT || 5000

const app = express()

app.get('/videoes', async(req, res) => {
    const videos 
})

app.listen(PORT, console.log(`Server started on port ${PORT}`))
