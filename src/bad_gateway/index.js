import { assign } from '@ctx-core/object'
import { HttpError } from '../http_error/index.js'
/** @typedef {import('../_types').argument__error_o_T}argument__error_o_T */
/**
 * @param {string}[message]
 * @param {argument__error_o_T}[error_o]
 * @returns {BadGatewayError}
 * @private
 */
export function bad_gateway_error_(
	message,
	error_o
) {
	return assign(
		new /** @type {any} */BadGatewayError(message),
		error_o)
}
/**
 * Throws a bad_gateway error (HTTP 502)
 * @param {string}[message]
 * @param {argument__error_o_T}[error_o]
 * @example
 * bad_gateway__throw(ctx) // Bad Gateway
 */
export function bad_gateway__throw(
	message,
	error_o
) {
	throw bad_gateway_error_(message, error_o)
}
/** @type {import('./index.d.ts').BadGatewayError} */
export class BadGatewayError extends HttpError {
	/**
	 * @param {string}[message]
	 */
	constructor(message) {
		super(message)
		this.name = 'BadGatewayError'
		this.http__status = 502
		this.http__message = 'Bad Gateway'
		if (!this.message) this.message = this.http__message
	}
}
