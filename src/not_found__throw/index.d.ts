import type { error_o_T } from '../_types'
import type { HttpError } from '../http_error__throw'
/**
 * Throws a Not Found error (HTTP 401)
 * @example
 * not_found__throw(error_o) // Not Found
 */
export declare function not_found__throw(...error_ctx_a:error_o_T[]):void
export {
	not_found__throw as throw_not_found,
	not_found__throw as throw__not_found,
}
export declare function not_found_error_(error_o?:error_o_T):NotFoundError
export declare class NotFoundError extends HttpError {}
