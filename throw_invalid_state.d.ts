import type { error_ctx_type } from './error_ctx_type';
/**
 * Throws a invalid_state error (HTTP 500)
 * @example
 * throw_invalid_state({key: 'ctx.foobar'}) // ctx.foobar is in an invalid state
 */
export declare function throw_invalid_state(...error_ctx_a1: throw_invalid_state_ctx_type[]): void;
export declare const throw__invalid_state: typeof throw_invalid_state;
export interface throw_invalid_state_ctx_interface {
    key?: string;
    reason?: string;
}
export declare type throw_invalid_state_ctx_type = error_ctx_type & throw_invalid_state_ctx_interface;
