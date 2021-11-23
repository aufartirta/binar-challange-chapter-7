
const express = require('express')
const app = express()
const router = express.Router();
const verifySession = require('../auth/verifySession')
const userGameHisController = require('../controller/UserGameHisController');

router.get('/dashboard/user-game-history',verifySession, userGameHisController.getAll);
router.get('/dashboard/user-game-history/add',verifySession, userGameHisController.userGameHisAdd);
router.post('/dashboard/user-game-history/add',verifySession, userGameHisController.userGameHisPost);
router.get('/dashboard/user-game-history/edit/:id',verifySession, userGameHisController.userGameHisEdit);
router.put('/dashboard/user-game-history/edit/:id',verifySession, userGameHisController.userGameHisEditPut);
router.delete('/dashboard/user-game-history/delete/:id',verifySession, userGameHisController.deleteUserHisGame);


module.exports = router;