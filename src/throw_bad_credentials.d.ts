import type { error_ctx_I } from './_types'
import type { HttpError } from './throw_http_error'
/**
 * Throws a Bad Credentials error (HTTP 401)
 * @example
 * throw__bad_credentials(ctx) // Unauthorized
 */
export declare function throw_bad_credentials(...error_ctx_a:error_ctx_I[]):void;
export declare function bad_credentials_error_(error_ctx?:error_ctx_I&{ jwt_token:string }):BadCredentialsError;
export declare class BadCredentialsError extends HttpError {}
export { throw_bad_credentials as throw__bad_credentials }
