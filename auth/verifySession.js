const { renderFile } = require('ejs');
const jwt = require('jsonwebtoken');

const verifySession = (req, res, next)=>{
 let token = req.session.user;
 if (!token) 
 return res.status(403).send({ auth: false, message: 'No token provided.' });
 
 jwt.verify(token, 'supersecret', function(err, decoded) {
  if (err) return res.redirect('login');
  next();
 });
}

module.exports = verifySession;