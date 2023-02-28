import { assign, clone, omit } from '@ctx-core/object'
import { error__throw } from '../error__throw/index.js'
import { HttpError } from '../http_error__throw/index.js'
/** @type {typeof import('./index.d.ts').invalid_state_error_} */
export const invalid_state_error_ = error_o=>
	new InvalidStateError(error_o)
/**
 * Throws a invalid_state error (HTTP 500)
 * @type {import('./index.d.ts').invalid_state__throw}
 * @example
 * invalid_state__throw({key: 'ctx.foobar'}) // ctx.foobar is in an invalid state
 */
export function invalid_state__throw(...error_ctx_a) {
	error__throw(invalid_state_error_(clone(...error_ctx_a)))
}
/** @type {import('./index.d.ts').InvalidStateError} */
export class InvalidStateError extends HttpError {
	constructor(error_o) {
		super()
		this.type = 'invalid_state'
		this.http_status = 500
		this.error = this.type
		this.http_error = this.type
		this.http_error_message = 'Error'
		this.key = error_o.key
		this.reason = error_o.reason || 'No reason given.'
		this.error_message = error_o.error_message || `${this.key} is in an invalid state. ${this.reason}`
		assign(this, omit(error_o, 'key', 'reason', 'error_message'))
	}
}
export {
	invalid_state__throw as throw_invalid_state,
	invalid_state__throw as throw__invalid_state,
}
