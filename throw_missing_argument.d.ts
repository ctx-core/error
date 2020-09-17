import type { error_ctx_type } from './error_ctx_type';
/**
 * Throws a missing_argument error (HTTP 500)
 * @example
 * throw_missing_argument({key: 'ctx.foobar', type: 'baz__agent'}) // ctx.foobar is not defined - baz__agent
 */
export declare function throw_missing_argument(...error_ctx_a1: error_ctx_type[]): void;
export declare const throw__missing_argument: typeof throw_missing_argument;
