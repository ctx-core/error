import { assign } from '@ctx-core/object'
import type { error_ctx_I } from './error_ctx_I'
import { throw_error } from './throw_error'
/**
 * Throws a bad_gateway error (HTTP 502)
 * @example
 * throw__bad_gateway(ctx) // Bad Gateway
 */
export function throw_bad_gateway(...error_ctx_a:error_ctx_I[]):void {
	throw_error(assign({
			type: 'bad_gateway',
			http_status: 502,
			error_message: 'Bad Gateway',
			http_error_message: 'Bad Gateway',
		} as error_ctx_I,
		...error_ctx_a as error_ctx_I[]
	) as error_ctx_I)
}
export {
	throw_bad_gateway as throw__bad_gateway
}
