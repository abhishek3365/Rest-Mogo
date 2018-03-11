const mongoose = require('mongoose');

var User = mongoose.model('User');

exports.getAllUsers = (req,res) => {

  User.find( {} , (err, user) => {
    if(err){
      return res.status(404).send(err);
    }
    res.status(200).send(user);
  });

};

exports.createUser = (req,res) => {

  var new_user = new User(req.body);
  new_user.save( ( err , user ) => {
    if(err){
      return res.status(404).send(err);
    }
    res.status(200).send(user);
  } );

}

exports.getUser = (req,res) => {

  User.findById( req.params.taskId , (err, user) => {
    if(err){
      return res.status(404).send(err);
    }
    res.status(200).send(user);
  });

};

exports.updateUser = (req, res) => {

  User.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, (err, user) => {
    if(err){
      return res.status(404).send(err);
    }
    res.status(200).send(user);
  });

};


exports.deleteUser = (req, res) => {

  Task.remove({
    _id: req.params.taskId
  }, (err, user) => {

    if(err){
      return res.status(404).send(err);
    }
    res.status(200).json({ message: 'Task successfully deleted' });

  });

};
