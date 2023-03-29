import type { error_o_T } from '../_types'
import type { HttpError } from '../http_error'
export declare function bad_request_error_(
	message?:string,
	error_o?:error_o_T
):BadRequestError
/**
 * Throws a bad_request error (HTTP 400)
 * @example
 * bad_request__throw('Bad Request') // Bad Request
 */
export declare function bad_request__throw(
	message?:string,
	error_o?:error_o_T
):void
export declare class BadRequestError extends HttpError {}
