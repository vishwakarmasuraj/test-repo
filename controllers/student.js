const {studentModel} = require('../models');
const {constants} = require('../constant/constants');
const {successHandler, errorHandler} = require('../helper/responseHandler');
const bcrypt = require('bcrypt');

const studentSignup = async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, constants.ROUND);
        let user = await new studentModel(req.body);
        await user.save();
        return successHandler(res, 201, constants.CREATE_SUCCESS_MSG); 
    } catch (error) {
        return errorHandler(res, 500, constants.ERR_MSG);   
    };
};

const getListing = async (req, res) => {
    try {
        let _id = req.params.id
        let result = await studentModel.findById({_id: _id});
        if (!result){
            return errorHandler(res, 404, constants.NOT_FOUND)
        }else {
            return successHandler(res, 200, constants.GET_LISTS);
        }
    } catch (error) {
        return errorHandler(res, 500, constants.ERR_MSG);
    };
};

const studentUpdate = async (req, res) => {
    try {
        let _id = req.params.id;
        let user = await studentModel.findByIdAndUpdate(
            _id, 
            {
                $set: req.body
            });
        await user.save()
        return successHandler(res, 200, constants.UPDATE_SUCCESS);
    } catch (error) {
        return errorHandler(res, 500, constants.ERR_MSG);
    };
};

const studentDelete = async (req, res) => {
    try {
        let _id = req.params.id
        await studentModel.findByIdAndRemove({
            _id: _id
        });
        return successHandler(res, 200, constants.DEL_SUCCESS)
    } catch (error) {
        return errorHandler(res, 404, constants.NOT_FOUND);
    }
}

module.exports = {
    studentSignup,
    getListing, 
    studentUpdate,
    studentDelete
};

