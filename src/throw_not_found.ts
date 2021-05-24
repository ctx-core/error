import { assign } from '@ctx-core/object'
import { throw_error } from './throw_error'
import type { error_Ctx } from './error_Ctx'
/**
 * Throws a Not Found error (HTTP 401)
 * @example
 * throw_not_found(error_ctx) // Not Found
 */
export function throw_not_found(...error_ctx_a1:error_Ctx[]) {
	throw_error(assign({
		type: 'not_found',
		http_status: 404,
		error_message: 'Not Found',
		http_error_message: 'Not Found',
	}, ...error_ctx_a1))
}
export { throw_not_found as throw__not_found }
