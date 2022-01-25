import type { error_ctx_I } from './_types'
import type { HttpError } from './throw_http_error'
/**
 * Throws a invalid_argument error (HTTP 500)
 * @example
 * throw_invalid_argument({key: 'ctx.foobar'}) // ctx.foobar is invalid
 */
export declare function throw_invalid_argument(...error_ctx_a:InvalidArgumentError_I[]):void;
export declare function invalid_argument_error_(error_ctx:InvalidArgumentError_I):InvalidArgumentError;
export declare class InvalidArgumentError extends HttpError {
	key:string
	constructor(error_ctx:InvalidArgumentError_I);
}
export interface InvalidArgumentError_I extends error_ctx_I {
	key:string;
}
export declare type throw_invalid_argument_ctx_T = InvalidArgumentError_I;
export { throw_invalid_argument as throw__invalid_argument }
