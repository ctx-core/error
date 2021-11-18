import { assign, clone } from '@ctx-core/object'
import type { error_ctx_I } from './error_ctx_I.js'
import { throw_error } from './throw_error.js'
/**
 * Throws a Bad Credentials error (HTTP 401)
 * @example
 * throw__bad_credentials(ctx) // Unauthorized
 */
export function throw_bad_credentials(...error_ctx_a:error_ctx_I[]):void {
	throw_error(
		bad_credentials_error_(clone(...error_ctx_a))
	)
}
export function bad_credentials_error_(error_ctx:error_ctx_I = {}):BadCredentialsError {
	return new BadCredentialsError(error_ctx)
}
export class BadCredentialsError extends Error implements error_ctx_I {
	type = 'bad_credentials'
	http_status = 401
	error_message = 'Unauthorized'
	http_error_message = 'Unauthorized'
	constructor(error_ctx:error_ctx_I = {}) {
		super()
		assign(this, error_ctx)
	}
}
export {
	throw_bad_credentials as throw__bad_credentials
}
