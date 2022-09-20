const Course = require('../models/Course');
const {multipleMongooseToObject} = require('../../util/mongoose');
class MeController {

    // [GET] /me/courses/stored
    show = (req, res, next) => {

        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, countDeleted]) => {
                res.render('me/show', {
                    countDeleted,
                    courses : multipleMongooseToObject(courses)
                })
            })
            .catch(next);
    };

    //[GET] get list deleted course me/courses/trash
    trash = (req, res, next) => {
        Course.findDeleted({ })
            .then(courses => {
                res.render('me/trash', {
                    courses : multipleMongooseToObject(courses)
                })
            })
            .catch(next)
    };


    // [POST] /courses/store

}

module.exports = new MeController();
