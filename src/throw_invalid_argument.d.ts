import type { error_ctx_T } from './error_ctx_T';
/**
 * Throws a invalid_argument error (HTTP 500)
 * @example
 * throw_invalid_argument({key: 'ctx.foobar'}) // ctx.foobar is invalid
 */
export declare function throw_invalid_argument(...error_ctx_a1: throw_invalid_argument_ctx_T[]): void;
export interface throw_invalid_argument_ctx_T extends error_ctx_T {
    key?: string;
}
export { throw_invalid_argument as throw__invalid_argument };
