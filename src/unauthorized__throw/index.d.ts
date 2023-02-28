import type { error_o_T } from '../_types'
import type { HttpError } from '../http_error__throw'
/**
 * Throws an unauthorized error (HTTP 401)
 * @example
 * throw__unauthorized(ctx) // Unauthorized
 */
export declare function unauthorized__throw(...error_ctx_a:error_o_T[]):void
export declare function unauthorized_error_(error_o?:error_o_T):UnauthorizedError
export declare class UnauthorizedError extends HttpError {}
export {
	unauthorized__throw as throw_unauthorized,
	unauthorized__throw as throw__unauthorized,
}
