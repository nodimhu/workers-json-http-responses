import { _createResponseClass } from "./_factory";

// Only responses which would make sense with a JSON body are implemented.
// Responses that imply server state are also not implemented, and neither are
// redirection responses.

export const HttpOKResponse = _createResponseClass(200, "OK");
export const HttpCreatedResponse = _createResponseClass(201, "Created");

export const HttpBadRequestResponse = _createResponseClass(400, "Bad Request");
export const HttpUnauthorizedResponse = _createResponseClass(401, "Unauthorized");
export const HttpForbiddenResponse = _createResponseClass(403, "Forbidden");
export const HttpNotFoundResponse = _createResponseClass(404, "Not Found");
export const HttpMethodNotAllowedResponse = _createResponseClass(
  405,
  "Method Not Allowed",
);
export const HttpConflictResponse = _createResponseClass(409, "Conflict");
export const HttpTooManyRequestsResponse = _createResponseClass(
  429,
  "Too Many Requests",
);

export const HttpInternalServerErrorResponse = _createResponseClass(
  500,
  "Internal Server Error",
);
