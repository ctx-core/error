import type { error_o_T } from '../_types'
import type { HttpError } from '../http_error'
export declare function not_found_error_(
	message?:string,
	error_o?:error_o_T
):NotFoundError
/**
 * Throws a Not Found error (HTTP 401)
 * @example
 * not_found__throw(error_o) // Not Found
 */
export declare function not_found__throw(
	message?:string,
	error_o?:error_o_T
):void
export declare class NotFoundError extends HttpError {}
