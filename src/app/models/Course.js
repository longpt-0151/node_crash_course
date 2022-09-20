const mongoose = require('mongoose');
mongoose.set('debug', true);
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema({
    name : {type: String, required : true ,maxLength: 255},
    description : {type: String, required : true},
    image : {type: String},
    videoId : {type: String, required : true},
    level : {type: String},
    slug : {type: String, slug: 'name', unique: true},
    deleteAt : {type: Date},
}, {
    timestamps : true,
});

// add plugin
// add slug
mongoose.plugin(slug);
// add deleteAt plugin
Course.plugin(mongooseDelete, {
    deletedAt : true,
    overrideMethods : 'all',
})

module.exports = mongoose.model('Course',Course);