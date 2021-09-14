const videosEl = document.querySelector('#videos');
const loadingEl = document.querySelector('#loading');
let loading = false

const getVideosFromBackend = async () => {
    loading = true
    const res = await fetch('hhtp://localhost:5000/videos')
}