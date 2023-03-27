import type { error_o_T } from '../_types'
import type { HttpError } from '../http_error__throw'
/**
 * Throws a bad_gateway error (HTTP 502)
 * @example
 * throw__bad_gateway(ctx) // Bad Gateway
 */
export declare function bad_gateway__throw(...error_ctx_a:error_o_T[]):void
export {
	bad_gateway__throw as throw_bad_gateway,
	bad_gateway__throw as throw__bad_gateway,
}
export declare function bad_gateway_error_(error_o?:error_o_T):BadGatewayError
export declare class BadGatewayError extends HttpError {}
