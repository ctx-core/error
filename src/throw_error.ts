import type { error_Ctx } from './error_Ctx'
import { _log_error_ctx } from './_log_error_ctx'
/**
 * Throws an error
 * @throws Decorate & throw error given by the arguments.
 */
export function throw_error(error_ctx_or_error_message: error_Ctx|string):void {
	throw _log_error_ctx(error_ctx_or_error_message)
}
export {
	throw_error as throw__error
}
