import type { error_Ctx } from './error_Ctx';
/**
 * Throws a Bad Credentials error (HTTP 401)
 * @example
 * throw__bad_credentials(ctx) // Unauthorized
 */
export declare function throw_bad_credentials(...error_ctx_a1: error_Ctx[]): void;
export { throw_bad_credentials as throw__bad_credentials };
