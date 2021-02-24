import { assign } from '@ctx-core/object'
import type { error_ctx_T } from './error_ctx_T'
import { throw_error } from './throw_error'
/**
 * Throws a Bad Credentials error (HTTP 401)
 * @example
 * throw__bad_credentials(ctx) // Unauthorized
 */
export function throw_bad_credentials(...error_ctx_a1:error_ctx_T[]):void {
	throw_error(assign({
			type: 'bad_credentials',
			http_status: 401,
			error_message: 'Unauthorized',
			http_error_message: 'Unauthorized',
		} as error_ctx_T,
		...error_ctx_a1 as error_ctx_T[]
	) as error_ctx_T)
}
export {
	throw_bad_credentials as throw__bad_credentials
}
