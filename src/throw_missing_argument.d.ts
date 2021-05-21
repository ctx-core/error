import type { error_Ctx } from './error_Ctx';
/**
 * Throws a missing_argument error (HTTP 500)
 * @example
 * throw_missing_argument({key: 'ctx.foobar', type: 'baz__agent'}) // ctx.foobar is not defined - baz__agent
 */
export declare function throw_missing_argument(...error_ctx_a1: error_Ctx[]): void;
export { throw_missing_argument as throw__missing_argument };
