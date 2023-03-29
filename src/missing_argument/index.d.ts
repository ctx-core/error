import type { error_o_T } from '../_types'
import type { HttpError } from '../http_error'
export declare function missing_argument_error_(
	message?:string,
	error_o?:missing_argument_error_o_T
):MissingArgumentError
/**
 * Throws a missing_argument error (HTTP 500)
 * @example
 * missing_argument__throw('foobar: not defined', { key: 'foobar' })
 */
export declare function missing_argument__throw(
	message?:string,
	missing_argument_error_o?:missing_argument_error_o_T
):void
export declare class MissingArgumentError extends HttpError implements missing_argument_error_o_T {}
export interface missing_argument_error_o_T extends error_o_T {
	key?:string
}
