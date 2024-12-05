export const validate = (schema) => {
  return async function middleware(req, res, next) {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      return res.status(400).json({
        error: error.errors,
        success: false,
        message: "Validation Failed",
      });
    }
  };
};
