import type { error_ctx_type } from './error_ctx_type';
/**
 * Assigns & coerces to ctx.ctx__error
 */
export declare function _error_ctx(error_ctx_or_error_message: error_ctx_type | string): error_ctx_type;
export declare const _ctx__error: typeof _error_ctx;
