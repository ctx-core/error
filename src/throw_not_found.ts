import { assign, clone } from '@ctx-core/object'
import type { error_ctx_I } from './error_ctx_I.js'
import { throw_error } from './throw_error.js'
/**
 * Throws a Not Found error (HTTP 401)
 * @example
 * throw_not_found(error_ctx) // Not Found
 */
export function throw_not_found(...error_ctx_a:error_ctx_I[]):void {
	throw_error(not_found_error_(clone(...error_ctx_a)))
}
export function not_found_error_(error_ctx:error_ctx_I = {}) {
	return new NotFoundError(error_ctx)
}
export class NotFoundError extends Error implements error_ctx_I {
	type = 'not_found'
	http_status = 404
	error_message = 'Not Found'
	http_error_message = 'Not Found'
	constructor(error_ctx:error_ctx_I = {}) {
		super()
		assign(this, error_ctx)
	}
}
export { throw_not_found as throw__not_found }
