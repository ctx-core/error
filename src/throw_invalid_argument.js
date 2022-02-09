import { assign, clone, omit } from '@ctx-core/object'
import { throw_error } from './throw_error.js'
import { HttpError } from './throw_http_error.js'
/** @type {import('./throw_invalid_argument.d.ts').invalid_argument_error_} */
export const invalid_argument_error_ = error_ctx=>new InvalidArgumentError(error_ctx)
/**
 * Throws a invalid_argument error (HTTP 500)
 * @type {import('./throw_invalid_argument.d.ts').throw_invalid_argument}
 * @example
 * throw_invalid_argument({key: 'ctx.foobar'}) // ctx.foobar is invalid
 */
export function throw_invalid_argument(...error_ctx_a) {
	throw_error(invalid_argument_error_(clone(...error_ctx_a)))
}
/** @type {import('./throw_invalid_argument.d.ts').InvalidArgumentError} */
export class InvalidArgumentError extends HttpError {
	constructor(error_ctx) {
		super()
		this.type = 'invalid_argument'
		this.http_status = 500
		this.error = this.type
		this.http_error = this.type
		this.http_error_message = 'Error'
		this.key = error_ctx.key
		this.error_message = error_ctx.error_message || `${this.key} is invalid`
		assign(this, omit(error_ctx, 'key', 'error_message'))
	}
}
export { throw_invalid_argument as throw__invalid_argument }
