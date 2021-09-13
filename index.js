const dotenv = require('dotenv').config()
const {Client} = require('@notionhq/client')

// Init client
const notion = new Client({
    auth: process.env.NOTION_TOKEN
})

const da

const getVideos = async () => {
    const payload = {
        path: ``
    }

    const data = await notion.request()
}
