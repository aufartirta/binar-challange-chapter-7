const notFoundhandler = (req,res,next) =>{
    res.status(403).json({
        status : "failed",
        error : "Looking for something?"
    });
};

module.exports = notFoundhandler;