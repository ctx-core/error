import { assign, clone } from '@ctx-core/object'
import { throw_error } from './throw_error'
import type { error_Ctx } from './error_Ctx'
/**
 * Throws a missing_argument error (HTTP 500)
 * @example
 * throw_missing_argument({key: 'ctx.foobar', type: 'baz__agent'}) // ctx.foobar is not defined - baz__agent
 */
export function throw_missing_argument(...error_ctx_a1:error_Ctx[]):void {
	const error_ctx = clone(...error_ctx_a1 as error_Ctx[]) as error_Ctx
	throw_error(assign({
			type: 'missing_argument',
			http_status: 500,
			error_message: `${error_ctx.key} is not defined - ${error_ctx.type || 'Unknown Type'}`,
			http_error_message: 'Error',
		} as error_Ctx,
		error_ctx) as error_Ctx)
}
export {
	throw_missing_argument as throw__missing_argument
}
