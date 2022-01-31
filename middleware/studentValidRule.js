const {body} = require('express-validator');
const {studentModel} = require('../models');


const studentValidRule = () => {
    return [
        body('name').isLength({min: 15}),
        body('lastName'),
        body('email').custom(value => {
            return studentModel.findOne({email: value}).then(data => {
                if (data) {
                    return Promise.reject('Email is already exist');
                }
            })
        }),
        body('password').isLength({min: 8})
    ]
}

module.exports = {studentValidRule};
