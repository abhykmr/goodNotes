import User from "../models/userModel.js";
import { errorHandler } from "../utils/error.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // ✅ Validate input fields
    if (!username || !email || !password) {
      return next(errorHandler(400, "All fields are required!"));
    }

    // ✅ Check if the user already exists
    const isValidUser = await User.findOne({ email });
    if (isValidUser) {
      return next(errorHandler(400, "User already exists!"));
    }

    // ✅ Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create user in the database
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    // ✅ Send a success response
    res.status(201).json({
      success: true, // Fix: Replaced `message: true` with `success: true`
      message: "User created successfully!",
    });
  } catch (err) {
    next(err);
  }
};
