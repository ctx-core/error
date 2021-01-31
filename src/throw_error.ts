import type { error_ctx_type } from './error_ctx_type'
import { _log_error_ctx } from './_log_error_ctx'
/**
 * Throws an error
 * @throws Decorate & throw error given by the arguments.
 */
export function throw_error(error_ctx_or_error_message: error_ctx_type|string) {
	throw _log_error_ctx(error_ctx_or_error_message)
}
export const throw__error = throw_error
