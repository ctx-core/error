import type { error_ctx_I } from './_types'
/**
 * Throws a Bad Credentials error (HTTP 401)
 * @example
 * throw__bad_credentials(ctx) // Unauthorized
 */
export declare function throw_bad_credentials(...error_ctx_a:error_ctx_I[]):void;
export declare function bad_credentials_error_(error_ctx?:error_ctx_I):BadCredentialsError;
export declare class BadCredentialsError extends Error implements error_ctx_I {
	type:string
	http_status:number
	error_message:string
	http_error_message:string
	constructor(error_ctx?:error_ctx_I);
}
export { throw_bad_credentials as throw__bad_credentials }
