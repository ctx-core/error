import { assign, clone } from '@ctx-core/object'
import { error__throw } from '../error__throw/index.js'
/** @typedef {import('../_types').error_o_T}error_o_T */
/** @typedef {import('./index.d.ts').HttpError}HttpError */
/**
 * @param {error_o_T}[error_o]
 * @returns {HttpError}
 */
export function http_error_(error_o) {
	/** @type {import('./index.d.ts').HttpError} */
	return new /** @type {any} */HttpError(error_o)
}
export {
	http_error_ as http_error_error_,
}
/**
 * Throws a Bad Credentials error (HTTP 401)
 * @param {error_o_T}error_ctx_a
 * @example
 * throw__http_error(ctx) // Unauthorized
 */
export function http_error__throw(...error_ctx_a) {
	error__throw(http_error_(clone(...error_ctx_a)))
}
export {
	http_error__throw as throw_http_error,
	http_error__throw as throw__http_error,
}
export class HttpError extends Error {
	/**
	 * @param {import('./_types').error_o_T}[error_o]
	 */
	constructor(error_o) {
		super()
		this.type = 'http_error'
		this.error = this.type
		this.http_error = this.type
		assign(this, error_o)
	}
}
