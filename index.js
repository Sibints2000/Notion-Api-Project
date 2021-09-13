const getVideos = require('./services/notion')

;(async () => {
    const nVideoes = await getVideos()
    console.log(nVideoes);
})()


