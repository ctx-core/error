import { assign, clone } from '@ctx-core/object'
import { throw_error } from './throw_error.js'
import { HttpError } from './throw_http_error.js'
/** @type {import('./throw_unauthorized.d.ts').unauthorized_error_} */
export const unauthorized_error_ = (error_ctx = {})=>new UnauthorizedError(error_ctx)
/**
 * Throws an unauthorized error (HTTP 401)
 * @type {import('./throw_unauthorized.d.ts').throw_unauthorized}
 * @example
 * unauthorized_throw(ctx) // Unauthorized
 */
export function throw_unauthorized(...error_ctx_a) {
	throw_error(unauthorized_error_(clone(...error_ctx_a)))
}
/** @type {import('./throw_unauthorized.d.ts').UnauthorizedError} */
export class UnauthorizedError extends HttpError {
	constructor(error_ctx = {}) {
		super()
		this.type = 'unauthorized'
		this.error = this.type
		this.http_error = this.type
		this.error_message = 'Unauthorized'
		this.http_status = 401
		this.http_error_message = 'Unauthorized'
		assign(this, error_ctx)
	}
}
export { throw_unauthorized as throw__unauthorized }
