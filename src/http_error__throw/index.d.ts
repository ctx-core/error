import type { error_o_T } from '../_types'
/**
 * Throws a Bad Credentials error (HTTP 401)
 * @example
 * http_error_throw(ctx) // Unauthorized
 */
export declare function http_error__throw(...error_ctx_a:error_o_T[]):void
export declare function http_error_(error_o?:error_o_T):HttpError
export declare class HttpError extends Error implements error_o_T {
	type?:string
	url?:string
	http_status?:number
	error?:string
	http_error?:string
	error_message?:string
	http_error_message?:string
	constructor(error_o?:error_o_T)
}
export { http_error__throw as throw__http_error }
