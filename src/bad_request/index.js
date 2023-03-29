import { assign } from '@ctx-core/object'
import { HttpError } from '../http_error/index.js'
/** @typedef {import('../_types').error_o_T}error_o_T */
/**
 * @param {string}[message]
 * @param {error_o_T}[error_o]
 * @returns {BadRequestError}
 * @private
 */
export function bad_request_error_(
	message,
	error_o
) {
	return assign(new BadRequestError(message), error_o)
}
/**
 * Throws a bad_request error (HTTP 400)
 * @param {string}[message]
 * @param {error_o_T}[error_o]
 * @example
 * bad_request__throw(ctx) // Bad Request
 */
export function bad_request__throw(
	message,
	error_o
) {
	throw bad_request_error_(message, error_o)
}
/** @type {import('./index.d.ts').BadRequestError} */
export class BadRequestError extends HttpError {
	/**
	 * @param {string}[message]
	 */
	constructor(message) {
		super(message)
		this.name = 'BadRequestError'
		this.http__status = 400
		this.http__message = 'Bad Request'
		if (!this.message) this.message = this.http__message
	}
}
