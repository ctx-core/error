import { assign, clone } from '@ctx-core/object'
import type { error_ctx_I } from './error_ctx_I.js'
import { throw_error } from './throw_error.js'
/**
 * Throws an unauthorized error (HTTP 401)
 * @example
 * throw__unauthorized(ctx) // Unauthorized
 */
export function throw_unauthorized(...error_ctx_a:error_ctx_I[]):void {
	throw_error(unauthorized_error_(clone(...error_ctx_a)))
}
export function unauthorized_error_(error_ctx:error_ctx_I = {}) {
	return new UnauthorizedError(error_ctx)
}
export class UnauthorizedError extends Error implements error_ctx_I {
	type = 'unauthorized'
	error_message = 'Unauthorized'
	http_status = 401
	http_error_message = 'Unauthorized'
	constructor(error_ctx:error_ctx_I = {}) {
		super()
		assign(this, error_ctx)
	}
}
export { throw_unauthorized as throw__unauthorized }
