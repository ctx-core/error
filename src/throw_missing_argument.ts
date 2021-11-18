import { assign, clone } from '@ctx-core/object'
import type { error_ctx_I } from './error_ctx_I.js'
import { throw_error } from './throw_error.js'
/**
 * Throws a missing_argument error (HTTP 500)
 * @example
 * throw_missing_argument({key: 'ctx.foobar', type: 'baz__agent'}) // ctx.foobar is not defined - baz__agent
 */
export function throw_missing_argument(...error_ctx_a:error_ctx_I[]):void {
	throw_error(missing_argument_error_(clone(...error_ctx_a)))
}
export function missing_argument_error_(error_ctx:MissingArgumentError_I) {
  return new MissingArgumentError(error_ctx)
}
export class MissingArgumentError extends Error implements MissingArgumentError_I {
	key:string
	error_message:string
	type = 'missing_argument'
	http_status = 500
	http_error_message = 'Error'
	constructor(error_ctx:MissingArgumentError_I) {
		super()
		this.key = error_ctx.key
		this.error_message =
			error_ctx.error_message || `${error_ctx.key} is not defined - ${error_ctx.type || 'Unknown Type'}`
		assign(this, error_ctx)
	}
}
export interface MissingArgumentError_I extends error_ctx_I {
	key:string
}
export {
	throw_missing_argument as throw__missing_argument
}
