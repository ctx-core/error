import type { error_ctx_I } from './error_ctx_I';
/**
 * Logs to stderr & returns a ctx__error.
 */
export declare function _log_error_ctx(error_ctx_or_error_message: error_ctx_I | string): error_ctx_I;
export { _log_error_ctx as _ctx__error__log };
