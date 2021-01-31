import { assign } from '@ctx-core/object'
import type { error_ctx_type } from './error_ctx_type'
import { throw_error } from './throw_error'
/**
 * Throws a Not Found error (HTTP 401)
 * @example
 * throw_not_found(error_ctx) // Not Found
 */
export function throw_not_found(...error_ctx_a1:error_ctx_type[]) {
	throw_error(assign({
			type: 'not_found',
			http_status: 404,
			error_message: 'Not Found',
			http_error_message: 'Not Found',
		} as error_ctx_type,
		...error_ctx_a1 as error_ctx_type[]
	) as error_ctx_type)
}
export const throw__not_found = throw_not_found
