import { assign, clone } from '@ctx-core/object'
import { HttpError } from './throw_http_error.js'
import { throw_error } from './throw_error.js'
/** @type {import('./throw_not_found.d.ts').not_found_error_} */
export const not_found_error_ = (error_ctx = {})=>new NotFoundError(error_ctx)
/**
 * Throws a Not Found error (HTTP 401)
 * @type {import('./throw_not_found.d.ts').throw_not_found}
 * @example
 * throw_not_found(error_ctx) // Not Found
 */
export function throw_not_found(...error_ctx_a) {
	throw_error(not_found_error_(clone(...error_ctx_a)))
}
/** @type {import('./throw_not_found.d.ts').NotFoundError} */
export class NotFoundError extends HttpError {
	constructor(error_ctx = {}) {
		super()
		this.type = 'not_found'
		this.http_status = 404
		this.error = this.type
		this.http_error = this.type
		this.error_message = 'Not Found'
		this.http_error_message = 'Not Found'
		assign(this, error_ctx)
	}
}
export { throw_not_found as throw__not_found }
