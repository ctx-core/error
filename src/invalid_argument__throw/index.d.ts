import type { error_o_T } from '../_types'
import type { HttpError } from '../http_error__throw'
export declare function invalid_argument_error_(
	error_o:InvalidArgumentError_T
):InvalidArgumentError
/**
 * Throws an invalid_argument error (HTTP 500)
 * @example
 * invalid_argument__throw({key: 'ctx.foobar'}) // ctx.foobar is invalid
 */
export declare function invalid_argument__throw(
	...error_ctx_a:InvalidArgumentError_T[]
):void
export {
	invalid_argument__throw as throw_invalid_argument,
	invalid_argument__throw as throw__invalid_argument,
}
export declare class InvalidArgumentError extends HttpError {
	key:string
	constructor(error_o:InvalidArgumentError_T)
}
export interface InvalidArgumentError_T extends error_o_T {
	key:string
}
export type InvalidArgumentError_I = InvalidArgumentError_T
export type throw_invalid_argument_ctx_T = InvalidArgumentError_T
