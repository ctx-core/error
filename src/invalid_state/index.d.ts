import type { error_o_T } from '../_types'
import type { HttpError } from '../http_error'
export declare function invalid_state_error_(
	message?:string,
	invalid_state_error_o?:invalid_state_error_o_T
):InvalidStateError
/**
 * Throws an invalid_state error (HTTP 500)
 * @example
 * invalid_state__throw('foobar: invalid type')
 */
export declare function invalid_state__throw(
	message?:string,
	invalid_state_error_o?:invalid_state_error_o_T
):void
export declare class InvalidStateError extends HttpError implements invalid_state_error_o_T {
	key?:string
	reason?:string
}
export interface invalid_state_error_o_T extends error_o_T {
	key?:string
	reason?:string
}
