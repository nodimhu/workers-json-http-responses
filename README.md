# JSON HTTP responses for Cloudflare Workers

This packages aims to make it simple and concise to return JSON HTTP responses from within a Cloudflare Workers function.

## Features

- The response classes automatically serialize objects and strings to JSON.
- Only objects or strings are allowed as top-level types.
- Status codes and status texts are standardized and enforced by the respective response classes.
- The default body is the respective status text for all responses including "OK" and excluding 204 No Content, which doesn't have a body.
- Responses are extendable through `ResponseInit`, except `status`, `statusText` and `header['content-type']`, which are enforced and will throw if attempting to instantiate with a different status or content-type.
- Additionally a No Content response enforces `header['content-length']` to `'0'` and body to `null`.

## Example

TODO

## License

Copyright 2023 Zsolt Nagy

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
