const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/test', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

userSchema.virtual('id')
  .get(function() {
    return this._id.toHexString();
  });
  
userSchema.set('toJSON', {
  virtuals: true
});

const User = mongoose.model('User', userSchema);

app.get('/api/users', async (req, res) => {
  try {
    let users = await User.find();
    res.send({users: users});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


app.post('/api/users', async (req, res) => {
    const user = new User({
    name: req.body.name,
    email: req.body.email,
    password:req.body.password
  });
  try {
    await user.save();
    res.send({user:user});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/users/:id', async (req, res) => {
  try {
    await User.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));