const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    console.log(req.body);

    let user = await User.findOne({ email });

    console.log('User ', user);

    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  }
};
