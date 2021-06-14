import type { error_ctx_I } from './error_ctx_I';
/**
 * Throws an bad_request error (HTTP 400)
 * @example
 * throw_bad_request(ctx) // Bad Request
 */
export declare function throw_bad_request(...error_ctx_a: error_ctx_I[]): void;
export { throw_bad_request as throw__bad_request };
