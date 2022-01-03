import type { error_ctx_I } from './_types'
/**
 * Throws an unauthorized error (HTTP 401)
 * @example
 * throw__unauthorized(ctx) // Unauthorized
 */
export declare function throw_unauthorized(...error_ctx_a:error_ctx_I[]):void;
export declare function unauthorized_error_(error_ctx?:error_ctx_I):UnauthorizedError;
export declare class UnauthorizedError extends Error implements error_ctx_I {
	type:string
	error_message:string
	http_status:number
	http_error_message:string
	constructor(error_ctx?:error_ctx_I);
}
export { throw_unauthorized as throw__unauthorized }
