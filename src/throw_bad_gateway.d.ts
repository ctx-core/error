import type { error_ctx_I } from './_types'
import type { HttpError } from './throw_http_error'
/**
 * Throws a bad_gateway error (HTTP 502)
 * @example
 * throw__bad_gateway(ctx) // Bad Gateway
 */
export declare function throw_bad_gateway(...error_ctx_a:error_ctx_I[]):void;
export declare function bad_gateway_error_(error_ctx?:error_ctx_I):BadGatewayError;
export declare class BadGatewayError extends HttpError {}
export { throw_bad_gateway as throw__bad_gateway }
