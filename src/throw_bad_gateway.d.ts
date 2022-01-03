import type { error_ctx_I } from './_types'
/**
 * Throws a bad_gateway error (HTTP 502)
 * @example
 * throw__bad_gateway(ctx) // Bad Gateway
 */
export declare function throw_bad_gateway(...error_ctx_a:error_ctx_I[]):void;
export declare function bad_gateway_error_(error_ctx?:error_ctx_I):BadGatewayError;
export declare class BadGatewayError extends Error implements error_ctx_I {
	type:string
	http_status:number
	error_message:string
	http_error_message:string
	constructor(error_ctx?:error_ctx_I);
}
export { throw_bad_gateway as throw__bad_gateway }
