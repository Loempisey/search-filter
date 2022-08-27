const controllers = require('./../controllers/user.controller')
module.exports = (app)=>{
    app.use((req, res, next) => {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next(); 
      });
    app.post('/api/v1/user', controllers.createUser)
    app.get('/api/v1/user',controllers.getUser)
    app.delete('/api/v1/user/:id', controllers.deleteUser)
    app.put('/api/v1/user/:id', controllers.updateUser)
}
