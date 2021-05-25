
const monk = require('monk')

let MONGO_URI = "mongodb+srv://user:77472168demon@tbot.px9w8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const db = monk(MONGO_URI)

const database = {
    queue: db.get('queue'),
    active_sessions: db.get('active_sessions')
}

module.exports = database