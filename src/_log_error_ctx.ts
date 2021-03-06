import { console_error } from './console_error'
import { _error_ctx } from './_error_ctx'
import type { error_ctx_T } from './error_ctx_T'
/**
 * Logs to stderr & returns a ctx__error.
 */
export function _log_error_ctx(error_ctx_or_error_message: error_ctx_T|string):error_ctx_T {
	const error_ctx = _error_ctx(error_ctx_or_error_message)
	console_error(error_ctx)
	return error_ctx
}
export {
	_log_error_ctx as _ctx__error__log
}
