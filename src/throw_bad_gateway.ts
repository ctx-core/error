import { assign, clone } from '@ctx-core/object'
import type { error_ctx_I } from './error_ctx_I.js'
import { throw_error } from './throw_error.js'
/**
 * Throws a bad_gateway error (HTTP 502)
 * @example
 * throw__bad_gateway(ctx) // Bad Gateway
 */
export function throw_bad_gateway(...error_ctx_a:error_ctx_I[]):void {
	throw_error(bad_gateway_(clone(...error_ctx_a)))
}
export function bad_gateway_(error_ctx:error_ctx_I = {}) {
	return new BadGatewayError(error_ctx)
}
export class BadGatewayError extends Error implements error_ctx_I {
	type = 'bad_gateway'
	http_status = 502
	error_message = 'Bad Gateway'
	http_error_message = 'Bad Gateway'
	constructor(error_ctx:error_ctx_I = {}) {
		super()
		assign(this, error_ctx)
	}
}
export {
	throw_bad_gateway as throw__bad_gateway
}
