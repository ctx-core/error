import type { error_ctx_I } from './_types'
import type { HttpError } from './throw_http_error'
/**
 * Throws a invalid_state error (HTTP 500)
 * @example
 * throw_invalid_state({key: 'ctx.foobar'}) // ctx.foobar is in an invalid state
 */
export declare function throw_invalid_state(...error_ctx_a:InvalidStateError_I[]):void;
export declare function invalid_state_error_(error_ctx:InvalidStateError_I):InvalidStateError;
export declare class InvalidStateError extends HttpError implements InvalidStateError_I {
	key:string
	reason:string
	constructor(error_ctx:InvalidStateError_I)
}
export interface InvalidStateError_I extends error_ctx_I {
	key:string;
	reason?:string;
}
export declare type throw_invalid_state_ctx_type = InvalidStateError_I;
export { throw_invalid_state as throw__invalid_state }
