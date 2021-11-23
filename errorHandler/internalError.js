const internalError = (err,req,res,next) =>{
    res.status(500).json({
        status : "failed",
        error : err.message
    });
};

module.exports = internalError;