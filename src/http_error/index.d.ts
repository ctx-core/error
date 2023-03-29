import type { argument__error_o_T, error_o_error_T } from '../_types'
export declare function http_error_(
	message?:string,
	error_o?:argument__error_o_T
):HttpError
/**
 * HttpError
 * @example
 * http_error__throw('Error fetching document') // Unauthorized
 */
export declare function http_error__throw(
	message?:string,
	error_o?:argument__error_o_T
):void
export declare class HttpError
	extends Error
	implements error_o_error_T {}
