import type { error_o_T } from '../_types'
import type { HttpError } from '../http_error__throw'
/**
 * Throws a Bad Credentials error (HTTP 401)
 * @example
 * throw__bad_credentials(ctx) // Unauthorized
 */
export declare function bad_credentials__throw(...error_ctx_a:error_o_T[]):void
export declare function bad_credentials_error_(error_o?:error_o_T&{ jwt_token:string }):BadCredentialsError
export declare class BadCredentialsError extends HttpError {}
export {
	bad_credentials__throw as throw_bad_credentials,
	bad_credentials__throw as throw__bad_credentials,
}
