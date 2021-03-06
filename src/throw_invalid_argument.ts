import { assign, clone } from '@ctx-core/object'
import type { error_ctx_T } from './error_ctx_T'
import { throw_error } from './throw_error'
/**
 * Throws a invalid_argument error (HTTP 500)
 * @example
 * throw_invalid_argument({key: 'ctx.foobar'}) // ctx.foobar is invalid
 */
export function throw_invalid_argument(...error_ctx_a1:throw_invalid_argument_ctx_T[]):void {
	const error_ctx = clone(...error_ctx_a1) as throw_invalid_argument_ctx_T
	throw_error(assign({
			type: 'invalid_argument',
			http_status: 500,
			error_message: `${error_ctx.key} is invalid`,
			http_error_message: 'Error',
		} as throw_invalid_argument_ctx_T,
		error_ctx as throw_invalid_argument_ctx_T
	) as throw_invalid_argument_ctx_T)
}
export interface throw_invalid_argument_ctx_T extends error_ctx_T {
	key?:string
}
export {
	throw_invalid_argument as throw__invalid_argument
}
