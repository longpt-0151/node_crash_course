const Course = require('../models/Course');
const {multipleMongooseToObject} = require('../../util/mongoose');
class MeController {

    // [GET] /me/courses/stored
    show = (req, res, next) => {
        Course.find({})
            .then(courses => {
                res.render('me/show', {
                    courses : multipleMongooseToObject(courses)
                })
            })
            .catch(next)
    };

    //[GET] create a new Course


    // [POST] /courses/store

}

module.exports = new MeController();
