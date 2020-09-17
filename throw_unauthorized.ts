import { assign } from '@ctx-core/object'
import type { error_ctx_type } from './error_ctx_type'
import { throw_error } from './throw_error'
/**
 * Throws an unauthorized error (HTTP 401)
 * @example
 * throw__unauthorized(ctx) // Unauthorized
 */
export function throw_unauthorized(...error_ctx_a1:error_ctx_type[]) {
	throw_error(assign({
			type: 'unauthorized',
			error_message: 'Unauthorized',
			http_status: 401,
			http_error_message: 'Unauthorized'
		} as error_ctx_type,
		...error_ctx_a1 as error_ctx_type[]
	) as error_ctx_type)
}
export const throw__unauthorized = throw_unauthorized
