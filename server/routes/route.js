const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const userController = require('../controllers/userController');
const productController = require('../controllers/productController');

//User Routes
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/user/:userId', mainController.allowIfLoggedin, userController.getUser);
router.get('/users', mainController.allowIfLoggedin, mainController.grantAccess('readAny', 'profile'), userController.getUsers);
router.put('/user/:userId', mainController.allowIfLoggedin, mainController.grantAccess('updateAny', 'profile'), userController.updateUser);
router.delete('/user/:userId', mainController.allowIfLoggedin, mainController.grantAccess('deleteAny', 'profile'), userController.deleteUser);

//Product Routes
router.post('/addproduct', productController.addproduct);
router.get('/products', productController.getproducts);
router.get('/search/:key', productController.searchproduct);

module.exports = router;
