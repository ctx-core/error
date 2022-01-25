import type { error_ctx_I } from './_types'
/**
 * Throws a Bad Credentials error (HTTP 401)
 * @example
 * http_error_throw(ctx) // Unauthorized
 */
export declare function throw_http_error(...error_ctx_a:error_ctx_I[]):void;
export declare function http_error_error_(error_ctx?:error_ctx_I):HttpError;
export declare class HttpError extends Error implements error_ctx_I {
	type?:string
	url?:string
	http_status?:number
	error_message?:string
	http_error_message?:string
	constructor(error_ctx?:error_ctx_I)
}
export { throw_http_error as throw__http_error }
