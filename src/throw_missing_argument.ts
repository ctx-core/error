import { assign, clone } from '@ctx-core/object'
import { throw_error } from './throw_error'
import type { error_ctx_T } from './error_ctx_T'
/**
 * Throws a missing_argument error (HTTP 500)
 * @example
 * throw_missing_argument({key: 'ctx.foobar', type: 'baz__agent'}) // ctx.foobar is not defined - baz__agent
 */
export function throw_missing_argument(...error_ctx_a1:error_ctx_T[]):void {
	const error_ctx = clone(...error_ctx_a1 as error_ctx_T[]) as error_ctx_T
	throw_error(assign({
			type: 'missing_argument',
			http_status: 500,
			error_message: `${error_ctx.key} is not defined - ${error_ctx.type || 'Unknown Type'}`,
			http_error_message: 'Error',
		} as error_ctx_T,
		error_ctx) as error_ctx_T)
}
export {
	throw_missing_argument as throw__missing_argument
}
