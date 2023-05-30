export function _createResponseClass(statusCode: number, statusText: string) {
  return class extends Response {
    constructor(body: object | string | null = statusText, init: ResponseInit = {}) {
      if (
        (init.status !== undefined && init.status !== statusCode) ||
        (init.statusText !== undefined && init.statusText !== statusText)
      ) {
        throw Error(
          `Response attempted to be created with a status other than ${statusCode} \
${statusText}`,
        );
      }

      super(body && JSON.stringify(body), {
        ...init,
        status: statusCode,
        statusText,
        headers: { "content-type": "application/json", ...init.headers },
      });

      if (this.headers.get("content-type") !== "application/json") {
        throw Error(
          "Response attempted to be created with a content type other than \
'application/json'",
        );
      }
    }
  };
}
