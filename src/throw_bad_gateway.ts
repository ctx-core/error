import { assign } from '@ctx-core/object'
import type { error_ctx_T } from './error_ctx_T'
import { throw_error } from './throw_error'
/**
 * Throws a bad_gateway error (HTTP 502)
 * @example
 * throw__bad_gateway(ctx) // Bad Gateway
 */
export function throw_bad_gateway(...error_ctx_a1:error_ctx_T[]):void {
	throw_error(assign({
			type: 'bad_gateway',
			http_status: 502,
			error_message: 'Bad Gateway',
			http_error_message: 'Bad Gateway',
		} as error_ctx_T,
		...error_ctx_a1 as error_ctx_T[]
	) as error_ctx_T)
}
export {
	throw_bad_gateway as throw__bad_gateway
}
