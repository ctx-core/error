import { assign, clone } from '@ctx-core/object'
import type { error_Ctx } from './error_Ctx'
import { throw_error } from './throw_error'
/**
 * Throws a invalid_state error (HTTP 500)
 * @example
 * throw_invalid_state({key: 'ctx.foobar'}) // ctx.foobar is in an invalid state
 */
export function throw_invalid_state(...error_ctx_a1:throw_invalid_state_ctx_type[]):void {
	const error_ctx = clone(...error_ctx_a1) as throw_invalid_state_ctx_type
	const reason = error_ctx.reason || 'No reason given.'
	throw_error(assign({
			type: 'invalid_state',
			http_status: 500,
			error_message: `${error_ctx.key} is in an invalid state. ${reason}`,
			http_error_message: 'Error',
		} as throw_invalid_state_ctx_type,
		error_ctx as throw_invalid_state_ctx_type
	) as throw_invalid_state_ctx_type)
}
export interface throw_invalid_state_ctx_type extends error_Ctx {
	key?:string
	reason?:string
}
export {
	throw_invalid_state as throw__invalid_state
}
