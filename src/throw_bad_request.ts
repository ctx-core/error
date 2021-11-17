import { assign } from '@ctx-core/object'
import type { error_ctx_I } from './error_ctx_I.js'
import { throw_error } from './throw_error.js'
/**
 * Throws an bad_request error (HTTP 400)
 * @example
 * throw_bad_request(ctx) // Bad Request
 */
export function throw_bad_request(...error_ctx_a:error_ctx_I[]):void {
	const base = {
		type: 'bad_request',
		http_status: 400,
		error_message: 'Bad Request',
		http_error_message: 'Bad Request',
	} as error_ctx_I
	throw_error(assign(base, ...error_ctx_a))
}
export {
	throw_bad_request as throw__bad_request
}
