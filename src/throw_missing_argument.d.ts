import type { error_ctx_I } from './error_ctx_I';
/**
 * Throws a missing_argument error (HTTP 500)
 * @example
 * throw_missing_argument({key: 'ctx.foobar', type: 'baz__agent'}) // ctx.foobar is not defined - baz__agent
 */
export declare function throw_missing_argument(...error_ctx_a: error_ctx_I[]): void;
export { throw_missing_argument as throw__missing_argument };
