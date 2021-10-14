const HTTP_CODE = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  SEE_OTHER: 303,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};

MESSAGE_RESP_TEMPS = {
  MSG_SUCCESS: "Successful requiest",
  MSG_AUTH_ERROR: "Wrong user data",
};

const HTTP_PORT = process.env.PORT;
const DB_URL = process.env.MONGO_URL;

const CONNECT_DB_OPTS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = {
  HTTP_CODE,
  HTTP_PORT,
  DB_URL,
  CONNECT_DB_OPTS,
  MESSAGE_RESP_TEMPS,
};
