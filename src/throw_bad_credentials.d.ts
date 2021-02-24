import type { error_ctx_T } from './error_ctx_T';
/**
 * Throws a Bad Credentials error (HTTP 401)
 * @example
 * throw__bad_credentials(ctx) // Unauthorized
 */
export declare function throw_bad_credentials(...error_ctx_a1: error_ctx_T[]): void;
export { throw_bad_credentials as throw__bad_credentials };
