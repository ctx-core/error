import type { error_o_T } from '../_types'
import type { HttpError } from '../http_error__throw'
/**
 * Throws a missing_argument error (HTTP 500)
 * @example
 * missing_argument__throw({key: 'ctx.foobar', type: 'baz__agent'}) // ctx.foobar is not defined - baz__agent
 */
export declare function missing_argument__throw(...error_ctx_a:error_o_T[]):void
export declare function missing_argument_error_(error_o:MissingArgumentError_I):MissingArgumentError
export declare class MissingArgumentError extends HttpError implements MissingArgumentError_I {
	key:string
	constructor(error_o:MissingArgumentError_I)
}
export interface MissingArgumentError_I extends error_o_T {
	key:string
}
export {
	missing_argument__throw as throw_missing_argument,
	missing_argument__throw as throw__missing_argument,
}
