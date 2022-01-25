import { assign, clone } from '@ctx-core/object'
import { HttpError } from './throw_http_error.js'
import { throw_error } from './throw_error.js'
/** @type {import('./throw_bad_credentials.d.ts').bad_credentials_error_} */
export const bad_credentials_error_ = (error_ctx = {})=>{
	return new BadCredentialsError(error_ctx)
}
/**
 * Throws a Bad Credentials error (HTTP 401)
 * @type {import('./throw_bad_credentials.d.ts').throw_bad_credentials}
 * @example
 * bad_credentials_throw(ctx) // Unauthorized
 */
export const throw_bad_credentials = (...error_ctx_a)=>{
	throw_error(bad_credentials_error_(clone(...error_ctx_a)))
}
/** @type {import('./throw_bad_credentials.d.ts').BadCredentialsError} */
export class BadCredentialsError extends HttpError {
	constructor(error_ctx = {}) {
		super()
		this.type = 'bad_credentials'
		this.http_status = 401
		this.error_message = 'Unauthorized'
		this.http_error_message = 'Unauthorized'
		assign(this, error_ctx)
	}
}
export { throw_bad_credentials as throw__bad_credentials }
