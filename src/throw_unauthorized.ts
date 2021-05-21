import { assign } from '@ctx-core/object'
import type { error_Ctx } from './error_Ctx'
import { throw_error } from './throw_error'
/**
 * Throws an unauthorized error (HTTP 401)
 * @example
 * throw__unauthorized(ctx) // Unauthorized
 */
export function throw_unauthorized(...error_ctx_a1:error_Ctx[]):void {
	throw_error(assign({
			type: 'unauthorized',
			error_message: 'Unauthorized',
			http_status: 401,
			http_error_message: 'Unauthorized'
		} as error_Ctx,
		...error_ctx_a1 as error_Ctx[]
	) as error_Ctx)
}
export {
	throw_unauthorized as throw__unauthorized
}
