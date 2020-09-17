import { assign, clone } from '@ctx-core/object'
import { throw_error } from './throw_error'
import type { error_ctx_type } from './error_ctx_type'
/**
 * Throws a missing_argument error (HTTP 500)
 * @example
 * throw_missing_argument({key: 'ctx.foobar', type: 'baz__agent'}) // ctx.foobar is not defined - baz__agent
 */
export function throw_missing_argument(...error_ctx_a1:error_ctx_type[]) {
	const error_ctx = clone(...error_ctx_a1 as error_ctx_type[]) as error_ctx_type
	throw_error(assign({
			type: 'missing_argument',
			http_status: 500,
			error_message: `${error_ctx.key} is not defined - ${error_ctx.type || 'Unknown Type'}`,
			http_error_message: 'Error',
		} as error_ctx_type,
		error_ctx) as error_ctx_type)
}
export const throw__missing_argument = throw_missing_argument
// export type throw_missing_argument_ctx_type = error_ctx_type&{
// 	key?:string
// }
