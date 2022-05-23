const User = require("../models/user.model");
const bcrypt = require("bcrypt");

module.exports = {
  register: async (req, res, next) => {
    try {
      const { name, username, email, password } = req.body;
      const userCheck = await User.find({ username: username });
      if (userCheck) {
        return res.json({ msg: "username already exist" });
      }
      const emailCheck = await User.find({ email: email });
      if (emailCheck) {
        return res.json({ msg: "username already exist" });
      }
      const hash = await bcrypt.hash(password, 10);
      const user = await User.create({
        name,
        username,
        email,
        password: hash,
      });
      delete user.password;
      return res.json({ status: "true", user });
    } catch (err) {
      next(err);
    }
  },
};
