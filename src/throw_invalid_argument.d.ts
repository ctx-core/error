import type { error_ctx_I } from './error_ctx_I';
/**
 * Throws a invalid_argument error (HTTP 500)
 * @example
 * throw_invalid_argument({key: 'ctx.foobar'}) // ctx.foobar is invalid
 */
export declare function throw_invalid_argument(...error_ctx_a: throw_invalid_argument_ctx_T[]): void;
export interface throw_invalid_argument_ctx_T extends error_ctx_I {
    key?: string;
}
export { throw_invalid_argument as throw__invalid_argument };
