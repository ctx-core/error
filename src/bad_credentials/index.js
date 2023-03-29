import { assign } from '@ctx-core/object'
import { HttpError } from '../http_error/index.js'
/** @typedef {import('./index.d.ts').bad_credentials_error_o_T}bad_credentials_error_o_T */
/**
 * @param {string}[message]
 * @param {bad_credentials_error_o_T}[bad_credentials_error_o]
 * @private
 */
export function bad_credentials_error_(
	message,
	bad_credentials_error_o
) {
	return assign(new BadCredentialsError(message), bad_credentials_error_o)
}
/**
 * Throws a Bad Credentials error (HTTP 401)
 * @param {string}[message]
 * @param {bad_credentials_error_o_T}[bad_credentials_error_o]
 * @example
 * bad_credentials__throw(ctx) // Unauthorized
 */
export function bad_credentials__throw(
	message,
	bad_credentials_error_o
) {
	throw bad_credentials_error_(message, bad_credentials_error_o)
}
/** @type {typeof import('./index.d.ts').BadCredentialsError} */
export class BadCredentialsError extends HttpError {
	/**
	 * @param {string}[message]
	 */
	constructor(message) {
		super(message)
		this.name = 'BadCredentialsError'
		this.http__message = 'Unauthorized'
		this.http__status = 401
		if (!this.message) this.message = this.http__message
	}
}
