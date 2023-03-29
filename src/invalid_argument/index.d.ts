import type { error_o_T } from '../_types'
import type { HttpError } from '../http_error'
export declare function invalid_argument_error_(
	message?:string,
	invalid_argument_error_o?:invalid_argument_error_o_T
):InvalidArgumentError
/**
 * Throws an invalid_argument error (HTTP 500)
 * @example
 * invalid_argument__throw('key: foobar')
 */
export declare function invalid_argument__throw(
	message?:string,
	invalid_argument_error_o?:invalid_argument_error_o_T
):void
export declare class InvalidArgumentError extends HttpError {}
export interface invalid_argument_error_o_T extends error_o_T {
	key?:string
}
