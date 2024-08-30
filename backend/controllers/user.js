const user_model = require("../models/user.js");
const bcrypt = require("bcryptjs");
const { setRecord, getRecord } = require("../auth/tokenHandle.js");

const { sendCode, verifyCode } = require("../auth/emailVerify.js");

const preSignup = async (req, res) => {
  const { email, username } = req.body;

  try {
    const dupUser = await user_model.findOne({
      $or: [{ email: email }, { username: username }],
    });

    if (dupUser) {
      const dupField = dupUser.email === email ? "email" : "username";
      res.status(409).send(dupField);
    } else {
      sendCode(email);
      console.log("email sent");
      res.sendStatus(200);
    }
  } catch (error) {
    res.sendStatus(500);
  }
};

const signup = async (req, res) => {
  const { email, username, password, code } = req.body;
  
  if (verifyCode(email, code)) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const joinDate = new Date().toLocaleDateString();
    const about = `Joined on ${joinDate}`;

    const newUser = new user_model({
      email: email,
      username: username,
      password: hashedPassword,
      about: about,
    });
    try {
      await newUser.save();
      res.cookie("sID", setRecord(username), {
        httpOnly: true, // Helps prevent cross-site scripting (XSS) attacks
        secure: false, // Set to true if you're using HTTPS
        sameSite: "Lax", // Controls when cookies are sent (use 'None' for cross-site requests)
      });
      res.sendStatus(201); //new account created
    } catch (error) {
      res.sendStatus(500);
    }
  } else{
    res.sendStatus(400) //incorrect verification code
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await user_model.findOne({ username: username });
    if (!user) {
      return res.sendStatus(404); //user does not exist
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      res.cookie("sID", setRecord(username), {
        httpOnly: true,
        secure: false,
        sameSite: "Lax",
      });
      return res.sendStatus(200); //correct password
    } else {
      return res.sendStatus(401); //wrong password
    }
  } catch (error) {
    return res.sendStatus(500); //internal server error
  }
};

const allowIfCookie = (req, res) => {
  const sID = req.cookies.sID;
  const username = getRecord(sID);
  if (username) {
    return res.status(200).json({ username: username });
  }
  res.sendStatus(404);
};

module.exports = { preSignup, signup, login, allowIfCookie };
