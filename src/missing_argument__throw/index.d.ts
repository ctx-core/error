import type { error_o_T } from '../_types'
import type { HttpError } from '../http_error__throw'
/**
 * Throws a missing_argument error (HTTP 500)
 * @example
 * missing_argument__throw({key: 'ctx.foobar', type: 'baz__agent'}) // ctx.foobar is not defined - baz__agent
 */
export declare function missing_argument__throw(...error_ctx_a:error_o_T[]):void
export {
	missing_argument__throw as throw_missing_argument,
	missing_argument__throw as throw__missing_argument,
}
export declare function missing_argument_error_(
	error_o:MissingArgumentError_T
):MissingArgumentError
export declare class MissingArgumentError extends HttpError implements MissingArgumentError_T {
	key:string
	constructor(error_o:MissingArgumentError_T)
}
export interface MissingArgumentError_T extends error_o_T {
	key:string
}
export type MissingArgumentError_I = MissingArgumentError_T
