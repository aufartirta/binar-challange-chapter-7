const express = require('express')
const app = express()
const router = express.Router();
const verifyToken = require('../auth/verifyToken')
const roomController = require('../controller/roomController');
const matchController = require('../controller/matchController');
const pathApi = '/api/v1';


router.get(pathApi+'/get-results/:room_name',matchController.getResult);
router.get(pathApi+'/cek',verifyToken,roomController.cek);
router.post(pathApi+'/create-room',roomController.createRoom);
router.post(pathApi+'/join-room/:id',matchController.joinRoom);
router.post(pathApi+'/fight-room/:id',matchController.matchRoom);


module.exports = router;


