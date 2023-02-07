import { error_o_ } from '../error_o_/index.js'
/**
 * Throws an error
 * @type {import('./index.d.ts').error__throw}
 * @throws Decorate & throw error given by the arguments.
 */
export const error__throw = error_ctx_or_error_message=>{
	throw error_o_(error_ctx_or_error_message)
}
export {
	error__throw as throw_error,
	error__throw as throw__error,
}
