const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/EJ-SPorts', {
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

const Users = mongoose.model('Users', userSchema);

app.get('/api/users', async (req, res) => {
  try {
    let users = await Users.find();
    res.send({ users: users });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/user', async (req, res) => {
  const userEmail = req.query.email;
  const userPassword = req.query.password;
  try {
    let user = await Users.findOne({ email: userEmail, password: userPassword });
    console.log(user);
    res.send({ user: user });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/user', async (req, res) => {
  const user = new Users({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  try {
    emailRegistered = await Users.find({ email: req.body.email }).count();
    if (emailRegistered > 0) {
      res.send({ error: "email already registered" });
    } else {
      await user.save();
      console.log(user);
      res.send({ user: user });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/user/update', async (req, res) => {
  const changes = getChanges(req.body.changes);
  const user = {
    name: req.body.user.name,
    email: req.body.user.email,
    password: req.body.user.password
  };
  console.log(user, changes);
  if (changes) {
    try {
      const changed = await Users.findOneAndUpdate(user, changes, { returnOriginal: false });
      console.log(changed);
      res.send({ user: changed });
    } catch (error) {
      res.sendStatus(500);
    }
  }
});

const getChanges = (changes) => {
  switch (changes.type) {
    case 'name':
      return { name: changes.value };
    case 'password':
      return { password: changes.value };
    case 'email':
      return { email: changes.value };
  }
};

app.delete('/api/user', async (req, res) => {
  try {
    await Users.deleteOne({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/users', async (req, res) => {
  try {
    await Users.deleteMany({});
    res.sendStatus(200);

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3001, () => console.log('Server listening on port 3001!'));