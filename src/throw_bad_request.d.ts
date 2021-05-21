import type { error_Ctx } from './error_Ctx';
/**
 * Throws an bad_request error (HTTP 400)
 * @example
 * throw_bad_request(ctx) // Bad Request
 */
export declare function throw_bad_request(...error_ctx_a1: error_Ctx[]): void;
export { throw_bad_request as throw__bad_request };
