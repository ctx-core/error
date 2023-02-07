import { assign, clone } from '@ctx-core/object'
import { error__throw } from '../error__throw/index.js'
import { HttpError } from '../http_error__throw/index.js'
/** @type {typeof import('./index.d.ts').not_found_error_} */
export const not_found_error_ = (error_o = {})=>
	new NotFoundError(error_o)
/**
 * Throws a Not Found error (HTTP 401)
 * @type {import('./throw.d.ts').not_found__throw}
 * @example
 * not_found__throw(error_o) // Not Found
 */
export function not_found__throw(...error_ctx_a) {
	error__throw(not_found_error_(clone(...error_ctx_a)))
}
/** @type {import('./index.d.ts').NotFoundError} */
export class NotFoundError extends HttpError {
	constructor(error_o = {}) {
		super()
		this.type = 'not_found'
		this.http_status = 404
		this.error = this.type
		this.http_error = this.type
		this.error_message = 'Not Found'
		this.http_error_message = 'Not Found'
		assign(this, error_o)
	}
}
export {
	not_found__throw as throw_not_found,
	not_found__throw as throw__not_found,
}
