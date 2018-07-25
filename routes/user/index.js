import express from 'express';
import {signup, userLogin, updateUsers, deleteUsers, getUser, getUserById} from "./user.controller"
export let router = express.Router();
import {verifyToken} from '../../utils/verify.token';

router.post('/login', userLogin)
router.get('/getuser', getUser)
router.post('/', signup)
// router.put('/:userId',verifyToken, updateUsers)
router.put('/:userId', updateUsers)
router.delete('/:userId', deleteUsers)
router.get('/getUserById/:userId', getUserById)

export default  router
