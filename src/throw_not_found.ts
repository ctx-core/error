import { assign } from '@ctx-core/object'
import type { error_ctx_I } from './error_ctx_I'
import { throw_error } from './throw_error'
/**
 * Throws a Not Found error (HTTP 401)
 * @example
 * throw_not_found(error_ctx) // Not Found
 */
export function throw_not_found(...error_ctx_a1:error_ctx_I[]):void {
	throw_error(assign({
			type: 'not_found',
			http_status: 404,
			error_message: 'Not Found',
			http_error_message: 'Not Found',
		} as error_ctx_I,
		...error_ctx_a1 as error_ctx_I[]
	) as error_ctx_I)
}
export {
	throw_not_found as throw__not_found
}
