import { assign } from '@ctx-core/object'
import type { error_Ctx } from './error_Ctx'
import { throw_error } from './throw_error'
/**
 * Throws a Bad Credentials error (HTTP 401)
 * @example
 * throw__bad_credentials(ctx) // Unauthorized
 */
export function throw_bad_credentials(...error_ctx_a1:error_Ctx[]):void {
	throw_error(assign({
			type: 'bad_credentials',
			http_status: 401,
			error_message: 'Unauthorized',
			http_error_message: 'Unauthorized',
		} as error_Ctx,
		...error_ctx_a1 as error_Ctx[]
	) as error_Ctx)
}
export {
	throw_bad_credentials as throw__bad_credentials
}
