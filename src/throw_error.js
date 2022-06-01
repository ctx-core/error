import { error_ctx_ } from './error_ctx_.js'
/**
 * Throws an error
 * @type {import('./throw_error.d.ts').throw_error}
 * @throws Decorate & throw error given by the arguments.
 */
export const throw_error = error_ctx_or_error_message=>{
	throw error_ctx_(error_ctx_or_error_message)
}
export { throw_error as throw__error }
