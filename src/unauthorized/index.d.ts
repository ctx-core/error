import type { error_o_error_T, error_o_T } from '../_types'
import type { HttpError } from '../http_error'
export declare function unauthorized_error_(
	message?:string,
	error_o?:error_o_T
):UnauthorizedError
/**
 * Throws an unauthorized error (HTTP 401)
 * @example
 * throw__unauthorized(ctx) // Unauthorized
 */
export declare function unauthorized__throw(
	message?:string,
	error_o?:error_o_T
):void
export declare class UnauthorizedError
	extends HttpError
	implements error_o_error_T {}
