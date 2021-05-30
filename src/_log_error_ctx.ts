import { console_error } from './console_error'
import { error_ctx_ } from './error_ctx_'
import type { error_ctx_I } from './error_ctx_I'
/**
 * Logs to stderr & returns a ctx__error.
 */
export function _log_error_ctx(error_ctx_or_error_message:error_ctx_I|string):error_ctx_I {
	const error_ctx = error_ctx_(error_ctx_or_error_message)
	console_error(error_ctx)
	return error_ctx
}
export {
	_log_error_ctx as _ctx__error__log
}
