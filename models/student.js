const {Schema, model} = require('mongoose');

const studentModel = new Schema ({
    name: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
}, {timestamps: true});

module.exports = model ('Student', studentModel, 'Student');