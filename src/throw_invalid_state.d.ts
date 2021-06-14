import type { error_ctx_I } from './error_ctx_I';
/**
 * Throws a invalid_state error (HTTP 500)
 * @example
 * throw_invalid_state({key: 'ctx.foobar'}) // ctx.foobar is in an invalid state
 */
export declare function throw_invalid_state(...error_ctx_a: throw_invalid_state_ctx_type[]): void;
export interface throw_invalid_state_ctx_type extends error_ctx_I {
    key?: string;
    reason?: string;
}
export { throw_invalid_state as throw__invalid_state };
