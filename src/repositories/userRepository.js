import User from "../schema/user.js";

export const createUser = async ({ username, email, password }) => {
  try {
    const user = await User.create({ username, email, password });
    return user;
  } catch (error) {
    throw error;
  }
};

export const findUserByEmail = async (email) => {
  try {
    console.log(email);
    const user = await User.findOne({ email });
    console.log(user);
    return user;
  } catch (error) {
    throw error;
  }
};
