// Special case, does not have a body.

import { _createResponseClass } from "./_factory";

export class HttpNoContentResponse extends _createResponseClass(204, "No Content") {
  constructor(init: ResponseInit = {}) {
    super(null, {
      ...init,
      headers: { ...init.headers, "content-length": "0" },
    });
    this.headers.delete("content-type");
  }
}
