import { assign, clone } from '@ctx-core/object'
import { error__throw } from '../error__throw/index.js'
import { HttpError } from '../http_error__throw/index.js'
/** @type {typeof import('./index.d.ts').bad_credentials_error_} */
export const bad_credentials_error_ = (error_o = {})=>{
	return new BadCredentialsError(error_o)
}
/**
 * Throws a Bad Credentials error (HTTP 401)
 * @type {typeof import('./index.d.ts').bad_credentials__throw}
 * @example
 * bad_credentials_throw(ctx) // Unauthorized
 */
export const bad_credentials__throw = (...error_ctx_a)=>{
	error__throw(bad_credentials_error_(clone(...error_ctx_a)))
}
/** @type {typeof import('./index.d.ts').BadCredentialsError} */
export class BadCredentialsError extends HttpError {
	constructor(error_o = {}) {
		super()
		this.type = 'bad_credentials'
		this.http_status = 401
		this.error = this.type
		this.http_error = this.type
		this.error_message = 'Unauthorized'
		this.http_error_message = this.error_message
		assign(this, error_o)
	}
}
export {
	bad_credentials__throw as throw_bad_credentials,
	bad_credentials__throw as throw__bad_credentials,
}
