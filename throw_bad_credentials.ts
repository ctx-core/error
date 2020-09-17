import { assign } from '@ctx-core/object'
import type { error_ctx_type } from './error_ctx_type'
import { throw_error } from './throw_error'
/**
 * Throws a Bad Credentials error (HTTP 401)
 * @example
 * throw__bad_credentials(ctx) // Unauthorized
 */
export function throw_bad_credentials(...error_ctx_a1:error_ctx_type[]) {
	throw_error(assign({
			type: 'bad_credentials',
			http_status: 401,
			error_message: 'Unauthorized',
			http_error_message: 'Unauthorized',
		} as error_ctx_type,
		...error_ctx_a1 as error_ctx_type[]
	) as error_ctx_type)
}
export const throw__bad_credentials = throw_bad_credentials
