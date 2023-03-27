import { assign, clone } from '@ctx-core/object'
import { error__throw } from '../error__throw/index.js'
import { HttpError } from '../http_error__throw/index.js'
/** @type {typeof import('./index.d.ts').unauthorized_error_} */
export const unauthorized_error_ = (error_o = {})=>
	new UnauthorizedError(error_o)
/**
 * Throws an unauthorized error (HTTP 401)
 * @type {import('./index.d.ts').unauthorized__throw}
 * @example
 * unauthorized_throw(ctx) // Unauthorized
 */
export function unauthorized__throw(...error_ctx_a) {
	error__throw(unauthorized_error_(clone(...error_ctx_a)))
}
export {
	unauthorized__throw as throw_unauthorized,
	unauthorized__throw as throw__unauthorized,
}
/** @type {import('./index.d.ts').UnauthorizedError} */
export class UnauthorizedError extends HttpError {
	constructor(error_o = {}) {
		super()
		this.type = 'unauthorized'
		this.error = this.type
		this.http_error = this.type
		this.error_message = 'Unauthorized'
		this.http_status = 401
		this.http_error_message = 'Unauthorized'
		assign(this, error_o)
	}
}
