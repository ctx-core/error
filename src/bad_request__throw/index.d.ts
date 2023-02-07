import type { error_o_T } from '../_types'
import type { HttpError } from '../http_error__throw'
/**
 * Throws a bad_request error (HTTP 400)
 * @example
 * bad_request__throw(ctx) // Bad Request
 */
export declare function bad_request__throw(...error_ctx_a:error_o_T[]):void;
export declare function bad_request_error_(error_o?:error_o_T):BadRequestError;
export declare class BadRequestError extends HttpError {}
export {
	bad_request__throw as throw_bad_request,
	bad_request__throw as throw__bad_request,
}
