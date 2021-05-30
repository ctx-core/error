import { assign } from '@ctx-core/object'
import type { error_ctx_I } from './error_ctx_I'
import { throw_error } from './throw_error'
/**
 * Throws a Bad Credentials error (HTTP 401)
 * @example
 * throw__bad_credentials(ctx) // Unauthorized
 */
export function throw_bad_credentials(...error_ctx_a:error_ctx_I[]):void {
	throw_error(assign({
			type: 'bad_credentials',
			http_status: 401,
			error_message: 'Unauthorized',
			http_error_message: 'Unauthorized',
		} as error_ctx_I,
		...error_ctx_a as error_ctx_I[]
	) as error_ctx_I)
}
export {
	throw_bad_credentials as throw__bad_credentials
}
