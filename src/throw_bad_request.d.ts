import type { error_ctx_type } from './error_ctx_type';
/**
 * Throws an bad_request error (HTTP 400)
 * @example
 * throw_bad_request(ctx) // Bad Request
 */
export declare function throw_bad_request(...error_ctx_a1: error_ctx_type[]): void;
export declare const throw__bad_request: typeof throw_bad_request;
