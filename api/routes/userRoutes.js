module.exports = (app) => {

  var userController = require('../controller/userController');

  app.route('/user')
    .get(userController.getAllUsers)
    .post(userController.createUser);

  app.route('/user/:userId')
    .get(userController.getUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

}
