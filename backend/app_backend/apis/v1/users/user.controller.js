"use strict";

let userModel = require("./user.model");
var service = require("../../../services/app.services");
var jwt = require("../../../services/jwtHelper.service");
var errHandler = require("../../../util/errorHandler");
var helper = require("../../../util/helper");

const register = async (req, res) => {
  try {
    let {
      email,
    } = req.body;
    let obj = {};
    let Errors = [];
    let exist = await userModel.findOne({ email: email });
    if (exist && exist._id) {
      return res.status(409).json({
        status: 0,
        message: "Email is already in use!",
      });
    }
    // if (!account_type || account_type == "") {
    //   return res.status(400).json({
    //     status: 0,
    //     message: "account_type  field missing for admin:0/customer:1",
    //   });
    // }
      for (let [key, value] of Object.entries(req.body)) {
        
          if (!value && value == "") {
            Errors.push({ name: key, message: key + "is required" });
          }
        
      }
      if (Errors.length != 0) {
        return res.status(400).json({
          Errors,
        });
      }
  
        obj = {
          ...req.body,
          email: email.toLowerCase()
          }
    const user = new userModel(obj);
    let result = await user.save();
    return res.status(200).json({
      status: 1,
      message: "User Register Successfully",
    });
  } catch (err) {
    let error = errHandler.handle(err);
    return res.status(403).json({
      status: 0,
      message: error,
    });
  }
};

const auth = async (req, res) => {
  try {
    let { email, password, device_token } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }
    let result = await userModel.findOne({
      email: req.body.email.toLowerCase(),
    });
    if (result && result._id) {
      let compare_result = await service.comparePassword(
        req.body.password,
        result.password
      );

      let token = await jwt.generateToken(
        {
          id: result._id,
          email: result.email.toLowerCase(),
        },
        "login"
      );
      await userModel.updateOne(
        {
          _id: result._id,
        },
        {
          $set: {
            accessToken: token,
            device_token: device_token,
          },
        },
        {
          runValidators: true,
        }
      );
      if (compare_result && token) {
        var finalData = JSON.stringify(result);
        finalData = JSON.parse(finalData);
        delete finalData["password"];
        // delete finalData["_id"];
        delete finalData["creationDate"];
        delete finalData["__v"];
        Object.assign(finalData, { accessToken: token });
        // firebaseService.sendNotification(device_token);
        return res.status(200).json({
          status: true,
          message: "login successfully",
          data: finalData,
        });
      } else {
        return res.status(404).json({
          status: false,
          message: "Invalid Creditials",
        });
      }
    }
    return res.status(404).json({
      message: "Email is not registered please visit registration page",
    });
  } catch (err) {
    let error = errHandler.handle(err);
    return res.status(500).json(error);
  }
};

const forget = async (req, res) => {
  try {
    let { update_password ,mobile} = req.body;
    let Update = await userModel.findOne({
      mobile:mobile,
    });
    Update.password = update_password;
    await Update.save().then(() => {
      return res.status(200).json({
        status: true,
        message: "Password update successfully",
      });
    });

  } catch (error) {
    return res.status(500).json(error);
  }
};

