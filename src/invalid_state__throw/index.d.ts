import type { error_o_T } from '../_types'
import type { HttpError } from '../http_error__throw'
/**
 * Throws a invalid_state error (HTTP 500)
 * @example
 * invalid_state__throw({key: 'ctx.foobar'}) // ctx.foobar is in an invalid state
 */
export declare function invalid_state__throw(...error_ctx_a:InvalidStateError_T[]):void
export {
	invalid_state__throw as throw_invalid_state,
	invalid_state__throw as throw__invalid_state,
}
export declare function invalid_state_error_(
	error_o:InvalidStateError_T
):InvalidStateError
export declare class InvalidStateError extends HttpError implements InvalidStateError_T {
	key:string
	reason:string
	constructor(error_o:InvalidStateError_T)
}
export interface InvalidStateError_T extends error_o_T {
	key:string
	reason?:string
}
export type InvalidStateError_I = InvalidStateError_T
export type throw_invalid_state_ctx_type = InvalidStateError_T
