import { assign, clone, omit } from '@ctx-core/object'
import type { error_ctx_I } from './error_ctx_I.js'
import { throw_error } from './throw_error.js'
/**
 * Throws a invalid_state error (HTTP 500)
 * @example
 * throw_invalid_state({key: 'ctx.foobar'}) // ctx.foobar is in an invalid state
 */
export function throw_invalid_state(...error_ctx_a:InvalidStateError_I[]):void {
	throw_error(invalid_state_error_(clone(...error_ctx_a)))
}
export function invalid_state_error_(error_ctx:InvalidStateError_I) {
	return new InvalidStateError(error_ctx)
}
export class InvalidStateError extends Error implements InvalidStateError_I {
	type = 'invalid_state'
	http_status = 500
	key:string
	reason:string
	error_message:string
	http_error_message = 'Error'
	constructor(error_ctx:InvalidStateError_I) {
		super()
		this.key = error_ctx.key
		this.reason = error_ctx.reason || 'No reason given.'
		this.error_message = error_ctx.error_message || `${this.key} is in an invalid state. ${this.reason}`
		assign(this, omit(error_ctx, 'key', 'reason', 'error_message'))
	}
}
export interface InvalidStateError_I extends error_ctx_I {
	key:string
	reason?:string
}
export type throw_invalid_state_ctx_type = InvalidStateError_I
export {
	throw_invalid_state as throw__invalid_state
}
