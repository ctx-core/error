import type { error_o_T } from '../_types'
import type { HttpError } from '../http_error'
export declare function bad_credentials_error_(
	message?:string,
	bad_credentials_error_o?:bad_credentials_error_o_T
):BadCredentialsError
/**
 * Throws a Bad Credentials error (HTTP 401)
 * @example
 * bad_credentials__throw(ctx) // Unauthorized
 */
export declare function bad_credentials__throw(
	message?:string,
	bad_credentials_error_o?:error_o_T
):void
export declare class BadCredentialsError extends HttpError implements bad_credentials_error_o_T {}
export interface bad_credentials_error_o_T extends error_o_T {
	jwt_token?:string
}
