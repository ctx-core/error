import type { error_o_T } from '../_types'
export declare function http_error_(
	message?:string,
	error_o?:error_o_T
):HttpError
/**
 * HttpError
 * @example
 * http_error__throw('Error fetching document') // Unauthorized
 */
export declare function http_error__throw(
	message?:string,
	error_o?:error_o_T
):void
export declare class HttpError extends Error implements error_o_T {}
