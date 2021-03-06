const { User, Books } = require("../models/user.model");
const bcrypt = require("bcrypt");

module.exports = {
  register: async (req, res, next) => {
    try {
      const { name, username, email, password } = req.body;
      const userCheck = await User.findOne({ username: username });
      if (userCheck) {
        return res.json({ msg: "username already exist" });
      }
      const emailCheck = await User.findOne({ email: email });
      if (emailCheck) {
        return res.json({ msg: "email already exist" });
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
  login: async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username: username });
      if (!user) {
        return res.json({ msg: "User not exist", status: false });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid)
        return res.json({
          msg: "Incorrect Password or username",
          status: false,
        });
      delete user.password;
      return res.json({ status: true, user });
    } catch (err) {
      next(err);
    }
  },
  addBook: async (req, res, next) => {
    try {
      const { bookName, authorName, bookPrice } = req.body;
      const book = await Books.create({
        bookName,
        authorName,
        bookPrice,
      });
      return res.json({ status: true, book });
    } catch (err) {
      next(err);
    }
  },
  getBook: async (req, res) => {
    try {
        const allBooks = await Books.find({})
        return res.json({ status: true, allBooks });
      }
      catch(err){
          console.log(err)
      }
  },
  deleteBook:async(req,res)=>{
      const bookId = req.body.element;
    const data = await Books.findByIdAndDelete(bookId)
    return res.json({status: true})
  },
  updateBook: async(e)=>{
    const bookId = req.body;
    // const data = await Books.findByIdAndUpdate()
    return res.json({status: true})
  }
};
