import type { error_ctx_type } from './error_ctx_type';
/**
 * Throws a bad_gateway error (HTTP 502)
 * @example
 * throw__bad_gateway(ctx) // Bad Gateway
 */
export declare function throw_bad_gateway(...error_ctx_a1: error_ctx_type[]): void;
export declare const throw__bad_gateway: typeof throw_bad_gateway;
