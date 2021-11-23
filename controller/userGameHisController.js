const models = require('../models')

module.exports ={
    getAll : async (req,res) =>{
        const allUserGameHis =  await module.exports.findAllUserGameHistoryHistory();
   
        res.render('user-game-his/user-game-his',{userGameHis : allUserGameHis });
    },

    findAllUserGameHistoryHistory : () =>{
        try {
            return models.UserGameHis.findAll({});   
        } catch (error) {
            console.log(error);
        }
    },

    userGameHistoryAdd:(req,res)=>{
        res.render('user-game-his/add');
    },

    userGameHistoryEdit : (req,res)=>{
        models.UserGameHis.findByPk(req.params.id).then((userGameHis)=>{
            res.render('user-game-his/edit',{userGameHis});
        });
    },

    userGameHistoryPost : (req,res) =>{
        models.UserGameBio.create({
            nama: req.body.nama,
            umur: req.body.umur,
            hobi: req.body.hobi
        })
        .then(user => {
            res.redirect('/dashboard/user-game-his');
    
        })
        .catch(error => {
          console.log(error);
            res.redirect('/dashboard/user-game-his/add');
        });
    },

    userGameHistoryEditPut : (req,res) =>{
        models.UserGameBio.update(req.body, {
        where:{
            id:req.params.id
          }
        }).then((user) => {
          res.redirect('/dashboard/user-game-his')
        })
    },

    deleteUserHistoryGame :(req,res) =>{
        models.UserGameHis.destroy({
        where:{
            id:req.params.id
        }
        }).then((user) => {  
            res.send({ msg: "Success" });
        })
    }


}