import { v4 as uuid4 } from "uuid";
import User from "../models/users.js";
import registerValidation from "../validations/users.js";
import bcrypt from "bcrypt";
export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json({ users, success: true });
};

export const createUser = async (req, res) => {
  const user = req.body;
  // validate data
  const validation = null;
  try {
    await registerValidation(user);
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }

  try {
    const uuid = uuid4();
    const model = new User(user);
    user.password = bcrypt.hash(user.password, 10);
    await model.save();
    res.json({ message: "User added", success: true });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getUserWithId = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({id: id},{password: 0});    
    return res.send({ user, success: true });
  } catch (error) {
    return res.status(404).json({
      error: "User not found",
    });
  }
};

export const deleteUserWithId = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.send({ message: `User removed with ${id}`, success: true });
};

export const updateUserWithId = async (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, age } = req.body;
  const user = await User.findById(id);

  if (firstname) user.firstname = firstname;

  if (lastname) user.lastname = lastname;

  if (age) user.age = age;

  await user.save();

  res.send({ message: `User updated with ${id}`, success: true });
};
