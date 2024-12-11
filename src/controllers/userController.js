import { StatusCodes } from "http-status-codes";
import {
  registerUser as registerUserService,
  loginUser as loginUserService,
} from "../services/userService.js";
import { errorResponse, successResponse } from "../utils/responses.js";

export const signInUser = async (req, res) => {
  try {
    const { token, user } = await loginUserService({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    return successResponse(
      res,
      {
        token,
        user: { id: user._id, email: user.email, username: user.username },
      },
      StatusCodes.OK,
      "User successfully logged In"
    );
  } catch (error) {
    return errorResponse(res, error);
  }
};

export const signUpUser = async (req, res) => {
  try {
    const response = await registerUserService({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    return successResponse(
      res,
      response,
      StatusCodes.CREATED,
      "User successfully Signed Up"
    );
  } catch (error) {
    return errorResponse(res, error);
  }
};
