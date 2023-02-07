import { console__error } from '../console__error/index.js'
import { error_o_ } from '../error_o_/index.js'
/**
 * Logs to stderr & returns a ctx__error.
 * @type {typeof import('./index.d.ts').error_ctx__log_}
 */
export const error_ctx__log_ = error_ctx_or_error_message=>{
	const error_o = error_o_(error_ctx_or_error_message)
	console__error(error_o)
	return error_o
}
export {
	error_ctx__log_ as log_error_ctx,
	error_ctx__log_ as _log_error_ctx,
	error_ctx__log_ as _ctx__error__log,
}
