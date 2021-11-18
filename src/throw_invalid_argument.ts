import { assign, clone, omit } from '@ctx-core/object'
import type { error_ctx_I } from './error_ctx_I.js'
import { throw_error } from './throw_error.js'
/**
 * Throws a invalid_argument error (HTTP 500)
 * @example
 * throw_invalid_argument({key: 'ctx.foobar'}) // ctx.foobar is invalid
 */
export function throw_invalid_argument(...error_ctx_a:InvalidArgumentError_I[]):void {
	throw_error(invalid_argument_error_(clone(...error_ctx_a)))
}
export function invalid_argument_error_(error_ctx:InvalidArgumentError_I) {
	return new InvalidArgumentError(error_ctx)
}
export class InvalidArgumentError extends Error implements InvalidArgumentError_I {
	key:string
	error_message:string
	type = 'invalid_argument'
	http_status = 500
	http_error_message = 'Error'
	constructor(error_ctx:InvalidArgumentError_I) {
		super()
		this.key = error_ctx.key
		this.error_message = error_ctx.error_message || `${this.key} is invalid`
		assign(this, omit(error_ctx, 'key', 'error_message'))
	}
}
export interface InvalidArgumentError_I extends error_ctx_I {
	key:string
}
export type throw_invalid_argument_ctx_T = InvalidArgumentError_I
export {
	throw_invalid_argument as throw__invalid_argument
}
