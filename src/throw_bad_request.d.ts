import type { error_ctx_I } from './_types'
/**
 * Throws an bad_request error (HTTP 400)
 * @example
 * throw_bad_request(ctx) // Bad Request
 */
export declare function throw_bad_request(...error_ctx_a:error_ctx_I[]):void;
export declare function bad_request_error_(error_ctx?:error_ctx_I):BadRequestError;
export declare class BadRequestError extends Error implements error_ctx_I {
	type:string
	http_status:number
	error_message:string
	http_error_message:string
	constructor(error_ctx:error_ctx_I);
}
export { throw_bad_request as throw__bad_request }
