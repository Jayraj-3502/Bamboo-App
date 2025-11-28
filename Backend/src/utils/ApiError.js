export default function ApiError({ res, statusCode = 404, error = "" }) {
  return res.status(statusCode).send({ success: false, error });
}
