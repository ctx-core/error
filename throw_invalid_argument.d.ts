import type { error_ctx_type } from './error_ctx_type';
/**
 * Throws a invalid_argument error (HTTP 500)
 * @example
 * throw_invalid_argument({key: 'ctx.foobar'}) // ctx.foobar is invalid
 */
export declare function throw_invalid_argument(...error_ctx_a1: throw_invalid_argument_ctx_type[]): void;
export declare const throw__invalid_argument: typeof throw_invalid_argument;
export interface throw_invalid_argument_ctx_interface {
    key?: string;
}
export declare type throw_invalid_argument_ctx_type = error_ctx_type & throw_invalid_argument_ctx_interface;
