const mongoose = require('mongoose')
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        console.error('connect successfully')
    }
    catch (err) {
        console.error(err +'connect fail')
    }
}

module.exports = {connect };