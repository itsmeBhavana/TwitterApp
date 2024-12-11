import bcrypt from "bcryptjs";
import {
  findUserByEmail as findUserByEmailRepository,
  createUser as createUserRepository,
} from "../repositories/userRepository.js";
import { generateToken } from "../utils/jwtUtils.js";

export const registerUser = async ({ username, email, password }) => {
  const existingUser = await findUserByEmailRepository(email);
  if (existingUser) {
    throw {
      message: "Email is already in use",
      status: 400,
    };
  }
  //create the user
  const user = await createUserRepository({ username, email, password });
  return user;
};

export const loginUser = async ({ username, email, password }) => {
  const user = await findUserByEmailRepository(email);
  if (!user) {
    throw {
      message: "Invalid Email or Password",
      status: 400,
    };
  }
  const isPasswordValid = await bcrypt.compareSync(password, user.password);
  if (!isPasswordValid) {
    throw {
      message: "Invalid Email or Password",
      status: 400,
    };
  }
  const token = generateToken(user);
  return {
    token,
    user: { id: user._id, email: user.email, username: user.username },
  };
};
