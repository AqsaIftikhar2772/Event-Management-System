import mongoose from 'mongoose'

const dbConfig = () => {
    mongoose.connect(process.env.MONGODB_LOCAL)
    .then(conn => console.log(`successfully connected with ${conn.connection.host}`))
    .catch(err => console.log(`something went wrong ${err.message}`))
}

export default dbConfig;