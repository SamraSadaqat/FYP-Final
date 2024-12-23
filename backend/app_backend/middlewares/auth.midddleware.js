const userModel = require('../apis/v1/users/user.model');
const service = require('../services/jwtHelper.service');


module.exports = {

  validate: async (req, res, next) => {
    //get the token from the header if present
    try {

      let token = req.headers['x-access-token'] || req.headers['authorization'];
      //if no token found, return response (without going to the next middelware)
      if (!token) return res.status(401).json({
        message: "Access denied. No token provided."
      });
      if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
        const decoded = await service.verifyToken(token);
        //if can verify the token, set req.user and pass to next middleware
        let result = await userModel.findOne({
          _id: decoded.id
        }, {
          'reset_expiry': 0
        });

        if (result && result._id) {
          req.user = result;
          return next();
        }
      }
      return res.status(401).json({
        message: "Invalid token."
      });
    } catch (ex) {
      //if invalid token
      return res.status(401).json({
        message: "Invalid token."
      });
    }
  },

  // isCompanyOwner: async (req, res, next) => {
  //   try {
  //     if(req.user.account_type == 'company'){
  //       return next();
  //     }
  //     return res.status(401).json({message: "Invalid token."});
  //   } catch (error) {
  //     return res.status(401).json({message: "Invalid token."});
  //   }
  // }


}