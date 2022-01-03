import { console_error } from './console_error.js'
import { error_ctx_ } from './error_ctx_.js'
/**
 * Logs to stderr & returns a ctx__error.
 * @type {import('./log_error_ctx_.d.ts').log_error_ctx_}
 */
export const log_error_ctx_ = error_ctx_or_error_message=>{
	const error_ctx = error_ctx_(error_ctx_or_error_message)
	console_error(error_ctx)
	return error_ctx
}
export { log_error_ctx_ as _log_error_ctx, log_error_ctx_ as _ctx__error__log, }
