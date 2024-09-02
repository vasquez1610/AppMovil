const userController = require('../controller/usersController');
module.exports = (app) => {
    app.post('/api/users/create', userController.register);
    app.post('/api/user/login', userController.Login);
}