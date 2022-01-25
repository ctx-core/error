import type { error_ctx_I } from './_types'
import type { HttpError } from './throw_http_error'
/**
 * Throws an unauthorized error (HTTP 401)
 * @example
 * throw__unauthorized(ctx) // Unauthorized
 */
export declare function throw_unauthorized(...error_ctx_a:error_ctx_I[]):void;
export declare function unauthorized_error_(error_ctx?:error_ctx_I):UnauthorizedError;
export declare class UnauthorizedError extends HttpError {}
export { throw_unauthorized as throw__unauthorized }
