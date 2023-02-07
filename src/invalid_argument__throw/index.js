import { assign, clone, omit } from '@ctx-core/object'
import { error__throw } from '../error__throw/index.js'
import { HttpError } from '../http_error__throw/index.js'
/** @type {typeof import('./index.d.ts').invalid_argument_error_} */
export const invalid_argument_error_ = error_o=>
	new InvalidArgumentError(error_o)
/**
 * Throws an invalid_argument error (HTTP 500)
 * @type {import('./index.d.ts').invalid_argument__throw}
 * @example
 * invalid_argument__throw({key: 'ctx.foobar'}) // ctx.foobar is invalid
 */
export function invalid_argument__throw(...error_ctx_a) {
	error__throw(invalid_argument_error_(clone(...error_ctx_a)))
}
/** @type {import('./index.d.ts').InvalidArgumentError} */
export class InvalidArgumentError extends HttpError {
	constructor(error_o) {
		super()
		this.type = 'invalid_argument'
		this.http_status = 500
		this.error = this.type
		this.http_error = this.type
		this.http_error_message = 'Error'
		this.key = error_o.key
		this.error_message = error_o.error_message || `${this.key} is invalid`
		assign(this, omit(error_o, 'key', 'error_message'))
	}
}
export {
	invalid_argument__throw as throw_invalid_argument,
	invalid_argument__throw as throw__invalid_argument,
}
