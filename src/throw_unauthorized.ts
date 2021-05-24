import { assign } from '@ctx-core/object'
import { throw_error } from './throw_error'
import type { error_Ctx } from './error_Ctx'
/**
 * Throws an unauthorized error (HTTP 401)
 * @example
 * throw__unauthorized(ctx) // Unauthorized
 */
export function throw_unauthorized(...error_ctx_a1:error_Ctx[]) {
	throw_error(assign({
		type: 'unauthorized',
		error_message: 'Unauthorized',
		http_status: 401,
		http_error_message: 'Unauthorized'
	}, ...error_ctx_a1))
}
export { throw_unauthorized as throw__unauthorized }