const user_info = async (req, res) => {
  try {
    var finalData = JSON.stringify(req.user);
    finalData = JSON.parse(finalData);
    delete finalData["password"];
    delete finalData["_id"];
    delete finalData["creationDate"];
    delete finalData["__v"];
    return res.status(200).json({
      status: true,
      message: "Authenticated",
      data: finalData,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const logout = async (req, res) => {
  try {
    let Update = await userModel.findOne({
      email: req.user.email.toLowerCase(),
    });
    Update.accessToken = "";
    Update.device_token = "";
    await Update.save().then(() => {
      return res.status(200).json({
        status: true,
        message: "Logout Successfully",
      });
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const delete_account = async (req, res) => {
  try {
    let User = await userModel.findOne({
      email: req.user.email.toLowerCase(),
    });
    await User.remove();
    return res.status(200).json({
      status: true,
      message: "Your'e Account Deleted Permanently",
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const validate_forgetlink = async (req, res) => {
  try {
    let user = await userModel.findOne({
      reset_password_token: req.body.reset_token,
    });
    if (user) {
      let result = await jwt.verifyToken(req.body.reset_token);
      if (result.message == "jwt expired") {
        return res.status(401).json({
          message: "Password reset link has expired",
        });
      } else {
        user.reset_password_token = "";
        await user.save().then(() => {
          return res.status(200).json({
            message: "Token Verified",
          });
        });
      }
    } else {
      return res.status(401).json({
        message: "Password reset link has expired or already used",
      });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};
const validate_token = async (req, res) => {
  try {
    let user = await userModel.findOne({
      accessToken: req.body.token,
    });
    if (user) {
      let result = await jwt.verifyToken(req.body.token);
      if (result.message == "jwt expired") {
        return res.status(401).json({
          status: false,
          message: "Access Token has expired",
        });
      } else {
        user.accessToken = "";
        await user.save().then(() => {
          return res.status(200).json({
            status: true,
            message: "Token Verified",
          });
        });
      }
    } else {
      return res.status(401).json({
        message: "Access Token Not found",
      });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};
const update_password = async (req, res) => {
  try {
    let { update_password, current_password } = req.body;
    let compare_result = await service.comparePassword(
      current_password,
      req.user.password
    );
    if (compare_result) {
      if (update_password == current_password) {
        return res.status(409).json({
          message: "You typed an old password",
        });
      } else {
        let Update = await userModel.findOne({
          email: req.user.email,
        });
        Update.password = update_password;
        await Update.save().then(() => {
          return res.status(200).json({
            status: true,
            message: "Password update successfully",
          });
        });
      }
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

const verify_password = async (req, res) => {
  try {
    let compare_result = await service.comparePassword(
      req.body.password,
      req.user.password
    );
    if (compare_result) {
    return res.status(200).json({
        status: true,
        message: "Password verified",
      });
    }
    return res.status(401).json({
      status: false,
      message: "You typed the wrong password ",
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

let getUserProfile = async (req, res) => {
  try {
    let result = await userModel.findOne(
      { _id: req.user._id },
      { accessToken: 0, isApproved: 0, password: 0, terms: 0 }
    );
    return res.status(200).json({ data: result, message: "User Profile" });
  } catch (error) {
    return res.status(500).json({ message: "unexpected error", error: error });
  }
};




let getAllUsers = async (req, res) => {
  try {
      let result = await userModel.find({})
      return res.status(200).json({
        status: true,
        data: result,
        totalResults: totalResults,
        message: "Users",
      });
 
  
  } catch (error) {
    return res.status(500).json({ message: "unexpected error", error: error });
  }
};


module.exports = {
  register: register,
  auth: auth,
  forget: forget,
  user_info: user_info,
  verify_password: verify_password,
  logout: logout,
  delete_account: delete_account,
  validate_forgetlink: validate_forgetlink,
  validate_token: validate_token,
  update_password: update_password,
  getAllUsers: getAllUsers,
  getUserProfile: getUserProfile
};

// "use strict";

// let userModel = require("./user.model");
// var service = require("../../../services/app.services");
// var jwt = require("../../../services/jwtHelper.service");
// var errHandler = require("../../../util/errorHandler");
// var helper = require("../../../util/helper");

// const register = async (req, res) => {
//   try {
//     let { email, password, ...otherFields } = req.body;
//     let Errors = [];

//     // Validate email and password
//     if (!email) {
//       Errors.push({ name: "email", message: "Email is required" });
//     }
//     if (!password) {
//       Errors.push({ name: "password", message: "Password is required" });
//     }

//     // Validate other required fields
//     for (let [key, value] of Object.entries(otherFields)) {
//       if (!value || value.trim() === "") {
//         Errors.push({ name: key, message: `${key} is required` });
//       }
//     }

//     if (Errors.length !== 0) {
//       return res.status(400).json({
//         status: 0,
//         message: "Validation errors",
//         errors: Errors,
//       });
//     }

//     // Check if the email already exists
//     let exist = await userModel.findOne({ email: email.toLowerCase() });
//     if (exist) {
//       return res.status(409).json({
//         status: 0,
//         message: "Email is already in use!",
//       });
//     }

//     // Create and save the new user
//     const newUser = new userModel({
//       ...otherFields,
//       email: email.toLowerCase(),
//       password: await service.hashPassword(password),
//     });

//     let result = await newUser.save();

//     return res.status(201).json({
//       status: 1,
//       message: "User registered successfully",
//       data: {
//         id: result._id,
//         email: result.email,
//       },
//     });
//   } catch (err) {
//     let error = errHandler.handle(err);
//     return res.status(500).json({
//       status: 0,
//       message: error || "An error occurred during registration",
//     });
//   }
// };

// const auth = async (req, res) => {
//   try {
//     let { email, password, device_token } = req.body;
//     if (!email || !password) {
//       return res.status(400).json({
//         status: false,
//         message: "All fields are required",
//       });
//     }
//     let result = await userModel.findOne({ email: email.toLowerCase() });
//     if (result && result._id) {
//       let compare_result = await service.comparePassword(password, result.password);

//       let token = await jwt.generateToken(
//         {
//           id: result._id,
//           email: result.email.toLowerCase(),
//         },
//         "login"
//       );

//       if (compare_result && token) {
//         await userModel.updateOne(
//           { _id: result._id },
//           {
//             $set: {
//               accessToken: token,
//               device_token: device_token,
//             },
//           },
//           { runValidators: true }
//         );

//         var finalData = JSON.stringify(result);
//         finalData = JSON.parse(finalData);
//         delete finalData["password"];
//         delete finalData["creationDate"];
//         delete finalData["__v"];
//         Object.assign(finalData, { accessToken: token });

//         return res.status(200).json({
//           status: true,
//           message: "Login successfully",
//           data: finalData,
//         });
//       } else {
//         return res.status(401).json({
//           status: false,
//           message: "Invalid credentials",
//         });
//       }
//     }
//     return res.status(404).json({
//       message: "Email is not registered, please visit registration page",
//     });
//   } catch (err) {
//     let error = errHandler.handle(err);
//     return res.status(500).json(error);
//   }
// };

// const forget = async (req, res) => {
//   try {
//     let { update_password, mobile } = req.body;
//     let Update = await userModel.findOne({ mobile });
//     if (!Update) {
//       return res.status(404).json({
//         status: false,
//         message: "User not found with the given mobile number",
//       });
//     }
//     Update.password = await service.hashPassword(update_password);
//     await Update.save();

//     return res.status(200).json({
//       status: true,
//       message: "Password updated successfully",
//     });
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// };

// const user_info = async (req, res) => {
//   try {
//     var finalData = JSON.stringify(req.user);
//     finalData = JSON.parse(finalData);
//     delete finalData["password"];
//     delete finalData["_id"];
//     delete finalData["creationDate"];
//     delete finalData["__v"];
//     return res.status(200).json({
//       status: true,
//       message: "Authenticated",
//       data: finalData,
//     });
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// };

// const logout = async (req, res) => {
//   try {
//     let Update = await userModel.findOne({ email: req.user.email.toLowerCase() });
//     if (!Update) {
//       return res.status(404).json({
//         status: false,
//         message: "User not found",
//       });
//     }
//     Update.accessToken = "";
//     Update.device_token = "";
//     await Update.save();

//     return res.status(200).json({
//       status: true,
//       message: "Logout successfully",
//     });
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// };

// const delete_account = async (req, res) => {
//   try {
//     let User = await userModel.findOne({ email: req.user.email.toLowerCase() });
//     if (!User) {
//       return res.status(404).json({
//         status: false,
//         message: "User not found",
//       });
//     }
//     await User.remove();

//     return res.status(200).json({
//       status: true,
//       message: "Your account has been deleted permanently",
//     });
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// };

// const validate_forgetlink = async (req, res) => {
//   try {
//     const { token } = req.query;
//     const isValid = await jwt.validateToken(token);
//     if (isValid) {
//       return res.status(200).json({
//         status: true,
//         message: "Token is valid",
//       });
//     }
//     return res.status(400).json({
//       status: false,
//       message: "Invalid or expired token",
//     });
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// };

// const validate_token = async (req, res) => {
//   try {
//     const { token } = req.body;
//     const isValid = await jwt.validateToken(token);
//     if (isValid) {
//       return res.status(200).json({
//         status: true,
//         message: "Token is valid",
//       });
//     }
//     return res.status(400).json({
//       status: false,
//       message: "Invalid or expired token",
//     });
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// };

// const update_password = async (req, res) => {
//   try {
//     let { old_password, new_password } = req.body;
//     let user = await userModel.findById(req.user._id);
//     let isMatch = await service.comparePassword(old_password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({
//         status: false,
//         message: "Old password does not match",
//       });
//     }
//     user.password = await service.hashPassword(new_password);
//     await user.save();
//     return res.status(200).json({
//       status: true,
//       message: "Password updated successfully",
//     });
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// };

// const verify_password = async (req, res) => {
//   try {
//     const { password } = req.body;
//     const user = await userModel.findById(req.user._id);
//     const isMatch = await service.comparePassword(password, user.password);
//     return res.status(200).json({
//       status: isMatch,
//       message: isMatch ? "Password is correct" : "Password is incorrect",
//     });
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// };

// let getUserProfile = async (req, res) => {
//   try {
//     let user = await userModel.findById(req.user._id);
//     if (!user) {
//       return res.status(404).json({
//         status: false,
//         message: "User not found",
//       });
//     }
//     let profile = user.toObject();
//     delete profile.password;
//     return res.status(200).json({
//       status: true,
//       message: "User profile retrieved",
//       data: profile,
//     });
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// };

// let getAllUsers = async (req, res) => {
//   try {
//     let result = await userModel.find({});
//     return res.status(200).json({
//       status: true,
//       data: result,
//       message: "Users",
//     });
//   } catch (error) {
//     return res.status(500).json({ message: "Unexpected error", error });
//   }
// };

// module.exports = {
//   register,
//   auth,
//   forget,
//   validate_token,
//   update_password,
//   user_info,
//   logout,
//   validate_forgetlink,
//   delete_account,
//   verify_password,
//   getUserProfile,
//   getAllUsers,
// };