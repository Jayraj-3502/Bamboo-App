export default function ApiResponse({ res, statusCode, activityType, data }) {
  return res.status(statusCode).send({ success: true, activityType, data });
}
