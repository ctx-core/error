import type { error_o_T } from '../_types'
import type { HttpError } from '../http_error'
export declare function bad_gateway_error_(
	message?:string,
	error_o?:error_o_T
):BadGatewayError
/**
 * Throws a bad_gateway error (HTTP 502)
 * @example
 * bad_gateway__throw('Unauthorized') // Bad Gateway
 */
export declare function bad_gateway__throw(
	message?:string,
	error_o?:error_o_T
):void
export declare class BadGatewayError extends HttpError {}
