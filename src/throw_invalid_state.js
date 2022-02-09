import { assign, clone, omit } from '@ctx-core/object'
import { HttpError } from './throw_http_error.js'
import { throw_error } from './throw_error.js'
/** @type {import('./throw_invalid_state.d.ts').invalid_state_error_} */
export const invalid_state_error_ = error_ctx=>new InvalidStateError(error_ctx)
/**
 * Throws a invalid_state error (HTTP 500)
 * @type {import('./throw_invalid_state.d.ts').throw_invalid_state}
 * @example
 * throw_invalid_state({key: 'ctx.foobar'}) // ctx.foobar is in an invalid state
 */
export function throw_invalid_state(...error_ctx_a) {
	throw_error(invalid_state_error_(clone(...error_ctx_a)))
}
/** @type {import('./throw_invalid_state.d.ts').InvalidStateError} */
export class InvalidStateError extends HttpError {
	constructor(error_ctx) {
		super()
		this.type = 'invalid_state'
		this.http_status = 500
		this.error = this.type
		this.http_error = this.type
		this.http_error_message = 'Error'
		this.key = error_ctx.key
		this.reason = error_ctx.reason || 'No reason given.'
		this.error_message = error_ctx.error_message || `${this.key} is in an invalid state. ${this.reason}`
		assign(this, omit(error_ctx, 'key', 'reason', 'error_message'))
	}
}
export { throw_invalid_state as throw__invalid_state }
