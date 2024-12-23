var admin = require("firebase-admin");

var serviceAccount = require("../middlewares/returnbeez-2021-firebase-adminsdk-ycux7-2233e0aae7.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin