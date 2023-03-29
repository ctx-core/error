import { assign } from '@ctx-core/object'
import { HttpError } from '../http_error/index.js'
/** @typedef {import('./index.d.ts').argument__invalid_argument_error_o_T}argument__invalid_argument_error_o_T */
/**
 * @param {string}[message]
 * @param {argument__invalid_argument_error_o_T}[invalid_argument_error_o]
 * @returns {InvalidArgumentError}
 */
export function invalid_argument_error_(
	message,
	invalid_argument_error_o
) {
	return assign(new InvalidArgumentError(message), invalid_argument_error_o)
}
/**
 * Throws an invalid_argument error (HTTP 500)
 * @param {string}[message]
 * @param {argument__invalid_argument_error_o_T}[invalid_argument_error_o]
 * @example
 * invalid_argument__throw('key: foobar')
 */
export function invalid_argument__throw(
	message,
	invalid_argument_error_o
) {
	throw invalid_argument_error_(message, invalid_argument_error_o)
}
/** @type {import('./index.d.ts').InvalidArgumentError} */
export class InvalidArgumentError extends HttpError {
	/**
	 * @param {string}[message]
	 */
	constructor(message) {
		super(message)
		this.name = 'InvalidArgumentError'
		this.http__status = 500
		this.http__message = 'Invalid Argument'
		if (!this.message) this.message = this.http__message
	}
}
