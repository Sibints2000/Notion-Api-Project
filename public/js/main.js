const videosEl = document.querySelector('#videos');
const loadingEl = document.querySelector('#loading');
let loading = false

const getVideosFromBackend = async () => {
    loading = true
    const res = await fetch('hhtp://localhost:5000/videos')
    const data = await res.json()
    loading = false 
    return data
}

const addVideosToDom = async () => {
    const videos = await getVideosFromBackend()
    
    if(!loading) {
        loadingEl.innerHTML = ''
    }
}

addVideosToDom()
