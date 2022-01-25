import type { error_ctx_I } from './_types'
import type { HttpError } from './throw_http_error'
/**
 * Throws a Not Found error (HTTP 401)
 * @example
 * throw_not_found(error_ctx) // Not Found
 */
export declare function throw_not_found(...error_ctx_a:error_ctx_I[]):void;
export declare function not_found_error_(error_ctx?:error_ctx_I):NotFoundError;
export declare class NotFoundError extends HttpError {}
export { throw_not_found as throw__not_found }
