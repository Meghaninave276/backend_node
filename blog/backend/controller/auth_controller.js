import User from "../models/auth_model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/* SIGNUP */
export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);
  await User.create({ name, email, password: hashed });

  res.json({ message: "Signup successful" });
};

/* LOGIN */
export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ message: "Wrong password" });

  const token = jwt.sign(
  { id: user._id },
  process.env.JWT_SECRET || "fallback_secret",
  { expiresIn: "1d" }
);

  res.json({ token });
};

/* LOGOUT */
export const logout = (req, res) => {
  res.json({ message: "Logged out" });
};
