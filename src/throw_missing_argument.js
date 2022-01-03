import { assign, clone } from '@ctx-core/object'
import { throw_error } from './throw_error.js'
/** @type {import('./throw_missing_argument.d.ts').missing_argument_error_} */
export const missing_argument_error_ = error_ctx=>new MissingArgumentError(error_ctx)
/**
 * Throws a missing_argument error (HTTP 500)
 * @type {import('./throw_missing_argument.d.ts').throw_missing_argument}
 * @example
 * throw_missing_argument({key: 'ctx.foobar', type: 'baz__agent'}) // ctx.foobar is not defined - baz__agent
 */
export function throw_missing_argument(...error_ctx_a) {
	throw_error(missing_argument_error_(clone(...error_ctx_a)))
}
/** @type {import('./throw_missing_argument.d.ts').MissingArgumentError} */
export class MissingArgumentError extends Error {
	constructor(error_ctx) {
		super()
		this.type = 'missing_argument'
		this.http_status = 500
		this.http_error_message = 'Error'
		this.key = error_ctx.key
		this.error_message = error_ctx.error_message || `${error_ctx.key} is not defined - ${error_ctx.type || 'Unknown Type'}`
		assign(this, error_ctx)
	}
}
export { throw_missing_argument as throw__missing_argument }
