import type { error_ctx_I } from './_types'
import type { HttpError } from './throw_http_error'
/**
 * Throws a missing_argument error (HTTP 500)
 * @example
 * throw_missing_argument({key: 'ctx.foobar', type: 'baz__agent'}) // ctx.foobar is not defined - baz__agent
 */
export declare function throw_missing_argument(...error_ctx_a:error_ctx_I[]):void;
export declare function missing_argument_error_(error_ctx:MissingArgumentError_I):MissingArgumentError;
export declare class MissingArgumentError extends HttpError implements MissingArgumentError_I {
	key:string
	constructor(error_ctx:MissingArgumentError_I)
}
export interface MissingArgumentError_I extends error_ctx_I {
	key:string;
}
export { throw_missing_argument as throw__missing_argument }
