import type { error_ctx_I } from './error_ctx_I';
/**
 * Throws a bad_gateway error (HTTP 502)
 * @example
 * throw__bad_gateway(ctx) // Bad Gateway
 */
export declare function throw_bad_gateway(...error_ctx_a1: error_ctx_I[]): void;
export { throw_bad_gateway as throw__bad_gateway };
