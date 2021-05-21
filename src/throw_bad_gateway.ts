import { assign } from '@ctx-core/object'
import type { error_Ctx } from './error_Ctx'
import { throw_error } from './throw_error'
/**
 * Throws a bad_gateway error (HTTP 502)
 * @example
 * throw__bad_gateway(ctx) // Bad Gateway
 */
export function throw_bad_gateway(...error_ctx_a1:error_Ctx[]):void {
	throw_error(assign({
			type: 'bad_gateway',
			http_status: 502,
			error_message: 'Bad Gateway',
			http_error_message: 'Bad Gateway',
		} as error_Ctx,
		...error_ctx_a1 as error_Ctx[]
	) as error_Ctx)
}
export {
	throw_bad_gateway as throw__bad_gateway
}
