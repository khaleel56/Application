const express= require('express');
const router = express.Router();

const Controller = require('./Controller/userController')

//routing pages
console.log('Routing page')

router.get("/", Controller.getHomePage);
router.get('/getUserslist', Controller.getUsersList);


router.get('/getUserDetails/:search', Controller.getUserDetails);

 router.post('/createUserData', Controller.createUserData);


module.exports = router
