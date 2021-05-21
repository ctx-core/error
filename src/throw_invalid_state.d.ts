import type { error_Ctx } from './error_Ctx';
/**
 * Throws a invalid_state error (HTTP 500)
 * @example
 * throw_invalid_state({key: 'ctx.foobar'}) // ctx.foobar is in an invalid state
 */
export declare function throw_invalid_state(...error_ctx_a1: throw_invalid_state_ctx_type[]): void;
export interface throw_invalid_state_ctx_type extends error_Ctx {
    key?: string;
    reason?: string;
}
export { throw_invalid_state as throw__invalid_state };
