import type { error_ctx_type } from './error_ctx_type';
/**
 * Logs to stderr & returns a ctx__error.
 */
export declare function _log_error_ctx(error_ctx_or_error_message: error_ctx_type | string): error_ctx_type;
export declare const _ctx__error__log: typeof _log_error_ctx;
