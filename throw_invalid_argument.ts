import { assign, clone } from '@ctx-core/object'
import type { error_ctx_type } from './error_ctx_type'
import { throw_error } from './throw_error'
/**
 * Throws a invalid_argument error (HTTP 500)
 * @example
 * throw_invalid_argument({key: 'ctx.foobar'}) // ctx.foobar is invalid
 */
export function throw_invalid_argument(...error_ctx_a1:throw_invalid_argument_ctx_type[]) {
	const error_ctx = clone(...error_ctx_a1) as throw_invalid_argument_ctx_type
	throw_error(assign({
			type: 'invalid_argument',
			http_status: 500,
			error_message: `${error_ctx.key} is invalid`,
			http_error_message: 'Error',
		} as throw_invalid_argument_ctx_type,
		error_ctx as throw_invalid_argument_ctx_type
	) as throw_invalid_argument_ctx_type)
}
export interface throw_invalid_argument_ctx_type extends error_ctx_type {
	key?:string
}
export {
	throw_invalid_argument as throw__invalid_argument
}
