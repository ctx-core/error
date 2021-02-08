import type { error_ctx_type } from './error_ctx_type';
/**
 * Throws a invalid_argument error (HTTP 500)
 * @example
 * throw_invalid_argument({key: 'ctx.foobar'}) // ctx.foobar is invalid
 */
export declare function throw_invalid_argument(...error_ctx_a1: throw_invalid_argument_ctx_type[]): void;
export interface throw_invalid_argument_ctx_type extends error_ctx_type {
    key?: string;
}
export { throw_invalid_argument as throw__invalid_argument };