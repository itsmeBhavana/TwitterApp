import { StatusCodes } from "http-status-codes";

export const errorResponse = (res, error) => {
  console.log(error);
  if (error.status) {
    return res.status(error.status).json({
      message: error.message,
      success: false,
    });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    message: "Internal Server Error",
    success: false,
  });
};

export const successResponse = (res, data, statusCode, message) => {
  return res.status(statusCode).json({
    message,
    data,
    success: true,
  });
};
