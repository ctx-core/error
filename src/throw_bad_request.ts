import { assign, clone } from '@ctx-core/object'
import type { error_ctx_I } from './error_ctx_I.js'
import { throw_error } from './throw_error.js'
/**
 * Throws an bad_request error (HTTP 400)
 * @example
 * throw_bad_request(ctx) // Bad Request
 */
export function throw_bad_request(...error_ctx_a:error_ctx_I[]):void {
	throw_error(bad_request_(clone(...error_ctx_a)))
}
export function bad_request_(error_ctx:error_ctx_I = {}) {
	return new BadRequestError(error_ctx)
}
export class BadRequestError extends Error implements error_ctx_I {
	type = 'bad_request'
	http_status = 400
	error_message = 'Bad Request'
	http_error_message = 'Bad Request'
	constructor(error_ctx:error_ctx_I) {
		super()
		assign(this, error_ctx)
	}
}
export {
	throw_bad_request as throw__bad_request
}
