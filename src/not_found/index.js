import { assign } from '@ctx-core/object'
import { HttpError } from '../http_error/index.js'
/** @typedef {import('../_types').argument__error_o_T}argument__error_o_T */
/**
 * @param {string}[message]
 * @param {argument__error_o_T}[error_o]
 * @returns {NotFoundError}
 * @private
 */
export function not_found_error_(
	message,
	error_o
) {
	return assign(new NotFoundError(message), error_o)
}
/**
 * Throws a Not Found error (HTTP 401)
 * @param {string}[message]
 * @param {argument__error_o_T}[error_o]
 * @example
 * not_found__throw(error_o) // Not Found
 */
export function not_found__throw(
	message,
	error_o
) {
	throw not_found_error_(message, error_o)
}
/** @type {import('./index.d.ts').NotFoundError} */
export class NotFoundError extends HttpError {
	/**
	 * @param {string}[message]
	 */
	constructor(message) {
		super(message)
		this.name = 'NotFoundError'
		this.http__status = 404
		this.http__message = 'Not Found'
		if (!this.message) this.message = this.http__message
	}
}
