import { assign, clone } from '@ctx-core/object'
import { throw_error } from './throw_error.js'
/** @type {import('./throw_http_error.d.ts').http_error_error_} */
export const http_error_error_ = (error_ctx = {})=>{
	return new HttpError(error_ctx)
}
/**
 * Throws a Bad Credentials error (HTTP 401)
 * @type {import('./throw_http_error.d.ts').throw_http_error}
 * @example
 * throw__http_error(ctx) // Unauthorized
 */
export const throw_http_error = (...error_ctx_a)=>{
	throw_error(http_error_error_(clone(...error_ctx_a)))
}
/** @type {import('./throw_http_error.d.ts').HttpError} */
export class HttpError extends Error {
	/**
	 * @param {import('./_types').error_ctx_I}error_ctx
	 */
	constructor(error_ctx = {}) {
		super()
		this.type = 'http_error'
		this.error = this.type
		this.http_error = this.type
		assign(this, error_ctx)
	}
}
export { throw_http_error as throw__http_error }
