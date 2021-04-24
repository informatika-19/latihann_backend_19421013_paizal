const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    //username: String
    username: {
        default: '',
        type: String
    },
    password: {
        default: '',
        type: String
    },
    namaLengkap: {
        default: '',
        type: String
    },
    alamat: {
        default: '',
        type: String
    }
})

module.exports = mongoose.model('user', UserSchema)