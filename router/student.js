const express = require('express');
const router = express.Router();

const {studentValidRule, valid} = require('../middleware');
const {studentController} = require('../controllers');

/**
 * 
 */
router.post('/signup', studentValidRule.studentValidRule(), valid.validate, studentController.studentSignup);
/**
 * 
 */
router.get('/listing/id', studentController.getListing);
/**
 * 
 */
router.put('/update/:id', studentController.studentUpdate);
/**
 * 
 */
router.delete('/delete/:id', studentController.studentDelete);


module.exports = router