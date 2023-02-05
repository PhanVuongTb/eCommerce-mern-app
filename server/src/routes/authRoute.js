/** @format */

//router object
import express from 'express';

const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post('/register');

//LOGIN || POST
router.post('/login');

//test routes
router.get('/test');

export default router;
