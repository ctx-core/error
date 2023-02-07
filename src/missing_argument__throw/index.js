import { assign, clone } from '@ctx-core/object'
import { error__throw } from '../error__throw/index.js'
import { HttpError } from '../http_error__throw/index.js'
/** @type {typeof import('./missing_argument__throw.d.ts').missing_argument_error_} */
export const missing_argument_error_ = error_o=>
	new MissingArgumentError(error_o)
/**
 * Throws a missing_argument error (HTTP 500)
 * @type {import('./missing_argument__throw.d.ts').missing_argument__throw}
 * @example
 * missing_argument__throw({key: 'ctx.foobar', type: 'baz__agent'}) // ctx.foobar is not defined - baz__agent
 */
export function missing_argument__throw(...error_ctx_a) {
	error__throw(missing_argument_error_(clone(...error_ctx_a)))
}
/** @type {import('./missing_argument__throw.d.ts').MissingArgumentError} */
export class MissingArgumentError extends HttpError {
	constructor(error_o) {
		super()
		this.type = 'missing_argument'
		this.http_status = 500
		this.error = this.type
		this.http_error = this.type
		this.http_error_message = 'Error'
		this.key = error_o.key
		this.error_message = error_o.error_message || `${error_o.key} is not defined - ${error_o.type || 'Unknown Type'}`
		assign(this, error_o)
	}
}
export {
	missing_argument__throw as throw_missing_argument,
	missing_argument__throw as throw__missing_argument,
}
