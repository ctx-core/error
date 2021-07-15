import { assign, clone } from '@ctx-core/object'
import { throw_error } from './throw_error.js'
import type { error_ctx_I } from './error_ctx_I.js'
/**
 * Throws a missing_argument error (HTTP 500)
 * @example
 * throw_missing_argument({key: 'ctx.foobar', type: 'baz__agent'}) // ctx.foobar is not defined - baz__agent
 */
export function throw_missing_argument(...error_ctx_a:error_ctx_I[]):void {
	const error_ctx = clone(...error_ctx_a as error_ctx_I[]) as error_ctx_I
	throw_error(assign({
			type: 'missing_argument',
			http_status: 500,
			error_message: `${error_ctx.key} is not defined - ${error_ctx.type || 'Unknown Type'}`,
			http_error_message: 'Error',
		} as error_ctx_I,
		error_ctx) as error_ctx_I)
}
export {
	throw_missing_argument as throw__missing_argument
}
