import type { error_ctx_type } from './error_ctx_type';
/**
 * Throws a Not Found error (HTTP 401)
 * @example
 * throw_not_found(error_ctx) // Not Found
 */
export declare function throw_not_found(...error_ctx_a1: error_ctx_type[]): void;
export declare const throw__not_found: typeof throw_not_found;
