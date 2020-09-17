import type { error_ctx_type } from './error_ctx_type';
/**
 * Throws a Bad Credentials error (HTTP 401)
 * @example
 * throw__bad_credentials(ctx) // Unauthorized
 */
export declare function throw_bad_credentials(...error_ctx_a1: error_ctx_type[]): void;
export declare const throw__bad_credentials: typeof throw_bad_credentials;
