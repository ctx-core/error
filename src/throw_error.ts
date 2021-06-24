import type { error_ctx_I } from './error_ctx_I'
import { log_error_ctx_ } from './log_error_ctx_'
/**
 * Throws an error
 * @throws Decorate & throw error given by the arguments.
 */
export function throw_error(error_ctx_or_error_message:error_ctx_I|string):void {
	throw log_error_ctx_(error_ctx_or_error_message)
}
export {
	throw_error as throw__error
}
